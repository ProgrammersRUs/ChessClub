import Component from "../lib/Component.js";


class ClubSiteComponent extends Component {
    constructor(event) {
        let state = {
            title: event.title,
            origin: event.origin,
            membersCount: event.membersCount,
            avgRating: event.avgRating,
            members: event.members,
            link: event.href
        }

        let timestamp = state.origin
        let date = new Date(timestamp * 1000);
        let month = date.getMonth();
        let year = date.getFullYear();
        let day = date.getDate();
        let formatedTime = day + '/' + month + '/' + year;

        super('nextEvent', state, (state) =>
            `
      <div class="mb-2 border">
         <div class="row">
             <div class="container">
                <div class="row ">
                     <div class="col-sm-8">
                        <div class="col-sm-8 h-100">
                        <strong><h2>Haslev og Faxe: Online Skakklub</h2></strong>
                        <p>I Faxe og Haslev Online skakklub spiller vi regulært turneringer og kampe mod hindanen. Vi leder altid efter nye der har lyst til at deltage.
                        <br>
                        Lyder det som noget for dig? Klik på linket herunder for at ansøge om at være af vores online fælleskab.
                        </p>
                        <a href="${state.link}"><button type="button" class="btn btn-primary">Bliv medlem af klubben på Chess.com</button></a>
                 
                        <p>Nuværende antal medlemmer: ${state.membersCount}</p>
                        <p>Dato oprettet på Chess.com: ${formatedTime}</p>
                        <p>Genemsnittelig rating i klubben på Chess.com: ${state.avgRating}</p>
                
                         <p>BEMÆRK: Ratingen af klubbensmedlemmer er blot ledende og ikke afgørende for om du kan ansøge i klubben!</p>
                     </div>
                </div>
   
 
      </div>
      </div>
      </div></div>
         `
        );
    }

}

export default ClubSiteComponent
