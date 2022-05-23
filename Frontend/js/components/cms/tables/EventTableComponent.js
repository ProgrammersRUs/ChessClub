import Component from "../../../lib/Component.js";
import AddEventComponent from "../forms/AddEventComponent.js";

class EventTableComponent extends Component {

    constructor(event) {
        let state = {
            event: event
        }
        super('event', state, (state) =>
            `

            <div class="row mx-w-1003">
                <div class="container-fluid">
                    <table class="table">
                        <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Dato oprettet:</th>
                            <th scope="col">Møde tid</th>
                            <th scope="col">Lokation</th>
                            <th scope="col">URL</th>
                        </tr>
                        </thead>
                        <tbody>
            ${this.renderEvents(state.event)}
          
                        </tbody>
                    </table>
                </div>

            </div>

`)

    }


    renderEvents(event) {


        return event.map(event => `
                            <tr>
                                <td id="eventId${event.eventId}"class="d-none">${event.eventId}</td>
                                <td>${event.title}</td>
                                <td>${event.localDate}</td>
                                <td>${event.meetingTime}</td>
                                <td>${event.location}</td>
                                <td>${event.url}</td>
                                <td class="accordion-item col-2">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse${event.eventId}" aria-expanded="true"
                                            aria-controls="collapse${event.eventId}"> Se mere
                                    </button>
                                </td>
                                <td class="col-md-2">
                                <button id="deleteEvent${event.eventId}" type="button" class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i class="fa fa-trash"></i> </button>
                                <button  type="button" class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i class="fa fa-save"></i> </button>
                                <button id="updateEventStatus${event.eventId}"  type="button" class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i ${this.isActiveEvent(event)}></i> </button>
                            </td>
                            </tr>
                            <tr id="collapse${event.eventId}" class="accordion-collapse collapse"
                                aria-labelledby="headingOne1" data-bs-parent="#accordionExample">
                                <td class="accordion-body" colspan="3">
                                    ${event.description}<
                                </td>
                            </tr>

`
        ).join('')


    }

    isActiveEvent(event) {
        if (event.isActive == true) {
            return 'class="fa fa-eye"'
        } else {
            return 'class="fa fa-eye-slash"'
        }
    }


    addEventListenersEventTable() {

        const url = config.endpoints.cms.root + config.endpoints.cms.subPoint.deleteEvent;
        this.state.event.forEach(event => {

            const buttonDelete = document.getElementById('deleteEvent' + event.eventId)
            const buttonUpdateStatus = document.getElementById('updateEventStatus' + event.eventId)
            console.log(buttonUpdateStatus)

            buttonDelete.addEventListener("click", async () => {
                await deleteEvent(event)
                await new AddEventComponent().refreshPage()
            })

            buttonUpdateStatus.addEventListener("click", async () => {
                await updateEventStatus(event)
                await new AddEventComponent().refreshPage()
            })
        })


        async function deleteEvent(event) {

            let body = {
                user: JSON.parse(sessionStorage.getItem('user')),
                event: {
                    eventId:event.eventId
                }
            }

            const fetchOptions = {
                    method: "DELETE",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(body)
                }
            ;

            const response = await fetch(url + event.eventId, fetchOptions);

            if (!response) {
                const errorMessage = await response.text();
                console.log(errorMessage)
                throw new Error(errorMessage);

            }
        }

        async function updateEventStatus(event) {

            if (event.isActive == 1) {
                event.isActive = 0
            } else if (event.isActive == 0) {
                event.isActive = 1
            }

            console.log(event.isActive)

            let body = {
                eventId: event.eventId,
                eventHeader: event.eventHeader,
                eventBody: event.eventBody,
                creationDate: event.creationDate,
                href: event.href,
                imageUrl: event.imageUrl,
                isActive: event.isActive
            }

            console.log(body)
            const fetchOptions = {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            };
            const response = await fetch(url + event.eventId, fetchOptions);

            if (!response) {
                const errorMessage = await response.text();
                console.log(errorMessage)
                throw new Error(errorMessage);

            }
        }


    }


}

//document.getElementById('flexSwitchCheckChecked').addEventListener("change", () => console.log(document.getElementById('flexSwitchCheckChecked').checked) )

export default EventTableComponent;