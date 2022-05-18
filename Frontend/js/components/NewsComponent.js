import Component from "../lib/Component.js";

class NewsComponent extends Component{

    constructor(news) {
        let state = {
            news: news
        }
        super('news', state, (state) =>
            this.renderNews(state.news));
    }

 renderNews(news) {

    return news.filter(news => news.isActive == true).map(news =>  `
<div class="card col-sm m-1" style="height: 10rem; background-color: rgba(217, 226, 249, 0.3);">
  <div class="card-body">
    <h5 class="card-title">${news.newsHeader}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Sidste opdateret: ${news.creationDate}</h6>
    <p class="card-text">${news.newsBody}</p>
    <a href="#" class="card-link">Gå til nyhed</a>
  </div>
</div>
`
    ).join('')
}
}

//document.getElementById('flexSwitchCheckChecked').addEventListener("change", () => console.log(document.getElementById('flexSwitchCheckChecked').checked) )

export default NewsComponent;