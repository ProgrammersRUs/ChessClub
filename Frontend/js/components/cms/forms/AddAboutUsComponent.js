import Component from "../../../lib/Component.js";
import ElementObject from "../../../lib/ElementObject.js";
import NewsTableComponent from "../tables/NewsTableComponent.js";
import TwoRowComponent from "../../TwoRowComponent.js";

class AddAboutUsComponent extends Component {

    constructor() {
        let state = {}

        super('Om os', state, (state) =>
            `<div class="row mx-w-100 h-100">
            <div class="card col-sm m-1" style="background-color: rgba(217, 226, 249, 0.3);">
                <div class="card-body">
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Overskrift: </span>
                        <input id="postHeader" type="text" class="form-control" placeholder="" aria-label=""
                               aria-describedby="basic-addon1">
                    </div>
                    <div class="input-group h-50">
                        <span class="input-group-text ">Om os tekst: </span>
                        <textarea id="postBody" class="form-control" aria-label="With textarea"></textarea>
                    </div>
                    <div class="row">
                    <div class="container">
                    <button type="button" class="btn btn-primary" id="submitPost">Opret nyt indlæg</button>
                              <div class="form-check form-switch float-end">
                        <label class="form-check-label" for="flexSwitchCheckChecked">Publicer indlæg</label>
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked>
                    </div>
                           
                    </div>
                    </div>
            
                  
                </div>
            </div>
        </div>
`);
    }


    addEventlisenterToContent() {
        const url = config.endpoints.cms.root + config.endpoints.cms.subPoint.postAboutUs
        const button = document.getElementById('submitPost')


        button.addEventListener("click", async () => {
            await postAboutUs(url)
            await this.refreshPage()
        })

        async function postAboutUs(url) {
            const aboutUsHeader = document.getElementById('postHeader').value
            const aboutUsBody = document.getElementById('postBody').value
            const aboutUsIsActive = document.getElementById('flexSwitchCheckChecked')
            let isActive = 0

            if (aboutUsIsActive.checked) {
                isActive = 1
            }

            let body = {
                user: JSON.parse(sessionStorage.getItem("user")),
                news: {
                    creationDate: new Date().toLocaleDateString('en-CA'),
                    header: aboutUsHeader,
                    body: aboutUsBody,
                    imageUrl: "",
                    isActive: isActive
                }
            }
            const fetchOptions = {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            };
            const response = await fetch(url, fetchOptions);
            if (!response) {
                const errorMessage = await response.text();
                console.log(errorMessage)
                throw new Error(errorMessage);

            }
            return response;

        }


    }

    async refreshPage() {
        const aboutUsForm = new ElementObject('cms-content');

        let cmsBottom = new NewsTableComponent(await
            fetch(config.endpoints.cms.root + config.endpoints.cms.subPoint.allSponsers).then(response => response.json()));
        document.getElementById('cms-content-header').innerText = this.name;

        let cmsBody = new TwoRowComponent('what this name for', this, cmsBottom);
        aboutUsForm.addComponent(cmsBody)
        aboutUsForm.updateDOM();
        cmsBottom.addEventListenersNewsTable()
        this.addEventlisenterToContent()
    }
}


export default AddAboutUsComponent;

