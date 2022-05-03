const newMember = "http://localhost:8080/register"

async function registerMember(){
    return fetch(newMember).then(response => response.json())
}



function validateMemberData(){

}
