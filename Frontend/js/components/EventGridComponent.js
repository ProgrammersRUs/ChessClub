import Component from "../lib/Component.js";

class EventGridComponent extends Component {
    constructor(events) {
        let state = {
            events: events
        }
        super('eventGrid', state, (state) =>
            `
            <section class="container">
                <div class="row mb-1 h-100">
                ${this.#renderEvents(state.events)}
                
</div>
            
            
</section>
                        
            `
        );


    }

    #renderEvents(events) {
        const eventTemplate = (state) =>
            `
       <div class="col-md-3 mb-1 h-100" onclick="location.href='/'" style="cursor: pointer">
            <div class="border border-primary rounded h-100">
                <div class="row d-none d-md-flex">
                    <img class="img-fluid" src="${this.#selectimg(state.img)}" alt="Club Logo">                    
                </div>
                <div class="row">
                    <div class="col-6 text-start" >
                        <strong>${state.title}</strong>               
                    </div>
                    <div class="col-6 text-end">
                        <p>${state.date}</p>
                    </div>
                </div>
                <div class="row d-none d-md-flex mh-100" style="min-height: 100px">
                    <p>${state.body}</p>
                
                </div>
</div>
             
        </div>
       `;

        return events.map(event => eventTemplate(event)).join('')
    }

    #selectimg(img) {
        if (img == undefined) {
            return config.club.logoSrc;
        }
        return img;

    }
}

export default EventGridComponent