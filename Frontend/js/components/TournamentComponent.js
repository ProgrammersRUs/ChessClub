import Component from "../lib/Component.js";

class TournamentComponent extends Component {
    constructor(event) {
        let state = {
            players: event.players,
            username: event.username,
            urls: event.url
        }

        super('nextEvent', state, (state) =>
            `
  
<table class="table">
    <thead class="thead-dark">
        <tr>
           <th scope="col">Se live</th>
           <th scope="col">Hvid</th>
           <th scope="col">vs</th>
           <th scope="col">Sort</th>
         </tr>
     </thead>
  <tbody>
    <tr>
      
      
      </tr>
       <tr>
        <th scope="row"><a href="${state.players[0].url}">Gå til kamp</a></th>
        <td>${state.players[0].white.username}</td>
        <td>vs</td>
        <td>${state.players[0].black.username}</td>
        <!--Epoch time kan omregnes i javascript -->
        <!-- <td>${state.players[0].start_time}</td> -->
    </tr>
    <tr>
      <th scope="row"><a href="${state.players[1].url}">Gå til kamp</a></th>
      <td>${state.players[1].white.username}</td>
      <td>vs</td>
      <td>${state.players[1].black.username}</td>
    </tr>
  </tbody>
</table>
            `
        );
    }
}

export default TournamentComponent
