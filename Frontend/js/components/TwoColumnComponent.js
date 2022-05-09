import Component from "../lib/Component.js";

class TwoColumnComponent extends Component{
    constructor(name, component1, component2) {
        let state = {
            left: component1.view(),
            right: component2.view(),
        }
        super(name, state, (state) => `
        <section class="about mb-2">
             <div class="container">
                 <div class="row">
                      <div class="col-lg-6"> <div>${state.left}</div>
                  </div> 
                       <div class="col-lg-6 pt-4 pt-lg-0"><div>${state.right}</div>
                  </div>
                    </div>
            </div>
        </section>
        `)
    }
}

export default TwoColumnComponent;
