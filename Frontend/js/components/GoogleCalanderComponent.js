import Component from "../lib/Component.js";

class GoogleCalanderComponent extends Component{
    constructor(height, width) {
        let  state = {
            height: height,
            width: width,
        }
        super("calendar", state, (state) =>
            `
            <iframe class="featurette-image img-fluid mx-auto"
                    src=https://calendar.google.com/calendar/embed?src=skoleprojekter3%40gmail.com&ctz=Europe%2FCopenhagen"
                    data-holder-rendered="true" style="border:0; height: ${state.height}; width: ${state.width}" >
            </iframe>
           
            `
        );
    }

}

export default GoogleCalanderComponent;
