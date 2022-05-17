import Component from "../lib/Component.js";

class TournamentComponent extends Component {
    constructor(event) {
        let state = {
            games: event.games,
            username: event.username,
            urls: event.url
        }

        super('nextEvent', state, (state) =>
            `
  
<table class="table">
    <thead class="thead-dark">
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

  
  `)
  
  }
  
  renderTournament(games) {

  return games.map(games => `   
   <table class="table">   
    <thead class="thead-dark">
       <tr>
        <th class="col-md-3 col-sm-3 col-3"><a href="${games.url}">Gå til kamp</a></th>
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
