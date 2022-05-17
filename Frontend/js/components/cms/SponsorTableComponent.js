import Component from "../../lib/Component.js";

class SponsorTableComponent extends Component {

    constructor(sponsor) {
        let state = {
            sponor: sponsor
        }
        super('news', state, (state) =>
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
            ${this.renderSponsor(state.sponor)}
                        </tbody>
                    </table>
                </div>

            </div>

  
`)
    }


    renderSponsor(sponsor) {
        return sponsor.map(s => `
                            <tr>
                                <td>${s.name}</td>
                                <td class="accordion-item col-3">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse${s.id}" aria-expanded="true"
                                            aria-controls="collapse${s.id}"> Se mere
                                    </button>
                                </td>
                                <td class="col-md-2">
                                    <button type="button" class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i class="fa fa-trash"></i> </button>
                                    <button type="button" class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i class="fa fa-edit"></i> </button>
       
                                </td>
                            </tr>
                            <tr id="collapse${s.id}" class="accordion-collapse collapse"
                                aria-labelledby="headingOne1" data-bs-parent="#accordionExample">
                                <td class="accordion-body" colspan="3">
                                    ${s.description}<
                                </td>
                            </tr>
                
           
`
        ).join('')
    }

}



//document.getElementById('flexSwitchCheckChecked').addEventListener("change", () => console.log(document.getElementById('flexSwitchCheckChecked').checked) )

export default SponsorTableComponent;