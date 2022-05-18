import Component from "../../../lib/Component.js";
import AddNewsComponent from "../forms/AddNewsComponent.js";

class AboutUsTableComponent extends Component {

    constructor(aboutUs) {
        let state = {
            aboutUs: aboutUs
        }
        super('aboutUs', state, (state) =>
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
            ${this.renderNews(state.aboutUs)}
          
                        </tbody>
                    </table>
                </div>

            </div>
            

`)

    }


    renderNews(aboutUsList) {


        return aboutUsList.map(aboutUs => `
                            <tr>
                                <td id="newsId${aboutUs.id}"class="d-none">${aboutUs.id}</td>
                                <td>${aboutUs.header}</td>
                                <td>${aboutUs.creationDate}</td>
                                <td class="accordion-item col-2">
                                
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse${aboutUs.id}" aria-expanded="true"
                                            aria-controls="collapse${aboutUs.id}"> Se mere
                                    </button>
                                </td>
                                <td class="col-md-2">
                                <button id="deleteNews${aboutUs.id}" type="button" class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i class="fa fa-trash"></i> </button>
                                <button  type="button" class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i class="fa fa-edit"></i> </button>
                                <button id="updateNewsStatus${aboutUs.id}"  type="button" class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i ${this.isActiveNews(aboutUs)}></i> </button>
                            </td>
                            </tr>
                            <tr id="collapse${aboutUs.id}" class="accordion-collapse collapse"
                                aria-labelledby="headingOne1" data-bs-parent="#accordionExample">
                                <td class="accordion-body" colspan="3">
                                    ${aboutUs.body}<
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
        this.state.aboutUs.forEach(about => {

            const buttonDelete = document.getElementById('deleteNews' + about.id)
            const buttonUpdateStatus = document.getElementById('updateNewsStatus' + about.id)
            console.log(buttonUpdateStatus)

            buttonDelete.addEventListener("click", async () => {
                await deleteNews(about)
                await new AddNewsComponent().refreshPage()
            })

            buttonUpdateStatus.addEventListener("click", async () => {
                await updateNewsStatus(about)
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

export default AboutUsTableComponent;