import Component from "../lib/Component.js";

class ClubSiteComponent extends Component {
    constructor(event) {
        let state = {
            August: event.silke,
            title: event.title,
            origin: event.origin,
            membersCount: event.membersCount,
            avgRating: event.avgRating,
            members: event.members,
            link: event.href,
            matches: event.matches,
        }
        super('nextEvent', state, (state) =>
            `
      <div class="mb-2 border border-primary rounded h-100">
         <div class="row h-75">
            <div class="col-sm-8 h-100">
                 <strong>${state.title}</strong>
                <p>${state.August}</p>
                <p>antal medlemmer: ${state.membersCount}</p>
                <p>oprettet: ${state.origin}</p>
                <p>Genemsnittelige Rating: ${state.avgRating}</p>
                <a href="${state.link}"><button type="button" class="btn btn-primary">Join vores online klub</button></a>
            </div>
         </div>     
      </div>
      
      
 <table class="table">
    <thead class="thead-dark">
        <tr>
           <th scope="col">Se live</th>
           <th scope="col">Hold 1</th>
           <th scope="col">Spiller mod</th>
           <th scope="col">Hold 2</th>
         </tr>
     </thead>
  <tbody>
    <tr>
      <th scope="row"><a href="https://www.chess.com/tournament/chess-championship-under-1500-1/${state.id}">test</a></th>
        <td>${state.matches[0].name}</td>
        <td>vs</td>
        <td>${state.title}</td>
      </tr>
       <tr>
        <th scope="row"><a href="">test</a></th>
        <td>${state.matches[1].name}</td>
        <td>vs</td>
        <td>${state.title}</td>
        <!--Epoch time kan omregnes i javascript -->
        <td>${state.matches[1].start_time}</td>
    </tr>
    <tr>
      <th scope="row"><a href="">test</a></th>
      <td>${state.matches[2].name}</td>
      <td>vs</td>
      <td>${state.title}</td>
    </tr>
  </tbody>
</table>       
            `
        );
    }

}

export default ClubSiteComponent