import Component from "../lib/Component.js";

class TournamentComponent extends Component {
    constructor(event) {
        let state = {
            games: event.games,
            tournamentName: event.tournamentName,
            username: event.username,
            urls: event.url
        }

        super('nextEvent', state, (state) =>
            `




<div class="container marketing mt-3" id="myContent">
 <div class="mb-2 border"> <!-- border -->
  <div class="container"> <!--original -->
   <div class="col-md-12">
    <div style="margin-top: 5px">    
      <table class="table">
       <thead class="thead-dark">
        <h2 class="featurette-heading">Igangværende turnering: ${state.tournamentName}</span></h2>
         <tr>
           <th class="col-md-3 col-sm-3 col-3">Se live</th>
           <th class="col-md-3 col-sm-3 col-3">Hvid</th>
           <th class="col-md-3 col-sm-3 col-3">vs</th>
           <th class="col-md-3 col-sm-3 col-3">Sort</th>
         </tr>
       </thead>
      <tbody>
      ${this.renderTournament(state.games)}
      </tbody>
     </table>
    </div>
   </div>
  </div>
 </div>
</div>

  `)

    }

    renderTournament(games) {

        return games.map(games => `   
   <table class="table">   
    <thead class="thead-dark">
       <tr>
        <th class="col-md-3 col-sm-3 col-3"><a class="link-custom" href="${games.url}" target="_blank">Gå til kamp</a></th>
        <td class="col-md-3 col-sm-3 col-3">${games.white.username}</td>
        <td class="col-md-3 col-sm-3 col-3">vs</td>
        <td class="col-md-3 col-sm-3 col-3">${games.black.username}</td>
    </tr>
       
    </thead>
</table>





 
            `
        ).join('')

    }


}


export default TournamentComponent