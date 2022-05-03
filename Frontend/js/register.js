function out(message){
    console.log(message)
}

let memberForm

document.addEventListener('DOMContentLoaded', createFormEventListener)

function createFormEventListener(){
    memberForm = document.getElementById('newMember')
    memberForm.addEventListener('submit', formHandleSubmit)
}

async function formHandleSubmit(registerData){
    registerData.preventDefault();
    const form = registerData.currentTarget;
    const url = form.action;

    try{
        const formData = new FormData(form);
        if (validateMemberData(registerData)){
            await postFormDataAsJson(url, formData)
        }
    }catch (err){
        alert(err.message)
        out(err);
    }
}

function validateMemberData(registerData){
alert("Insert validation here")
}


//Er ikke sikker på jeg egentligt forstår denne her men den har virket for det før - August
async function postFormDataAsJson(url, formData) {
    out(formData.entries());
    const plainFormData = Object.fromEntries(formData.entries());
    out(plainFormData);

    const formDataJsonString = JSON.stringify(plainFormData);

    const fetchOptions = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: formDataJsonString
    };

    const response = await fetch(url, fetchOptions);
    if (!response) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
    }

    return response.json();
}