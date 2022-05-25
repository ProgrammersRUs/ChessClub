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

<div class="container marketing mt-3" id="myContent">
 <div class="mb-2 border"> <!-- border -->
  <div class="container"> <!--original -->
   <div class="col-md-12">
    <div style="margin-top: 5px">
     <h2 class="featurette-heading">Haslev og Faxe: Online Skakklub <span class="text-muted"></span></h2>
    </div>
    <p class="lead">I Faxe og Haslev Online skakklub spiller vi regulært turneringer og kampe mod hinadnen. Vi leder altid efter nye der har lyst til at deltage.</p>

    <p>Lyder det som noget for dig? Klik på linket herunder for at ansøge om at være af vores online fælleskab.</p>
    <div class="d-flex justify-content-center"> <!-- centrerer knappen i midten af boksen -->
     <a href="${state.link}"><button type="button" class="btn btn-primary button-custom">Bliv medlem af klubben på Chess.com</button></a>
     </div>
     <p>Nuværende antal medlemmer: ${state.membersCount}</p>
     <p>Dato oprettet på Chess.com: ${formatedTime}</p>
     <p>Genemsnittelig rating i klubben på Chess.com: ${state.avgRating}</p>
     <p>BEMÆRK: Ratingen af klubbensmedlemmer er blot ledende og ikke afgørende for om du kan ansøge i klubben!</p>

   </div>
  </div>
 </div>
</div>

 `
        );
    }

}

export default ClubSiteComponent
