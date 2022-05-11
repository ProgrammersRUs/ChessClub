import Component from "../lib/Component.js";

class TwoColumnComponent extends Component{
    constructor(name, component1, component2) {
        let state = {
            left: component1.view(),
            right: component2.view(),
        }
        super(name, state, (state) => `
        <section class="mb-1 mt-1">
             <div class="container">
                 <div class="row d-block d-md-flex">
                      <div class="col-lg-6 "> ${state.left}
                  </div> 
                       <div class="col-lg-6 pt-4 pt-lg-0"><div>${state.right}</div>
                  </div>
                    </div>
            </div>
        </section>
        <hr class="featurette-divider">
        `)
    }
}

export default TwoColumnComponent;
