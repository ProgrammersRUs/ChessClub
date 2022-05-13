import Component from "../lib/Component.js";

class TournamentComponent extends Component {
    constructor(event) {
        let state = {
            players: event.players,
            username: event.username
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
      <th scope="row"><a href="https://www.chess.com/tournament/testisdabest</a></th>
      
      </tr>
       <tr>
        <th scope="row"><a href="">test</a></th>
        <td>${state.username[0].username}</td>
        <td>vs</td>
        <td>${state.players[0].black}+"/"+${state.username.username}</td>
        <!--Epoch time kan omregnes i javascript -->
        <!-- <td>${state.players[0].start_time}</td> -->
    </tr>
    <tr>
      <th scope="row"><a href="">test</a></th>
      <td>${state.username[1].username}</td>
      <td>vs</td>
      <td>${state.username[2].username}</td>
    </tr>
  </tbody>
</table>
            `
        );
    }

}

export default TournamentComponent
