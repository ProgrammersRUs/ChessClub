import Component from "../lib/Component.js";

class AddNewsComponent extends Component{

    constructor(derp) {
        let state = {
            derp: derp
        }

        super('post-news', state, (state)=>
            `<div class="row h-25 mx-w-1003">
            <div class="card col-sm m-1" style="background-color: rgba(217, 226, 249, 0.3);">
                <div class="card-body">
                    <h8 class="header">${state.derp}</h8>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Overskrift: </span>
                        <input type="text" class="form-control" placeholder="" aria-label=""
                               aria-describedby="basic-addon1">
                    </div>
                    <div class="input-group h-50">
                        <span class="input-group-text ">Nyheds tekst: </span>
                        <textarea class="form-control" aria-label="With textarea"></textarea>
                    </div>
                    <div class="form-check form-switch float-end">
                        <label class="form-check-label" for="flexSwitchCheckChecked">Publicer nyhed</label>
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked>
                    </div>
                </div>
            </div>
        </div>`);
    }

    renderForm() {

    }
}
export default AddNewsComponent;