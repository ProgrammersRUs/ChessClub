import Component from "../../lib/Component.js";
import ElementObject from "../../lib/ElementObject.js";
import NewsTableComponent from "./NewsTableComponent.js";
import TwoRowComponent from "../TwoRowComponent.js";

class AddNewsComponent extends Component{

    constructor() {
        let state = {

        }

        super('Nyheder', state, (state)=>
            `<div class="row mx-w-100 h-100">
            <div class="card col-sm m-1" style="background-color: rgba(217, 226, 249, 0.3);">
                <div class="card-body">
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Overskrift: </span>
                        <input id="newsHeader" type="text" class="form-control" placeholder="" aria-label=""
                               aria-describedby="basic-addon1">
                    </div>
                    <div class="input-group h-50">
                        <span class="input-group-text ">Nyheds tekst: </span>
                        <textarea id="newsBody" class="form-control" aria-label="With textarea"></textarea>
                    </div>
                    <div class="row">
                    <div class="container">
                    <button type="button" class="btn btn-primary" id="submitNews">Opret Nyhed</button>
                              <div class="form-check form-switch float-end">
                        <label class="form-check-label" for="flexSwitchCheckChecked">Publicer nyhed</label>
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked">
                    </div>
                           
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
            await this.refreshPage()
        })

        async function postNews(url) {
            const newsHeader = document.getElementById('newsHeader').value
            const newsBody = document.getElementById('newsBody').value
            const newsIsActive = document.getElementById('flexSwitchCheckChecked')
            let isActive = 0

            if (newsIsActive.checked){
                isActive = 1
            }

            let body = {
                creationDate: new Date().toLocaleDateString('en-CA'),
                newsHeader: newsHeader,
                newsBody: newsBody,
                isActive: isActive
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

    async refreshPage(){
        const newsForm = new ElementObject('cms-content');

        let cmsBottom = new NewsTableComponent(await
            fetch(config.endpoints.cms.root + config.endpoints.cms.subPoint.allNews).then(response => response.json()));
        document.getElementById('cms-content-header').innerText = this.name;

        let cmsBody = new TwoRowComponent('what this name for', this, cmsBottom);
        newsForm.addComponent(cmsBody)
        newsForm.updateDOM();
        this.addEventliseenter()
    }
}


export default AddNewsComponent;

