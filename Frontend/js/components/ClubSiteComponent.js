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

       // const date = new Date(origin);

        let timestamp = state.origin
        let date = new Date(timestamp * 1000);
        let month = date.getMonth();
        let year = date.getFullYear();
        let day = date.getDate();
        let formatedTime = day + '/' + month + '/' + year;

            super('nextEvent', state, (state) =>
            `
      <div class="mb-2 border border-primary rounded h-100">
         <div class="row h-75">
            <div class="col-sm-8 h-100">
                 <strong>${state.title}</strong>
                 <p></p>
                 
                 
           
                <p>Nuværende antal medlemmer: ${state.membersCount}</p>
                <p>Dato oprettet på Chess.com: ${formatedTime}</p>
                <p>Genemsnittelig rating i klubben på Chess.com: ${state.avgRating}</p>
                <a href="${state.link}"><button type="button" class="btn btn-primary">Bliv medlem af klubben på Chess.com</button></a>
            </div>
         </div>
      </div>          `
        );
    }

}

export default ClubSiteComponent
