const ChessWebAPI = "https://api.chess.com/pub/club/haslev-skakklub"

const clubName = document.getElementById("clubname")

function fetchChessApi() {
    return fetch(ChessWebAPI).then(response => response.json());
}

async function chessTournamentInfo(){
    const playername = await fetchChessApi();
    console.log(playername)

}

chessTournamentInfo();