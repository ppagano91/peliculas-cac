/*let form = document.getElementById("adminForm");
let formControls = document.querySelectorAll(".form-control");

function displayErrorMessage(elementId, message){
    let errorElement = document.getElementById(elementId)
    errorElement.innerText = message;
}

function resetErrorMessage(){
    let errorElements = document.querySelectorAll(".error-message");
    errorElements.forEach((element) => {
        element.innerText = "";
    })
}

const isValidRelease = () => {
    const release = document.getElementById('fechaLanzamiento').value;
    // chequeo que la fecha sea real 
    if (release == ''){
        return false;
    }
    const date = release.split("-");
    const year = date[0];
    // compruebo que el año sea mayor que el mostrado en el placehoder
    if ( year < 1900) {
        return false;
    }
    return true;
}

const isValidImg = () => {
    let imagen = document.getElementById('imagen').value.trim();
    let extension = imagen.slice((imagen.lastIndexOf(".") - 1 >>> 0) + 2);
    return extension == 'png' || extension == 'jpg' || extension == 'jpeg';
}

function validForm(submit=false) {
    resetErrorMessage();
    let titulo = document.getElementById("titulo").value.trim();
    let genero = document.getElementById("genero").value.trim();
    let duracion = document.getElementById("duracion").value.trim();
    let director = document.getElementById("director").value.trim();
    let reparto = document.getElementById("reparto").value.trim();
    let sinopsis = document.getElementById("sinopsis").value.trim();
    let isValidRegistration = true;

    if (titulo=="" || titulo.length < 4){
        displayErrorMessage("tituloError", "El campo Título debe tener al menos 4 caracteres")
        document.getElementById("titulo").classList.add("is-invalid")
        isValidRegistration = false;
    }
    else{
        document.getElementById("titulo").classList.remove("is-invalid")
        document.getElementById("titulo").classList.add("is-valid")
    }

    if (!isValidRelease()) {
        displayErrorMessage("fechaLanzamientoError", "Por favor ingrese una fecha válida.");
        document.getElementById("fechaLanzamiento").classList.add('is-invalid');
        isValidRegistration = false;
    } else {
        document.getElementById("fechaLanzamiento").classList.remove('is-invalid');
        document.getElementById("fechaLanzamiento").classList.add('is-valid');
    }

    if (genero==""){
        displayErrorMessage("generoError", "Por favor ingrese al menos un género")
        document.getElementById("genero").classList.add("is-invalid")
        isValidRegistration = false;
    }
    else{
        document.getElementById("genero").classList.remove("is-invalid")
        document.getElementById("genero").classList.add("is-valid")
    }

    if (duracion==""){
        displayErrorMessage("duracionError", "Por favor ingrese la duración")
        document.getElementById("duracion").classList.add("is-invalid")
        isValidRegistration = false;
    }
    else{
        document.getElementById("duracion").classList.remove("is-invalid")
        document.getElementById("duracion").classList.add("is-valid")
    }

    if (director==""){
        displayErrorMessage("directorError", "Por favor ingrese al menos un director")
        document.getElementById("director").classList.add("is-invalid")
        isValidRegistration = false;
    }
    else{
        document.getElementById("director").classList.remove("is-invalid")
        document.getElementById("director").classList.add("is-valid")
    }

    if (reparto==""){
        displayErrorMessage("repartoError", "Por favor ingrese el reparto de la película")
        document.getElementById("reparto").classList.add("is-invalid")
        isValidRegistration = false;
    }
    else{
        document.getElementById("reparto").classList.remove("is-invalid")
        document.getElementById("reparto").classList.add("is-valid")
    }

    if (sinopsis=="" || sinopsis.length < 30){
        displayErrorMessage("sinopsisError", "La sinopsis debe tener al menos 30 caracteres")
        document.getElementById("sinopsis").classList.add("is-invalid")
        isValidRegistration = false;
    }
    else{
        document.getElementById("sinopsis").classList.remove("is-invalid")
        document.getElementById("sinopsis").classList.add("is-valid")
    }

    if (!isValidImg()) {
        displayErrorMessage("imagenError", "El archivo debe ser png, jpg o jpeg.");
        document.getElementById("imagen").classList.add('is-invalid');
        isValidRegistration = false;
    } else {
        document.getElementById("imagen").classList.remove('is-invalid');
        document.getElementById("imagen").classList.add('is-valid');
    }

    if (isValidRegistration){
        if(submit){
            alert('La película fue agregada exitosamente');
            form.reset();
            window.location.href = '../index.html';
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
})*/

document.addEventListener("DOMContentLoaded", function() {
    const arrow = document.querySelector('.flecha');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            arrow.classList.add('visible');
        } else {
            arrow.classList.remove('visible');
        }
    });
});