import Component from "../lib/Component.js";

const newsTemplate = (state) => console.log(state)`
${renderNews(state.news)}
`;

console.log(fetchNews())

function fetchNews() {
    return fetch('http://localhost:8081/news/all-news').then(response => response.json());
}

function renderNews(news) {
    return news.map(news => `
<div class="card col-sm m-1" style="height: 10rem; background-color: rgba(217, 226, 249, 0.3);">
  <div class="card-body">
    <h5 class="card-title">${news.newsHeader}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Sidste opdateret: ${news.localDate}</h6>
    <p class="card-text">${news.newsBody}</p>
    <a href="#" class="card-link">Gå til nyhed</a>
  </div>
</div>
`
    ).join('')
}

const NewsComponent = new Component('news', {news: await fetchNews()}, newsTemplate)


export default NewsComponent;