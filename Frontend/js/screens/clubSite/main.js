import ElementObject from "../../lib/ElementObject.js";
import NavbarComponent from "../../components/NavbarComponent.js";
import FooterComponent from "../../components/FooterComponent.js";
import TwoColumnComponent from "../../components/TwoColumnComponent.js";
import ClubSiteComponent from "../../components/ClubSiteComponent.js";
import TournamentComponent from "../../components/TournamentComponent.js";



const navbar = new ElementObject('navbar');
const footer = new ElementObject('footer');
const body = new ElementObject('body');
navbar.addComponent(new NavbarComponent());
footer.addComponent(new FooterComponent());

const ChessWebAPI = "https://api.chess.com/pub/club/skak-faxe-kommune"
const Tournaments = "https://api.chess.com/pub/tournament/testisdabest/1/1"

function fetchChessApi() {
    return fetch(ChessWebAPI).then(response => response.json());
}

function fetchMatches(){
    return fetch(Tournaments).then(response => response.json());
}

const matchData = await fetchMatches()
const data = await fetchChessApi()
//Skal nok refaktoreres



let clubBody = {
    title: data.name,
    origin: data.created,
    avgRating: data.average_daily_rating,
    membersCount: data.members_count,
    href: data.join_request
}

let tournamentBody = {
    players: matchData.games,
    username: matchData.players
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


let clubComponent = new ClubSiteComponent(clubBody);
let tournamentComponent = new TournamentComponent(tournamentBody);
let top = new TwoColumnComponent('top',clubComponent, tournamentComponent);

body.addComponent(top);


navbar.updateDOM();
body.updateDOM();
footer.updateDOM();