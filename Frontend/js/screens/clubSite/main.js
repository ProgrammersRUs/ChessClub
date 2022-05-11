import ElementObject from "../../lib/ElementObject.js";
import NavbarComponent from "../../components/NavbarComponent.js";
import FooterComponent from "../../components/FooterComponent.js";
import GoogleCalenderComponent from "../../components/GoogleCalanderComponent.js";
import TwoColumnComponent from "../../components/TwoColumnComponent.js";
import ClubSiteComponent from "../../components/ClubSiteComponent.js";



const navbar = new ElementObject('navbar');
const footer = new ElementObject('footer');
const body = new ElementObject('body');
navbar.addComponent(new NavbarComponent());
footer.addComponent(new FooterComponent());

const ChessWebAPI = "https://api.chess.com/pub/club/skak-faxe-kommune"

function fetchChessApi() {
    return fetch(ChessWebAPI).then(response => response.json());
}


const data = await fetchChessApi()

let test = {
    title: data.name,
    location: config.locations[0],
    members: data.members_count,
    description: "Fedt Event Fedt Event Fedt Event Fedt Event Fedt Event Fedt Event Fedt Event Fedt Event Fedt Event Fedt Event Fedt Event Fedt Event Fedt Event Fedt Event Fedt Event Fedt Event Fedt Event Fedt Event Fedt Event Fedt Event ",
    href: "/",
    imgSrc: ''
}

/*
 <div class="col-md-6">
            <h2 class="featurette-heading" id="club-name">test<span class="text-muted"></span></h2>
            <br>
            <p id="club-origin">since:</p>
            <p id="member-amount">Antal medlemmer</p>
            <p id="avg-rating">Average rating</p>
            <p id="last-activity"> sidste aktivitet</p>
            <p id="join">join</p>
            <p id="admins">admin</p>
 */


let nextComponent = new ClubSiteComponent(test);
let calender = new GoogleCalenderComponent('400px', '100%');
console.log(calender.view())
let top = new TwoColumnComponent('top',nextComponent,calender);

body.addComponent(top);


navbar.updateDOM();
body.updateDOM();
footer.updateDOM();