import Component from "../../../lib/Component.js";
import AddNewsComponent from "../forms/AddNewsComponent.js";

class AboutUsTableComponent extends Component {

    constructor(news) {
        let state = {
            news: news
        }
        super('news', state, (state) =>
            `

            <div class="row mx-w-1003">
                <div class="container-fluid">
                    <table class="table">
                        <thead>
                        <tr>
                            <th scope="col">Overskrift</th>
                            <th scope="col">Dato oprettet:</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                        </thead>
                        <tbody>
            ${this.renderNews(state.news)}
          
                        </tbody>
                    </table>
                </div>

            </div>
            

`)

    }


    renderNews(news) {


        return news.map(news => `
                            <tr>
                                <td id="newsId${news.newsId}"class="d-none">${news.newsId}</td>
                                <td>${news.newsHeader}</td>
                                <td>${news.creationDate}</td>
                                <td class="accordion-item col-2">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse${news.newsId}" aria-expanded="true"
                                            aria-controls="collapse${news.newsId}"> Se mere
                                    </button>
                                </td>
                                <td class="col-md-2">
                                <button id="deleteNews${news.newsId}" type="button" class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i class="fa fa-trash"></i> </button>
                                <button  type="button" class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i class="fa fa-edit"></i> </button>
                                <button id="updateNewsStatus${news.newsId}"  type="button" class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i ${this.isActiveNews(news)}></i> </button>
                            </td>
                            </tr>
                            <tr id="collapse${news.newsId}" class="accordion-collapse collapse"
                                aria-labelledby="headingOne1" data-bs-parent="#accordionExample">
                                <td class="accordion-body" colspan="3">
                                    ${news.newsBody}<
                                </td>
                            </tr>

`
        ).join('')


    }

    isActiveNews(news) {
        if (news.isActive == true) {
            return 'class="fa fa-eye"'
        } else {
            return 'class="fa fa-eye-slash"'
        }
    }


    addEventListenersNewsTable() {

        const url = config.endpoints.cms.root + config.endpoints.cms.subPoint.deleteNews;
        this.state.news.forEach(news => {

            const buttonDelete = document.getElementById('deleteNews' + news.newsId)
            const buttonUpdateStatus = document.getElementById('updateNewsStatus' + news.newsId)
            console.log(buttonUpdateStatus)

            buttonDelete.addEventListener("click", async () => {
                await deleteNews(news)
                await new AddNewsComponent().refreshPage()
            })

            buttonUpdateStatus.addEventListener("click", async () => {
                await updateNewsStatus(news)
                await new AddNewsComponent().refreshPage()
            })
        })


        async function deleteNews(news) {

            let body = {
                user: JSON.parse(sessionStorage.getItem('user')),
                news: {
                    newsId: news.newsId
                }
            }

            const fetchOptions = {
                    method: "DELETE",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(body)
                }
            ;

            const response = await fetch(url + news.newsId, fetchOptions);

            if (!response) {
                const errorMessage = await response.text();
                console.log(errorMessage)
                throw new Error(errorMessage);

            }
        }

        async function updateNewsStatus(news) {

            if (news.isActive == 1) {
                news.isActive = 0
            } else if (news.isActive == 0) {
                news.isActive = 1
            }

            console.log(news.isActive)

            let body = {
                user: JSON.parse(sessionStorage.getItem('user')),
                news: {
                    newsId: news.newsId,
                    newsHeader: news.newsHeader,
                    newsBody: news.newsBody,
                    creationDate: news.creationDate,
                    href: news.href,
                    imageUrl: news.imageUrl,
                    isActive: news.isActive
                }
            }

            console.log(body)
            const fetchOptions = {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            };
            const response = await fetch(url + news.newsId, fetchOptions);

            if (!response) {
                const errorMessage = await response.text();
                console.log(errorMessage)
                throw new Error(errorMessage);

            }
        }


    }


}

//document.getElementById('flexSwitchCheckChecked').addEventListener("change", () => console.log(document.getElementById('flexSwitchCheckChecked').checked) )

export default NewsTableComponent;