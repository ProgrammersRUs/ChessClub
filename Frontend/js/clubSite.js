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