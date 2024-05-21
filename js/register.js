let form = document.getElementById("registerForm");
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
    let nombre = document.getElementById("nombre").value.trim();
    let apellido = document.getElementById("apellido").value.trim();
    let fechaNacimiento = document.getElementById("fechaNacimiento").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let pais = document.getElementById("pais").value.trim();
    let terminosCondiciones = document.getElementById("terminosCondiciones");
    let isValidRegistration = true;

    if (nombre=="" || nombre.length < 4){
        displayErrorMessage("nombreError", "El campo nombre debe tener al menos 4 caracteres")
        document.getElementById("nombre").classList.add("is-invalid")
        isValidRegistration = false;
    }
    else{
        document.getElementById("nombre").classList.remove("is-invalid")
        document.getElementById("nombre").classList.add("is-valid")
    }

    if (apellido=="" || apellido.length < 3){
        displayErrorMessage("apellidoError", "El apellido debe tener al menos 3 caracteres")
        document.getElementById("apellido").classList.add("is-invalid")
        isValidRegistration = false;
    }
    else{
        document.getElementById("apellido").classList.remove("is-invalid")
        document.getElementById("apellido").classList.add("is-valid")
    }

    if (fechaNacimiento==""){
        displayErrorMessage("fechaNacimientoError", "Ingrese su fecha de nacimiento")
        document.getElementById("fechaNacimiento").classList.add("is-invalid")
        isValidRegistration = false;
    }
    else{
        document.getElementById("fechaNacimiento").classList.remove("is-invalid")
        document.getElementById("fechaNacimiento").classList.add("is-valid")
    }

    if (!isValidEmail(email)){
        displayErrorMessage("emailError", "El formato del email no es válido")
        document.getElementById("email").classList.add("is-invalid")
        isValidRegistration = false;
    }
    else{
        document.getElementById("email").classList.remove("is-invalid")
        document.getElementById("email").classList.add("is-valid")
    }

    if (password=="" || password.length < 8){
        displayErrorMessage("passwordError", "La constraseña debe tener al menos 8 caracteres")
        document.getElementById("password").classList.add("is-invalid")
        isValidRegistration = false;
    }
    else{
        document.getElementById("password").classList.remove("is-invalid")
        document.getElementById("password").classList.add("is-valid")
    }

    if (pais==""){
        displayErrorMessage("paisError", "Seleccione su nacionalidad")
        document.getElementById("pais").classList.add("is-invalid")
        isValidRegistration = false;
    }
    else{
        document.getElementById("pais").classList.remove("is-invalid")
        document.getElementById("pais").classList.add("is-valid")
    }

    if (!terminosCondiciones.checked){
        displayErrorMessage("terminosCondicionesError", "Debe aceptar los términos y condiciones")
    }
    if (isValidRegistration && terminosCondiciones.checked){
        if(submit){
            alert(`Hola ${nombre}! Te has registrado correctamente`)
            form.reset()
            window.location.href = '/pages/inicio-sesion.html';
        }
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

