import TwoColumnComponent from "../components/TwoColumnComponent.js";

export class ElementObject{
    constructor(selector) {
        this.element = document.querySelector(`#${selector}`);
        this.components = {}
        console.log("we got one" + selector);
    }

    addComponent(component){
        this.components[component.name] = component;
    }

    updateDOM(){
        if(this.components) {
            let mergedViews = '';
            Object.keys(this.components).forEach(key => {
                mergedViews += this.components[key].view();

            });
            this.element.innerHTML = mergedViews;
        }

    }
}

export default ElementObject;