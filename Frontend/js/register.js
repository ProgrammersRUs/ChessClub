let memberForm

document.addEventListener('DOMContentLoaded', createFormEventListener)

function createFormEventListener() {
    memberForm = document.getElementById('newMember')
    memberForm.addEventListener('submit', handleFormSubmit)
}

async function handleFormSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const url = form.action;

    try {
        const formData = new FormData(form);
        await postFormDataAsJson(url, formData);

    } catch (err) {
        alert(err.message);
    }
}

function validateMemberData(data) {
    if (data.get("firstName") === "" || data.get('lastName') === "") {
        return null
    } else return data

}

async function postFormDataAsJson(url, formData) {

    const plainFormData = Object.fromEntries(formData.entries());
    const formDataJsonString = JSON.stringify(plainFormData);

    const fetchOptions = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: formDataJsonString
    };

    const response = await fetch(url, fetchOptions);
    if (!response) {
        const errorMessage = await response.text();
        console.log(errorMessage)
        throw new Error(errorMessage);

    }
    return response;
}