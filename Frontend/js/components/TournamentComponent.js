import Component from "../lib/Component.js";

/*
      let splitWhitePlayerURL = players[0].white.split("/").getLast [1];
        let splitBlackPlayerURL = state.players[0].black.split("player/") [1];
        console.log(splitBlackPlayerURL)

 */

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
        <td>${state.players[0].white).username}</td>
        <td>vs</td>
        <td>${this.getUser(state.players[0].black)}</td>
        <!--Epoch time kan omregnes i javascript -->
        <!-- <td>${state.players[0].start_time}</td> -->
    </tr>
    <tr>
      <th scope="row"><a href="">test</a></th>
      <td>${state.players[0].white}</td>
      <td>vs</td>
      <td>${state.players[0].black}</td>
    </tr>
  </tbody>
</table>
            `
        );
    }
}

export default TournamentComponent
