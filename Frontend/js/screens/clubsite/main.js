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

/*
const ChessWebAPI = "https://api.chess.com/pub/club/skak-faxe-kommune"

function fetchChessApi() {
    return fetch(ChessWebAPI).then(response => response.json());
}

async function displayClubName(data){
    const clubName = await data
    const clubnamediv = document.getElementById('club-name')
    const club = clubName.name
    clubnamediv.innerText = club
    console.log(club)
}

displayClubName(fetchChessApi())

 */

const ChessWebAPI = "https://api.chess.com/pub/club/skak-faxe-kommune"


function fetchChessApi() {
    return fetch(ChessWebAPI).then(response => response.json());
}

async function displayClubName(){
    const clubName = await fetchChessApi()
    const clubnamediv = document.getElementById('club-name')
    const club = clubName.name
    alert(club)
    return club;

}


let test = {
    title: await displayClubName(),
    location: config.locations[0],
    date: "30/02-1920",
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

let test2 = [
    {
        title: 'Lørdags Skak',
        date: "20-02-3025",
        body: 'Wow wow wowowowowowowow'
    },
    {
        title: 'Torsdags Skak',
        date: "20-02-4567",
        body: 'Test test test'
    },
    {
        title: 'Juleskak',
        date: "20-02-9999",
        body: 'Verner og Åge spiller'
    },
    {
        title: 'Udlandsskak',
        date: "20-02-2050",
        body: 'Grand Master turnering for 2k ratede spillere'
    }
]

let eventGrid = new EventGridComponent(test2);
let nextComponent = new NextEventComponent(test);
let calender = new GoogleCalanderComponent('400px', '100%');
console.log(calender.view())
let top = new TwoColumnComponent('top',nextComponent,calender);

body.addComponent(top);
body.addComponent(eventGrid);


navbar.updateDOM();
body.updateDOM();
footer.updateDOM();