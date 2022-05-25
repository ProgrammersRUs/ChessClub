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
                <div class="modal" id="eventModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                        <h5 class="modal-title" id="eventModalTitle">Tilmeld</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                                    <form id="eventModalForm">
                                <div class="modal-body align-self-center w-100 h-100">
                                <p id="eventModalBody"></p>
                                <p id="eventModalDate"></p>
                                        <input id="eventModalName" name="nameExternal" type="text" class="input-group-text w-100" placeholder="Navn">
                                        <br>
                                        <input id="eventModalEmail" type="email" name="emailExternal" class="input-group-text w-100" placeholder="Email">
                                </div>     
                                <div class="modal-footer align-self-center w-100 h-100">
                                      <button type="submit" class="btn btn-primary">Tilmeld</button>   
                                </div>  
                                    </form>
                        </div>
                    </div>
                </div>
            
            </section>
                        
            `
        );
    }

    #renderEvents(events) {
        const eventTemplate = (state) =>
            `
       <div class="col-md-3 mb-1 h-100">
            <div class="border border-primary rounded h-100 shadow container">
                <div class="row d-none d-md-flex">
                    <img class="img-fluid" src="${this.imageFallback(state.imgSrc)}" alt="Club Logo">                    
                </div>
                <div class="row">
                    <div class="col-6 text-start" >
                        <strong>${state.title}</strong>               
                    </div>
                    <div class="col-6 text-end">
                        <p>${state.localDate}</p>
                    </div>
                </div>
                <div class="row d-none d-md-flex mh-100" style="min-height: 100px">
                    <p>${state.description}</p>
                
                </div>
                <div class="text-center">
                    <button type="button" class="btn btn-primary mb-1" data-bs-toggle="modal" data-bs-target="#eventModal" id="event${state.eventId}"> Tilmeld </button>
                
</div>
</div>
             
        </div>
       `;
        console.log(events)
        return events.map(event => eventTemplate(event)).join('')
    }

    addEventListenersToMe() {
        this.state.events.forEach(event => {
            let element = document.getElementById("event" + event.eventId);
            element.addEventListener('click', () => {
                document.getElementById("eventModalBody").innerText = "Tilmeld dig til " + event.title;
                document.getElementById("eventModalForm").target = event.eventId;
                document.getElementById("eventModalDate").innerText = "d. " + event.localDate;
            })
        })

        let form = document.getElementById("eventModalForm");
        console.log(form);
        form.addEventListener('submit', async (e) => {
                e.preventDefault();
                let data = document.getElementById("eventModalForm");
                const formData = new FormData(data);
                let realData = Object.fromEntries(formData.entries());

                const url = config.endpoints.member.root + 'event/join/' + data.target;

                let user = JSON.parse(sessionStorage.getItem('user'));

                let payload = {
                    user: user,
                    name: realData.nameExternal,
                    email: realData.emailExternal
                }

                let options = {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(payload)
                }

                let response = await fetch(url, options).then(response => response.json());
                if (!response) {
                    const errorMessage = await response.text();
                    console.log(errorMessage)
                    throw new Error(errorMessage);
                }
                console.log("Succesfully Registered for Event")
            }
        )
    }
}

export default EventGridComponent