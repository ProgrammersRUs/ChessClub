import Component from "../lib/Component.js";

class TextComponent extends Component {
    constructor(name, title, body) {
        let state = {
            title: title,
            body: body
        }
        super(name, state,        (state) => `
                <h3>${state.title}</h3>
                ${state.body}
        `);
    }


}

export default TextComponent;
