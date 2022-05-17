import ElementObject from "../../lib/ElementObject.js";
import NavbarComponent from "../../components/NavbarComponent.js";
import FooterComponent from "../../components/FooterComponent.js";
import TwoColumnComponent from "../../components/TwoColumnComponent.js";
import ClubSiteComponent from "../../components/ClubSiteComponent.js";
import TournamentComponent from "../../components/TournamentComponent.js";
import MemberComponent from "../../components/MemberComponent.js";

const navbar = new ElementObject('navbar');
const footer = new ElementObject('footer');
const body = new ElementObject('body');
navbar.addComponent(new NavbarComponent());
footer.addComponent(new FooterComponent());

const ChessWebAPI = "https://api.chess.com/pub/club/skak-faxe-kommune"
const Tournaments = "https://api.chess.com/pub/tournament/testisdabest/1/1"
const Members = "https://api.chess.com/pub/club/skak-faxe-kommune/members"


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


const matches = new ElementObject('matches');
matches.addComponent(new TournamentComponent(await
    fetch(Tournaments).then(response => response.json()).then()));


async function fetchMembers() {
    const memberList = await fetch(Members).then(response => response.json());


for (const member of memberList.monthly) {
    let timestamp = member.joined;
    if (!timestamp) {
        break;
    }
    let date = new Date(timestamp * 1000);
    let month = date.getMonth();
    let year = date.getFullYear();
    let day = date.getDate();
    let formatedTime = day + '/' + month + '/' + year;
    member.joined = formatedTime
    console.log(member.joined)
}

    return memberList;
}

const matchData = await fetchMatches()
const data = await fetchChessApi()
const memberData = await fetchMembers()


//Skal nok refaktoreres


let clubBody = {
    title: data.name,
    origin: data.created,
    avgRating: data.average_daily_rating,
    membersCount: data.members_count,
    href: data.join_request
}

let tournamentBody = {
    games: matchData.games
}

let memberBody = {
    month: memberData.monthly,
    userName: memberData.username,
    memberJoined: memberData.joined
}

let clubComponent = new ClubSiteComponent(clubBody);
let tournamentComponent = new TournamentComponent(tournamentBody);
let memberComponent = new MemberComponent(memberBody)
let top = new TwoColumnComponent('top', clubComponent, tournamentComponent);

body.addComponent(top);
body.addComponent(memberComponent);


navbar.updateDOM();
body.updateDOM();
footer.updateDOM();