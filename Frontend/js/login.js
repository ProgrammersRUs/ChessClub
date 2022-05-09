const user = 'http://localhost:8080/login';

document.addEventListener('DOMContentLoaded', createFormEventListener)

function fetchUser() {
    return fetch(user).then(response => response.json());
}

function createFormEventListener() {
    loginEvent = document.getElementById('userLogin')
    loginEvent.addEventListener('submit', handleFormSubmit)
}

async function validateUser() {
    const sessionUser = await fetchUser();
    sessionStorage.setItem("user", sessionUser);
    console.log(sessionStorage + "test");

}


async function handleFormSubmit(event) { //AUGUST OG SILKE VIL GERNE HAVE DEN FORKLARET. PLS
    event.preventDefault();
    const form = event.currentTarget;
    const url = form.action;

    try {
        const formData = new FormData(form);
        await postUserValidationAsJson(url, formData);

    } catch (err) {
        alert(err.message);
    }
}


async function postUserValidationAsJson(url, formData) {
    const plainFormData = Object.fromEntries(formData.entries());

    let body = {
        user:{
            userEmail: plainFormData.userEmail,
            userPassword: plainFormData.userPassword
        }
    }

    const response = await fetch(url);
    if (!response) {
        const errorMessage = await response.text();
        console.log(errorMessage)
        throw new Error(errorMessage);

    }
    return response;
}

document.addEventListener('submit', validateUser);