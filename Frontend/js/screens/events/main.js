import ElementObject from "../../lib/ElementObject.js";
import NavbarComponent from "../../components/NavbarComponent.js";
import FooterComponent from "../../components/FooterComponent.js";
import GoogleCalanderComponent from "../../components/GoogleCalanderComponent.js";
import TwoColumnComponent from "../../components/TwoColumnComponent.js";
import NextEventComponent from "../../components/NextEventComponent.js";
import EventGridComponent from "../../components/EventGridComponent.js";


const navbar = new ElementObject('navbar');
const footer = new ElementObject('footer');
const body = new ElementObject('body');
navbar.addComponent(new NavbarComponent());
footer.addComponent(new FooterComponent());

let user = sessionStorage.getItem("user");
if(user == null){
    user = JSON.stringify({});

}
let options = {
    method:"POST",
    headers:{"Content-Type": "application/json"},
    body:user
}

let data = await fetch(config.endpoints.member.root + "event/all-upcoming", options).then(response => response.json());
console.log(data)
let array = [];
data.forEach(data => array.push(data.cmsId));

let cmsOption= {
    method:"POST",
    headers:{"Content-Type": "application/json"},
    body: JSON.stringify(array)
}

let cmsData = await fetch(config.endpoints.cms.root + "event/get-all", cmsOption).then(response => response.json());
console.log(cmsData)
let nextEvent = cmsData.splice(0,1);

let eventGrid = new EventGridComponent(cmsData);
let nextComponent = new NextEventComponent(nextEvent[0]);
let calender = new GoogleCalanderComponent('400px', '100%');
let top = new TwoColumnComponent('top',nextComponent,calender);

body.addComponent(top);
body.addComponent(eventGrid);

navbar.updateDOM();
body.updateDOM();
footer.updateDOM();