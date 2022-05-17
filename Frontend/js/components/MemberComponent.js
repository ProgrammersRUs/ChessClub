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
     
     <section id="members" class="members d-none d-lg-block mb-2 bg-light">
    <div class="container">
        <h3 class="mb-2">Mød medlemmerne</h3>
        <div class="carousel slide" id="memberCarousel" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                 
   
                  ${this.renderMembers(state.month)}

      `)
    }

    renderMembers(month) {

        return month.map(month => `
                              
               <div class="row">
                        <div class="col-lg-4 text-center mb-2">
                            <div class="d-flex justify-content-center">
                                <div style="height: 100px; width: 100px; background-color: green; border-radius: 25rem">
                        
                                </div>
                            </div>
                            <h5>Rasputin</h5>
                            <p>Rating: 1253</p>
                            <p>"Hyggelig klub med dejlige mennesker"</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
     
     
      
        `
        ).join('');
    }

}

export default MemberComponent
