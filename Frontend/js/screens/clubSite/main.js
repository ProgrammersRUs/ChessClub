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
/*
const Members = "https://api.chess.com/pub/club/skak-faxe-kommune/members"


 */

async function fetchChessApi() {

    return await fetch(ChessWebAPI).then(response => response.json());
}

async function fetchMatches() {
    const matches = await fetch(Tournaments).then(response => response.json());

    for (const game of matches.games) {
        if (!game.end_time) {
            game.black = await fetch(game.black).then(response => response.json());
            game.white = await fetch(game.white).then(response => response.json());
        }
    }

    return matches
}
/*
async function fetchMembers() {
    return await fetch(Members).then(response => response.json());
}

 */


const matchData = await fetchMatches()
const data = await fetchChessApi()
/*
const memberData = await fetchMembers()


 */

//Skal nok refaktoreres


let clubBody = {
    title: data.name,
    origin: data.created,
    avgRating: data.average_daily_rating,
    membersCount: data.members_count,
    href: data.join_request
}

let tournamentBody = {
    players: matchData.games
}
/*
let memberBody = {
    members: memberData.monthly
}

 */



let clubComponent = new ClubSiteComponent(clubBody);
let tournamentComponent = new TournamentComponent(tournamentBody);
/*
let memberComponent = new MemberComponent(memberBody)

 */
let top = new TwoColumnComponent('top', clubComponent, tournamentComponent);

body.addComponent(top);


navbar.updateDOM();
body.updateDOM();
footer.updateDOM();