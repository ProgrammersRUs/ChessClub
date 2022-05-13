import Component from "../lib/Component.js";

class AddNewsComponent extends Component{

    constructor(news) {
        let state = {
            news: news
        }

        super('post-news', state, (state)=>
            `<div class="row mx-w-100 h-100">
            <div class="card col-sm m-1" style="background-color: rgba(217, 226, 249, 0.3);">
                <div class="card-body">
                    <h8 class="header">${state.news}</h8>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Overskrift: </span>
                        <input id="newsHeader" type="text" class="form-control" placeholder="" aria-label=""
                               aria-describedby="basic-addon1">
                    </div>
                    <div class="input-group h-50">
                        <span class="input-group-text ">Nyheds tekst: </span>
                        <textarea id="newsBody" class="form-control" aria-label="With textarea"></textarea>
                    </div>
                    <div class="container-fluid">
                            <button type="button" class="btn btn-primary" id="submitNews">Opret Nyhed</button>
                              <div class="form-check form-switch float-end">
                        <label class="form-check-label" for="flexSwitchCheckChecked">Publicer nyhed</label>
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked>
                    </div>
                    </div>
            
                  
                </div>
            </div>
        </div>
`);
    }

    addEventliseenter() {
        const url = 'http://localhost:8089/news/new'
        const button = document.getElementById('submitNews')

        console.log(button)

        button.addEventListener("click", async() => {
            await postNews(url)
        })

        async function postNews(url) {
            const newsHeader = document.getElementById('newsHeader').value
            const newsBody = document.getElementById('newsBody').value
            console.log(newsBody)

            let body = {
                creationDate: new Date().toLocaleDateString('en-CA'),
                newsHeader: newsHeader,
                newsBody: newsBody
            }
            console.log(body)

            const fetchOptions = {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            };
            const response = await fetch(url,fetchOptions );
            if (!response) {
                const errorMessage = await response.text();
                console.log(errorMessage)
                throw new Error(errorMessage);

            }
            return response;

        }
    }
}


export default AddNewsComponent;

