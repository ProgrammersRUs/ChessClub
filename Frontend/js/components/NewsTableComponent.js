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
            </div>`)
    }


    renderNews(news) {
        let count = 0;
        return news.map(news => `
                            <tr>
                                <td>${news.newsHeader}</td>
                                <td>${news.creationDate}</td>
                                <td class="accordion-item col-2">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse${count}" aria-expanded="true"
                                            aria-controls="collapse${count}"> Se mere
                                    </button>
                                </td>
                            </tr>
                            <tr id="collapse${count}" class="accordion-collapse collapse"
                                aria-labelledby="headingOne1" data-bs-parent="#accordionExample">
                                <td class="accordion-body col-4">
                                    ${news.newsBody}<
                                </td>
                            </tr>
                            ${count++}
           
`
        ).join('')
    }
}

//document.getElementById('flexSwitchCheckChecked').addEventListener("change", () => console.log(document.getElementById('flexSwitchCheckChecked').checked) )

export default NewsTableComponent;