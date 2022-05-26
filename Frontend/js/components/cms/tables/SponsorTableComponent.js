import Component from "../../../lib/Component.js";
import AddSponsorComponent from "../forms/AddSponsorComponent.js";

class SponsorTableComponent extends Component {

    constructor(sponsor) {
        let state = {
            sponsor: sponsor
        }
        super('sponsor', state, (state) =>
            `

            <div class="row mx-w-1003">
                <div class="container-fluid">
                    <table class="table">
                        <thead>
                        <tr>
                            <th scope="col">Navn</th>
                            <th scope="col"></th>
                        </tr>
                        </thead>
                        <tbody>
            ${this.renderSponsor(state.sponsor)}
                        </tbody>
                    </table>
                </div>
            </div>

  
`)
    }


    renderSponsor(sponsor) {
        return sponsor.map(s => `
                            <tr>
                                <td id="sponsorHeader${s.id}" contenteditable="true">${s.name}</td>
                                <td class="accordion-item col-3">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse${s.id}" aria-expanded="true"
                                            aria-controls="collapse${s.id}"> Se mere
                                    </button>
                                </td>
                                <td class="col-md-2">
                                    <button id="deleteSponsor${s.id}" type="button" class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i class="fa fa-trash"></i> </button>
                                    <button id="updatePostInformation${s.id}" type="button" class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i class="fa fa-save"></i> </button>
       
                                </td>
                            </tr>
                            <tr id="collapse${s.id}" class="accordion-collapse collapse"
                                aria-labelledby="headingOne1" data-bs-parent="#accordionExample">
                                <td id="sponsorBody${s.id}" class="accordion-body" contenteditable="true" colspan="3">
                                    ${s.description}
                                </td>
                            </tr>
                
           
`
        ).join('')
    }

    addEventListenersSponsorTable() {

        const url = config.endpoints.cms.root + config.endpoints.cms.subPoint.deleteSponsor;
        this.state.sponsor.forEach(sponsor => {

            const buttonDelete = document.getElementById('deleteSponsor' + sponsor.id)
            const buttonUpdateInformation = document.getElementById('updatePostInformation' + sponsor.id)

            buttonDelete.addEventListener("click", async () => {
                await deleteSponsor(sponsor)
                await new AddSponsorComponent().refreshPage()
            })

            buttonUpdateInformation.addEventListener("click", async () => {
                await updatePostInformation(sponsor)
                await new AddSponsorComponent().refreshPage()
            })
        })


        async function deleteSponsor(sponsor) {

            let body = {
                user: JSON.parse(sessionStorage.getItem('user')),
                sponsor: {
                    id:sponsor.id
                }
            }

            const fetchOptions = {
                    method: "DELETE",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(body)
                }
            ;

            const response = await fetch(url + sponsor.id, fetchOptions);

            if (!response) {
                const errorMessage = await response.text();
                console.log(errorMessage)
                throw new Error(errorMessage);

            }
        }

        async function updatePostInformation(sponsor) {

            const postHeader = document.getElementById('sponsorHeader' + sponsor.id).innerText
            const postBody = document.getElementById('sponsorBody' + sponsor.id).innerText



            let body = {
                user: JSON.parse(sessionStorage.getItem('user')),
                sponsor: {
                    id: sponsor.id,
                    name: postHeader,
                    description: postBody,
                    imgSrc: sponsor.imgSrc
                }
            }

            console.log(body)
            const fetchOptions = {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            };
            const response = await fetch(url + sponsor.id, fetchOptions);

            if (!response) {
                const errorMessage = await response.text();
                console.log(errorMessage)
                throw new Error(errorMessage);

            }
        }
    }

}

export default SponsorTableComponent;