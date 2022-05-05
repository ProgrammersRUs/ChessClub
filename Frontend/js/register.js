let memberForm

document.addEventListener('DOMContentLoaded', createFormEventListener)

function createFormEventListener() {
    memberForm = document.getElementById('newMember')
    memberForm.addEventListener('submit', handleFormSubmit)
}

$(document).ready(function () {
    var date_input = $('input[name="memberAge"]'); //our date input has the name "date"
    var container = $('.bootstrap-iso form').length > 0 ? $('.bootstrap-iso form').parent() : "body";
    var options = {
        format: 'mm/dd/yyyy',
        container: container,
        todayHighlight: true,
        autoclose: true,
    };
    date_input.datepicker(options);

})

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

async function postFormDataAsJson(url, formData) {

    const plainFormData = Object.fromEntries(formData.entries());
    const formDataJsonString = JSON.stringify(plainFormData);

    const fetchOptions = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: {
            user:{
                password: plainFormData.mail,
                email: plainFormData.userEmail

            },
            member:{
                firstName: plainFormData.memberFirstName,
                lastName: plainFormData.memberFirstName,
                phoneNr: plainFormData.memberPhoneNr,
                address: plainFormData.memberAdress,
                age: plainFormData.memberAge


            }


        }
    };

    const response = await fetch(url, fetchOptions);
    if (!response) {
        const errorMessage = await response.text();
        console.log(errorMessage)
        throw new Error(errorMessage);

    }
    return response;
}