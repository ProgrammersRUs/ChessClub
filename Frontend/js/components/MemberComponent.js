import Component from "../lib/Component.js";

class MemberComponent extends Component {
    constructor(event) {
        let state = {
            month: event.month,
            userName: event.userName,
            joined: event.memberJoined
        }

        super('nextEvent', state, (state) =>
            `
            <section id="members" class="mb-1 mt-1">
 
        <h3 class="mb-2">Mød medlemmerne</h3>
        <div class="d-flex justify-content-center">
        
   ${this.renderMembers(state.month)}
   
</div>
</section>
      `)
    }

    renderMembers(month) {
        return month.map(month => `
<div style="display: inline-block">
 <div class="col-lg-12 pt-4 pt-lg-0 ">
  <div class="d-flex justify-content-center">
   <div class="container">
    <div style="height: 100px; width: 100px; background-color: green; border-radius: 25rem">
    </div>
   </div> <!-- ryk det her div tag ned under det nederste divtag for at få den grønne
          boks over navn og dato i stedet for ved siden af -->
    <div class="container">
    <br>
    <a href="https://www.chess.com/member/${month.username}">
     <h5>${month.username}</h5>
    </a>
    <!-- <p>Rating: 1253</p>-->
    <p>${month.joined}</p>
   </div>
  </div>
 </div>
</div>
`
        ).join('');
    }
}

export default MemberComponent