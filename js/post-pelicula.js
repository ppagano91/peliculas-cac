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


document.addEventListener('DOMContentLoaded', async () => {
    form = document.getElementById("adminForm");
    formControls = document.querySelectorAll(".form-control");
    
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        resetErrorMessage();

        const titulo = document.getElementById("titulo").value.trim();
        const genero = document.getElementById("genero").value.trim();
        const duracion = document.getElementById("duracion").value.trim();
        const director = document.getElementById("director").value.trim();
        const reparto = document.getElementById("reparto").value.trim();
        const sinopsis = document.getElementById("sinopsis").value.trim();
        const isValidRegistration = true;

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
    
        if (sinopsis=="" || sinopsis.length < 30 || sinopsis.length > 255){
            displayErrorMessage("sinopsisError", "La sinopsis debe tener entre 30 y 255 caracteres")
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
            const lanzamiento = document.getElementById('fechaLanzamiento').value;
            const imagen = document.getElementById('imagen').value.split('\\').pop().split('/').pop();;
            
            //configuracion de options, es un post y necesita body
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    titulo: titulo,
                    lanzamiento: lanzamiento,
                    genero: genero,
                    duracion: duracion,
                    director: director,
                    reparto:reparto,
                    sinopsis: sinopsis,
                    imagen: imagen
                })
            };
        
            //realizo la peticion fetch a la api para agregar una pelicula
            const response = await fetch('http://localhost:8080/api/peliculas', options);
            /*const data = await response.json();*/
            if (response.status === 201) {
                alert('Pelicula agregada correctamente');
                form.reset();
                // que se recargue la pagina para ver la pelicula agregada
                location.reload();
            } else {
                alert('Error al agregar la pelicula');
            }
        }       
    });

    formControls.forEach((input)=> {
        input.addEventListener("keydown", (event) => {
            if(event.key === "Tab" || event.key === "Enter"){
                validForm(submit=false);
            }
        })
    })
});