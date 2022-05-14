import Component from "../../lib/Component.js";

class AddNewSponsorComponent extends Component {

    constructor() {
        let state = {}

        super('Sponsor', state, (state) =>
            `<div class="row mx-w-100 h-100">
            <div class="card col-sm m-1" style="background-color: rgba(217, 226, 249, 0.3);">
                <div class="card-body">
                  
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Overskrift: </span>
                        <input id="sponsor-header" type="text" class="form-control" placeholder="" aria-label=""
                               aria-describedby="basic-addon1">
                    </div>
                    <div class="input-group h-50">
                        <span class="input-group-text ">Nyheds tekst: </span>
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

    addEventliseenter() {
        const url = 'http://localhost:8089/sponsor/new'
        const button = document.getElementById('submitSponsor')

        button.addEventListener("click", async () => {
            await postSponsor(url)
        })

        async function postSponsor(url) {
            const sponsorHeader = document.getElementById('sponsor-header').value
            const sponsorBody = document.getElementById('sponsor-body').value

            let body = {
                name: sponsorHeader,
                description: sponsorBody
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
}


export default AddNewSponsorComponent;

