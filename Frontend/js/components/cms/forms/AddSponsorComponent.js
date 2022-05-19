import Component from "../../../lib/Component.js";
import ElementObject from "../../../lib/ElementObject.js";
import TwoRowComponent from "../../TwoRowComponent.js";
import SponsorTableComponent from "../tables/SponsorTableComponent.js";

class AddNewSponsorComponent extends Component {

    constructor() {
        let state = {}

        super('Sponsor', state, (state) =>
            `<div class="row mx-w-100 h-100">
            <div class="card col-sm m-1" style="background-color: rgba(217, 226, 249, 0.3);">
                <div class="card-body">
                  
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Navn: </span>
                        <input id="sponsor-header" type="text" class="form-control" placeholder="" aria-label=""
                               aria-describedby="basic-addon1">
                    </div>
                    <div class="input-group h-50">
                        <span class="input-group-text ">Sponsor tekst: </span>
                        <textarea id="sponsor-body" class="form-control" aria-label="With textarea"></textarea>
                    </div>
                               <div class="row">
                    <div class="container">
                    <button type="button" class="btn btn-primary" id="submitSponsor">Opret Sponsor</button>
                              <div class="form-check form-switch float-end">
                            </div>
                           
                    </div>
                    </div>
            
                  
                </div>
            </div>
        </div>
`);
    }

    addEventlisenterToContent() {
        const url = config.endpoints.cms.root + config.endpoints.cms.subPoint.postSponsor;
        const button = document.getElementById('submitSponsor')

        button.addEventListener("click", async () => {
            await postSponsor(url)
            await this.refreshPage()
        })

        async function postSponsor(url) {
            const sponsorHeader = document.getElementById('sponsor-header').value
            const sponsorBody = document.getElementById('sponsor-body').value

            console.log(sessionStorage.getItem('user'))

            let body = {
                user: JSON.parse(sessionStorage.getItem('user')),
                sponsor: {
                    name: sponsorHeader,
                    description: sponsorBody
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
        const sponsorForm = new ElementObject('cms-content');

        let cmsBottom = new SponsorTableComponent(await
            fetch(config.endpoints.cms.root + config.endpoints.cms.subPoint.allSponsers).then(response => response.json()));
        document.getElementById('cms-content-header').innerText = this.name;

        let cmsBody = new TwoRowComponent('what this name for', this, cmsBottom);
        sponsorForm.addComponent(cmsBody)
        sponsorForm.updateDOM();
        this.addEventlisenterToContent()
    }
}


export default AddNewSponsorComponent;

