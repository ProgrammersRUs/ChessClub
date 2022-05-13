import Component from "../lib/Component.js";

class ImageComponent extends Component {
    constructor(name, imgSrc, altSrc) {
        let state = {
            src: imgSrc,
            alt: altSrc
        }
        super(name, state, (state) => `
            <img src="${this.imageFallback(state.src)}" class="img-fluid"
                                       alt="${state.alt}">

`);
    }

}

export default ImageComponent;
