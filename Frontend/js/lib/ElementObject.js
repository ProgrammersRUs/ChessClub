import TwoColumnComponent from "../components/TwoColumnComponent.js";

export class ElementObject{
    constructor(selector) {
        this.element = document.querySelector(`#${selector}`);
        this.components = []
        console.log("we got one" + selector);
    }

    addComponent(component){
        this.components.push(component);
    }

    updateDOM(){
        if(this.components) {
            let mergedViews = '';
            this.components.forEach(component => {
                mergedViews += component.view();

            });
            this.element.innerHTML = mergedViews;
        }

    }
}

export default ElementObject;