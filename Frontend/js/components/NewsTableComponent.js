import Component from "../lib/Component.js";

class NewsTableComponent extends Component {

    constructor(news) {
        let state = {
            news: news
        }
        super('news', state, (state) =>
            `

            <div className="row mx-w-1003">
                <div className="container-fluid">
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Overskrift</th>
                            <th scope="col">Dato oprettet:</th>
                            <th scope="col"></th>
                        </tr>
                        </thead>
                        <tbody>
            ${this.renderNews(state.news)}
                        </tbody>
                    </table>
                </div>

            </div>

                         <div class="row mx-w-1003">
                    <div class="container-fluid">
                        <table class="table">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Overskrift</th>
                                <th scope="col">Dato oprettet: </th>
                                <th scope="col"></th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Ny skak nyhed</td>
                                <td>12/05/2022</td>
                                <td class="accordion-item col-2">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne1" aria-expanded="true"
                                            aria-controls="collapseOne1"> Se mere
                                    </button>
                                </td>
                            </tr>
                            <tr id="collapseOne1" class="accordion-collapse collapse"
                                aria-labelledby="headingOne1" data-bs-parent="#accordionExample">
                                <td class="accordion-body col-4">
                                    <strong>This is the first item's accordion body.</strong> It is shown by default,
                                    until the collapse plugin adds the appropriate classes that we use to style each
                                    element. These classehjhujs control the overall appearance, as well as the showing and
                                    hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                                    our default variables. It's also worth noting that just about any HTML can go within
                                    the <code>.accordion-body</code>, though the transition does limit overflow.
                                </td>
                            </tr>

                            <tr>
                                <td>Ny skak nyhed</td>
                                <td>12/05/2022</td>
                                <td class="accordion-item col-2">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne2" aria-expanded="true"
                                            aria-controls="collapseOne2"> Se mere
                                    </button>
                                </td>
                            </tr>
                            <tr id="collapseOne2" class="accordion-collapse collapse"
                                aria-labelledby="headingOne2" data-bs-parent="#accordionExample">
                                <td class="accordion-body col-4">
                                    <strong>This is the first item's accordion body.</strong> It is shown by default,
                                    until the collapse plugin adds the appropriate classes that we use to style each
                                    element. These classes control the overall appearance, as well as the showing and
                                    hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                                    our default variables. It's also worth noting that just about any HTML can go within
                                    the <code>.accordion-body</code>, though the transition does limit overflow.
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
`)
    }


    renderNews(news) {
        return news.map(news => `
                            <tr>
                                <td>${news.newsHeader}</td>
                                <td>${news.creationDate}</td>
                                <td class="accordion-item col-2">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse${news.newsId}" aria-expanded="true"
                                            aria-controls="collapse${news.newsId}"> Se mere
                                    </button>
                                </td>
                            </tr>
                            <tr id="collapse${news.newsId}" class="accordion-collapse collapse"
                                aria-labelledby="headingOne1" data-bs-parent="#accordionExample">
                                <td class="accordion-body col-4">
                                    ${news.newsBody}<
                                </td>
                            </tr>
                
           
`
        ).join('')
    }
}

//document.getElementById('flexSwitchCheckChecked').addEventListener("change", () => console.log(document.getElementById('flexSwitchCheckChecked').checked) )

export default NewsTableComponent;