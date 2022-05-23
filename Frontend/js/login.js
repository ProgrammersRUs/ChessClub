document.addEventListener('DOMContentLoaded', createFormEventListener)


function createFormEventListener() {
    loginEvent = document.getElementById('userLogin')
    loginEvent.addEventListener('submit', handleFormSubmit)
}

function setSessionUser(user) {
    sessionStorage.setItem("user", JSON.stringify(user));
    console.log(sessionStorage.getItem("user"));
    const test = JSON.parse(sessionStorage.getItem("user"))
    console.log(test.id)

}


async function handleFormSubmit(event) { //AUGUST OG SILKE VIL GERNE HAVE DEN FORKLARET. PLS
    event.preventDefault();
    const form = event.currentTarget;

    try {
        const formData = new FormData(form);
        const user = await postUserValidationAsJson(formData).then(response => response.json());
        console.log(user)
        setSessionUser(user)
        location.href='/'
    } catch (err) {
        alert(err.message);
    }
}


async function postUserValidationAsJson(formData) {
    const plainFormData = Object.fromEntries(formData.entries());


    const url = config.endpoints.member.root +'login/login/' + plainFormData.email + '+' + plainFormData.password


    const response = await fetch(url);
    if (!response) {
        const errorMessage = await response.text();
        console.log(errorMessage)
        throw new Error(errorMessage);

    }
    console.log(response)
    return response;
}