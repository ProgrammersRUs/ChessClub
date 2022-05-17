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
           <th scope="col">Se live</th>
           <th scope="col">Hvid</th>
           <th scope="col">vs</th>
           <th scope="col">Sort</th>
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
        <th><a href="${games.url}">Gå til kamp</a></th>
        <td>${games.white.username}</td>
        <td>vs</td>
        <td>${games.black.username}</td>
    </tr>
       
    </thead>
</table>
 
            `

      ).join('')

  }
}

export default TournamentComponent
