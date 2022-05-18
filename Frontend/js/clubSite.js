const ChessWebAPI = "https://api.chess.com/pub/club/skak-faxe-kommune"


function fetchChessApi() {
    return fetch(ChessWebAPI).then(response => response.json());
}

async function displayClubName(){
    const clubName = await fetchChessApi()
    const clubnamediv = document.getElementById('club-name')
    const club = clubName.name
    clubnamediv.innerText = club
    console.log(club)
    return clubName;

}

displayClubName(fetchChessApi());
