export class Component{
    constructor(name,state,template) {
        this.name = name;
        this.state = state;
        this.template = template;
    }
    view(){
        return this.template(this.state);
    }

    imageFallback(img) {
        if (img == undefined || img == '') {
            return config.club.logoSrc;
        }
        return img;

    }

    addEventListenersToMe(){};

}

export default Component;