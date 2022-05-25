import Component from "../../../lib/Component.js";
import ElementObject from "../../../lib/ElementObject.js";
import TwoRowComponent from "../../TwoRowComponent.js";
import ContactUsTableComponent from "../tables/ContactUsTableComponent.js";


class AddContactUsComponent extends Component {

    constructor() {
        let state = {}

        super('Kontakt os', state, (state) =>
            `<div class="row mx-w-100 h-100">
            <div class="card col-sm m-1 d-block" style="background-color: rgba(217, 226, 249, 0.3);">
                <div class="card-body">
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Klub navn: </span>
                        <input id="postHeader" type="text" class="form-control" placeholder="" aria-label=""
                               aria-describedby="basic-addon1">
                    </div>
                    
                         <div class="input-group mb-3 ">
                        <span class="input-group-text" id="basic-addon1">Link til kort: </span>
                        <input id="iFrameLink" type="text" class="form-control" placeholder="" aria-label=""
                               aria-describedby="basic-addon1">
                    </div>
                    <div class="input-group h-50 mb-3">
                        <span class="input-group-text ">Tekst: </span>
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
        const url = config.endpoints.cms.root + config.endpoints.cms.subPoint.postContactUs
        const button = document.getElementById('submitPost')


        button.addEventListener("click", async () => {
            await postContactUs(url)
            await this.refreshPage()
        })

        async function postContactUs(url) {
            const contactUsHeader = document.getElementById('postHeader').value
            const contactUsBody = document.getElementById('postBody').value
            const iFrameLink = document.getElementById('iFrameLink').value
            const contactUsIsActive = document.getElementById('flexSwitchCheckChecked')
            let isActive = 0

            if (contactUsIsActive.checked) {
                isActive = 1
            }

            let body = {
                user: JSON.parse(sessionStorage.getItem("user")),
                contactUsPage: {
                    creationDate: new Date().toLocaleDateString('en-CA'),
                    header: contactUsHeader,
                    body: contactUsBody,
                    iFrame: iFrameLink,
                    isActive: isActive
                }
            }

            console.log(body)
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
        const contactUsForm = new ElementObject('cms-content');

        let cmsBottom = new ContactUsTableComponent(await
            fetch(config.endpoints.cms.root + config.endpoints.cms.subPoint.allContactUsPages).then(response => response.json()));
        document.getElementById('cms-content-header').innerText = this.name;

        let cmsBody = new TwoRowComponent('what this name for', this, cmsBottom);
        contactUsForm.addComponent(cmsBody)
        contactUsForm.updateDOM();
        cmsBottom.addEventListenersPostTable()
        this.addEventlisenterToContent()
    }
}


export default AddContactUsComponent;

