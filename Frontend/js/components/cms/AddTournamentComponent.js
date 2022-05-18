import Component from "../../lib/Component.js";

class AddTournamentComponent extends Component {

    constructor() {
        let state = {}

        super('Tournament', state, (state) =>
            `<div class="row mx-w-100 h-100">
            <div class="card col-sm m-1" style="background-color: rgba(217, 226, 249, 0.3);">
                <div class="card-body">
                  
                  <div class="input-group mb-3">
                        <span class="input-group-text" id="tournamentURL">URL: </span>
                        <input id="tournamentURL" type="text" class="form-control" placeholder="" aria-label=""
                               aria-describedby="tournamentURL">
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="tournamentName">Navn: </span>
                        <input id="tournamentName" type="text" class="form-control" placeholder="" aria-label=""
                               aria-describedby="tournamentName">
                    </div>
               
                               <div class="row">
                    <div class="container">
                    <button type="button" class="btn btn-primary" id="submitTournament">Opret Turnering</button>
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
        const url = 'https://cmsbackend420.azurewebsites.net/tournament/new'
        const button = document.getElementById('submitTournament')

        button.addEventListener("click", async () => {
            await postTournament(url)
        })

        async function postTournament(url) {
            const tournamentURL = document.getElementById('tournamentURL').value
            const tournamentName = document.getElementById('tournamentName').value

            let body = {
                name: tournamentURL,
                description: tournamentName
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


export default AddTournamentComponent;

