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
                    <div class="row">
                        <div class="col-lg-4 text-center mb-2">
                            <div class="d-flex justify-content-center">
                                <div style="height: 100px; width: 100px; background-color: green; border-radius: 25rem">
                  
                                </div>
                            </div>
                            <h5>${state.month[0].username}</h5>
                           <!-- <p>Rating: 1253</p> -->
                            <p>${state.month[0].joined}</p>
                        </div>
                        <div class="col-lg-4 text-center mb-2">
                            <div class="d-flex justify-content-center">
                                <div style="height: 100px; width: 100px; background-color: green; border-radius: 25rem">
                       
                                </div>
                            </div>
                             <h5>${state.month[1].username}</h5>
                           <!-- <p>Rating: 1253</p> -->
                            <p>${state.month[1].joined}</p>
                        </div>
                        <div class="col-lg-4 text-center mb-2">
                            <div class="d-flex justify-content-center">
                                <div style="height: 100px; width: 100px; background-color: green; border-radius: 25rem">
                       
                                </div>
                            </div>
 <h5>${state.month[2].username}</h5>
                           <!-- <p>Rating: 1253</p> -->
                            <p>${state.month[2].joined}</p>
                </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="row">
                        <div class="col-lg-4 text-center mb-2">
                            <div class="d-flex justify-content-center">
                                <div style="height: 100px; width: 100px; background-color: green; border-radius: 25rem">
                      
                                </div>
                            </div>
                         <h5>${state.month[3].username}</h5>
                           <!-- <p>Rating: 1253</p> -->
                            <p>${state.month[3].joined}</p>
                        </div>
                        <div class="col-lg-4 text-center mb-2">
                            <div class="d-flex justify-content-center">
                                <div style="height: 100px; width: 100px; background-color: green; border-radius: 25rem">
                      
                                </div>
                            </div>
                          <h5>${state.month[4].username}</h5>
                           <!-- <p>Rating: 1253</p> -->
                            <p>${state.month[4].joined}</p>
                        </div>
                     
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
        `
        );
    }

}

export default MemberComponent
