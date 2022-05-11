const ChessWebAPI = "https://api.chess.com/pub/tournament/testisdabest"

function fetchChessApi() {
    return fetch(ChessWebAPI).then(response => response.json());
}

async function chessTournamentInfo(){
    const playername = await fetchChessApi();
    console.log(playername)
}

chessTournamentInfo();