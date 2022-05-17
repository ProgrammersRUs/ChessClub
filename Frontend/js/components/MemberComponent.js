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

</section>
      `)
    }

    renderMembers(month) {

        return month.map(month => `

      
                     <div style="display: inline-block">
                        <div class="col-lg-12 pt-4 pt-lg-0 ">
                            <div class="d-flex justify-content-center">
                                <div style="height: 100px; width: 100px; background-color: green; border-radius: 25rem">
                       
                                </div>
                            </div>
                            <div class="container">
                            <h5>${month.username}</h5>
                           <!-- <p>Rating: 1253</p>-->
                            <p>${month.joined}</p>
                        </div>
                    </div>
                    </div>
          
`
        ).join('');
    }

}

export default MemberComponent
