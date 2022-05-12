import Component from "../lib/Component.js";

class TwoRowComponent extends Component{
    constructor(name, component1, component2) {
        let state = {
            top: component1.view(),
            bottom: component2.view(),
        }
        super(name, state, (state) => `
        <section class="mb-1 mt-1">
             <div class="container">
                 <div class="row d-block d-md-flex">
                      <div class=""> ${state.top}
                      </div> 
                  </div>
                  <div class="row d-block d-md-flex">
                      <div class=""> ${state.bottom}
                      </div> 
                  </div>
            </div>
        </section>
        <hr class="featurette-divider">
        `)
    }
}

export default TwoRowComponent;
