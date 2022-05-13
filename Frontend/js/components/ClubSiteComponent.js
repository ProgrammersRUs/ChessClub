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
        super('nextEvent', state, (state) =>
            `
      <div class="mb-2 border border-primary rounded h-100">
         <div class="row h-75">
            <div class="col-sm-8 h-100">
                 <strong>${state.title}</strong>
           
                <p>antal medlemmer: ${state.membersCount}</p>
                <p>oprettet: ${state.origin}</p>
                <p>Genemsnittelige Rating: ${state.avgRating}</p>
                <a href="${state.link}"><button type="button" class="btn btn-primary">Join vores online klub</button></a>
            </div>
         </div>
      </div>          `
        );
    }

}

export default ClubSiteComponent
