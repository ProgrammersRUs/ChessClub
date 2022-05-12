import Component from "../lib/Component.js";

class TournamentComponent extends Component {
    constructor(event) {
        let state = {
            title: event.title,
            matches: event.matches
        }
        super('nextEvent', state, (state) =>
            `
  
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
      <th scope="row"><a href="https://www.chess.com/tournament/chess-championship-under-1500-1/$%7Bstate.id%7D%22%3Etest</a></th>
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

export default TournamentComponent
