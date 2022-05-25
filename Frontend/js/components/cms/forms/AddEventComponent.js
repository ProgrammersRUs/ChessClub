import TwoRowComponent from "../../TwoRowComponent.js";
import ElementObject from "../../../lib/ElementObject.js";
import Component from "../../../lib/Component.js";
import EventTableComponent from "../tables/EventTableComponent.js";


class AddEventComponent extends Component {

    constructor() {
        let state = {}

        super('Events', state, (state) =>
            `<div class="row mx-w-100 h-100">
            <div class="card col-sm m-1" style="background-color: rgba(217, 226, 249, 0.3);">
                <div class="card-body">
                    <div class="input-group mb-3">
                    
                        <span class="input-group-text" id="basic-addon1">Titel: </span>
                        <input id="eventHeader" type="text" class="form-control" aria-label=""
                               aria-describedby="basic-addon1">
                    </div>
                   <div class="input-group mb-3">
                    <span class="input-group-text">Møde tid: </span>
                        <input id="eventTime" type="time" class="form-control" aria-label=""
                               aria-describedby="basic-addon1">
                               
                     <span class="input-group-text">Dato: </span>
                        <input id="eventDate" type="date" class="form-control" placeholder="" aria-label=""
                               aria-describedby="basic-addon1">
                    </div>
                    <div class="input-group mb-3">
                    
                    <span class="input-group-text">Lokation: </span>
                        <input id="eventLocation" type="text" class="form-control" placeholder="" aria-label=""
                               aria-describedby="basic-addon1">
                               
                               <span class="input-group-text">URL: </span>
                        <input id="eventUrl" type="text" class="form-control" placeholder="" aria-label=""
                               aria-describedby="basic-addon1">
                    
                    <div class="input-group h-50">
                        <span class="input-group-text ">Event beskrivelse: </span>
                        <textarea id="eventBody" class="form-control" aria-label="With textarea"></textarea>
                    </div>
                    </div>
                    
                    
                    
                    <div class="row">
                    <div class="container">
                    <button type="button" class="btn btn-primary" id="createEvent">Opret Event</button>
                              <div class="form-check form-switch float-end">
                        <label class="form-check-label" for="flexSwitchCheckChecked">Kun for Medlemmer</label>
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked">
                    </div>
                           
                    </div>
                    </div>
                </div>
            </div>
        </div>
`);
    }


    addEventlisenterToContent() {
        const url = config.endpoints.cms.root + 'event/createEvent'
        const url2 = config.endpoints.member.root + 'event/new'
        const button = document.getElementById('createEvent')


        button.addEventListener("click", async () => {
            let cmsResponse = await postEventCms(url).then(response => response.json());

            const eventIsActive = document.getElementById('flexSwitchCheckChecked')
            let isActive = false
            if (eventIsActive.checked) {
                isActive = true
            }

            await postEventMember(url2, cmsResponse, isActive)
            await this.refreshPage()
        })

        async function postEventCms(url) {
            const eventHeader = document.getElementById('eventHeader').value
            const eventBody = document.getElementById('eventBody').value
            const eventTime = document.getElementById('eventTime').value
            const eventDate = document.getElementById('eventDate').value
            const eventLocation = document.getElementById('eventLocation').value
            const eventUrl = document.getElementById('eventUrl').value

            console.log(eventTime);

            let body = {
                localDate: eventDate,
                title: eventHeader,
                description: eventBody,
                location: eventLocation,
                url: eventUrl,
                meetingTime: eventTime

            }
            const fetchOptions = {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            };
            const response = await fetch(url, fetchOptions);
            if (!response) {
                const errorMessage = await response.text();
                console.log(errorMessage)
                throw new Error(errorMessage);

            }
            return response;
        }

        async function postEventMember(url, cmsResponse, memberOnly) {
            console.log(cmsResponse)
            let body = {
                user: JSON.parse(sessionStorage.getItem("user")),
                event: {
                    name: cmsResponse.title,
                    memberOnly: memberOnly,
                    registrations: [],
                    eventDay: cmsResponse.localDate,
                    cmsId: cmsResponse.eventId
                }
            }
            const fetchOptions = {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            };
            const response = await fetch(url, fetchOptions);
            if (!response) {
                const errorMessage = await response.text();
                console.log(errorMessage)
                throw new Error(errorMessage);

            }
            return response;

        }
    }

    async refreshPage() {
        const eventForm = new ElementObject('cms-content');

        let cmsBottom = new EventTableComponent(await
            fetch(config.endpoints.cms.root + config.endpoints.cms.subPoint.allEvents).then(response => response.json()));
        document.getElementById('cms-content-header').innerText = this.name;

        let cmsBody = new TwoRowComponent('what this name for', this, cmsBottom);
        eventForm.addComponent(cmsBody)
        eventForm.updateDOM();
        cmsBottom.addEventListenersEventTable()
        this.addEventlisenterToContent()
    }
}


export default AddEventComponent;