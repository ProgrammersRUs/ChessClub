import Component from "../../lib/Component.js";

class NewsTableComponent extends Component {

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
                                <button type="button" class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i class="fa fa-edit"></i> </button>
                                <button type="button" class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i ${this.isActiveNews(news)}></i> </button>
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


    addEventListenerDelete() {

        this.state.news.forEach( news =>{
            console.log(news)

            const button = document.getElementById('deleteNews'+news.newsId)

            button.addEventListener("click", async()=>{
                await deleteNews(news)
            })
        })


        async  function deleteNews(news){


            const url = 'http://localhost:8089/news/delete/'+news.newsId

            const fetchOptions = {
                method: "DELETE",
                headers: {"Content-Type": "application/json"},
            };

            const response = await fetch(url, fetchOptions);

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