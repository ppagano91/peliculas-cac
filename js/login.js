let form = document.getElementById("loginForm");
let formControls = document.querySelectorAll(".form-control");

function isValidEmail(email){
    if (email=="" || email.length < 6){
        return false
    }
    pattern = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i
    // pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/


    return pattern.test(email)
}

function displayErrorMessage(elementId, message){
    let errorElement = document.getElementById(elementId)
    errorElement.innerText = message
}

function resetErrorMessage(){
    let errorElements = document.querySelectorAll(".error-message");
    errorElements.forEach((element) => {
        element.innerText = "";
    })
}

function validForm(submit=false) {

        resetErrorMessage();

        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();
        let isValidLogin = true;

        if (!isValidEmail(email)){
            displayErrorMessage("emailError", "El formato del email no es válido")
            document.getElementById("email").classList.add("is-invalid")
            isValidLogin = false;
        }
        else{
            document.getElementById("email").classList.remove("is-invalid")
            document.getElementById("email").classList.add("is-valid")
        }

        if (password=="" || password.length < 8){
            displayErrorMessage("passwordError", "La constraseña debe tener al menos 8 caracteres")
            document.getElementById("password").classList.add("is-invalid")
            isValidLogin = false;
        }
        else{
            document.getElementById("password").classList.remove("is-invalid")
            document.getElementById("password").classList.add("is-valid")
        }

        if (isValidLogin && submit){
            alert("Hola! Te has logeado correctamente")
            form.reset()
            window.location.href = '/';
        }
}

document.addEventListener("DOMContentLoaded", () => {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        validForm(submit=true);
    });

    formControls.forEach((input)=> {
        input.addEventListener("keydown", (event) => {
            if(event.key === "Tab" || event.key === "Enter"){
                validForm(submit=false);
            }
        })
    })
})

