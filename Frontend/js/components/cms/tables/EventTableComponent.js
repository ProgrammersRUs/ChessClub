import Component from "../../../lib/Component.js";
import AddEventComponent from "../forms/AddEventComponent.js";
import addEventComponent from "../forms/AddEventComponent.js";

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
                            <th scope="col">Møde tid</th>
                            <th scope="col">Møde dato</th>
                            <th scope="col">Lokation</th>
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
                                <td id="eventHeader${event.eventId}" contenteditable="true">${event.title}</td>
                                <td id="eventMeetingTime${event.eventId}"contenteditable="true">${event.meetingTime}</td>
                                <td id="eventMeetingDate${event.eventId}" contenteditable="true">${event.localDate}</td>
                                <td id="eventLocation${event.eventId}" contenteditable="true">${event.location}</td>
                                <td class="accordion-item col-2">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse${event.eventId}" aria-expanded="true"
                                            aria-controls="collapse${event.eventId}"> Se mere
                                    </button>
                                </td>
                                <td class="col-md-2">
                                <button id="deleteEvent${event.eventId}" type="button" class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i class="fa fa-trash"></i> </button>
                                <button id="updatePostInformation${event.eventId}" type="button" class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i class="fa fa-save"></i> </button>
                                <button id="updateEventStatus${event.eventId}"  type="button" class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i ${this.isActiveEvent(event)}></i> </button>
                            </td>
                            </tr>
                            <tr id="collapse${event.eventId}" class="accordion-collapse collapse"
                                aria-labelledby="headingOne1" data-bs-parent="#accordionExample">
                                <td id="eventBody${event.eventId}" class="accordion-body" colspan="3">
                                    ${event.description}
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
            const buttonUpdateInformation = document.getElementById('updatePostInformation' + event.eventId)

            console.log(buttonUpdateStatus)

            buttonDelete.addEventListener("click", async () => {
                await deleteEvent(event)
                await new AddEventComponent().refreshPage()
            })

            buttonUpdateStatus.addEventListener("click", async () => {
                await updateEventStatus(event)
                await new AddEventComponent().refreshPage()
            })

            buttonUpdateInformation.addEventListener("click", async () => {
                await updatePostInformation(event)
                await new addEventComponent().refreshPage()
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

        async function updatePostInformation(event) {

            const postHeader = document.getElementById('eventHeader' + event.eventId).innerText
            const postBody = document.getElementById('eventBody' + event.eventId).innerText
            const postMeetingTime = document.getElementById('eventMeetingTime' + event.eventId).innerText
            const postMeetingDate = document.getElementById('eventMeetingDate' + event.eventId).innerText
            const postLocation = document.getElementById('eventLocation' + event.eventId).innerText
            const postUrl = document.getElementById('eventUrl' + event.eventId).innerText


            let body = {
                user: JSON.parse(sessionStorage.getItem('user')),
                event: {
                    eventId: event.eventId,
                    title: postHeader,
                    description: postBody,
                    meetingTime: postMeetingTime,
                    localDate: postMeetingDate,
                    location: postLocation,
                    url: postUrl
                }
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