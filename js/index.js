
const API_SERVER = 'https://api.themoviedb.org/3';
const AUTH_TOKEN = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODNjNjBhYTE5Y2IyY2QyNTQzZWQwZDI5NjA1OGNhMCIsInN1YiI6IjYyYWExMWMzZWIxNGZhMDlkZGMxMWY4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2FdmFoumWdmPkxduCQ0CCheleaAns0J9tKvEeeKR45k"
const OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: AUTH_TOKEN
    }
};

const cargarPeliculasTendencia = async (page = 1) => {
    // Realizamos una petición fetch a la API para obtener las películas populares
    const response = await fetch(`${API_SERVER}/movie/popular?page=${page}`, OPTIONS);
    const data = await response.json(); // Convertimos la respuesta a JSON
    const movies = data.results;// Extraemos las películas de la respuesta
    console.log(movies);
    const tendenciasContainer = document.getElementById('tendenciasContainer');// Seleccionamos el contenedor de películas de tendencia en el DOM, la section que tiene dentro el div peliculas
    tendenciasContainer.innerHTML = '';// Limpiamos el contenido previo del contenedor

    movies.forEach(movie => {
        const cardContainer = document.createElement('div');
        cardContainer.classList.add('col-md-3')
        cardContainer.classList.add('card-container')

        const cardMovie = document.createElement('div');
        cardMovie.classList.add('card-movie');

        const ancla = document.createElement('a');
        ancla.href = './pages/detalle.html';
        ancla.style.height = "100%"

        const img = document.createElement('img');
        img.classList.add('card-img-top');
        img.classList.add('card-image');
        img.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
        img.alt = movie.title;
        img.loading = 'lazy';
        
        const cardMovieBody = document.createElement('div')
        cardMovieBody.classList.add('card-body')
        cardMovieBody.classList.add('card-body-index')
        
        const title = document.createElement('h4');
        title.classList.add('card-title')

        title.textContent = movie.title;
        
        // Relación de Nodos
        cardMovieBody.appendChild(title);
        ancla.appendChild(img);
        ancla.appendChild(cardMovieBody);
        cardMovie.appendChild(ancla);
        cardContainer.appendChild(cardMovie);
        tendenciasContainer.appendChild(cardContainer);
    });

    // Actualizamos el atributo data-page con el número de página actual
    tendenciasContainer.parentElement.setAttribute('data-page', page);
};

function actualizarNumeroDePagina(currentPage) {
    pageNumberSpan.textContent = `Página: ${currentPage}`;
}

const pageNumberSpan = document.getElementById('pageNumber');
const botonAnterior = document.getElementById('botonAnterior');
const botonSiguiente = document.getElementById('botonSiguiente');
const seccionTendencias = document.getElementById('tendencias');
// Event listener para el botón "Anterior"
botonAnterior.addEventListener('click', () => {
    console.log(seccionTendencias.getAttribute('data-page'))
    // Obtener el número de página actual
    let currentPage = Number(seccionTendencias.getAttribute('data-page'));
    // Si es la primera página, no hacemos nada
    if (currentPage <= 1) return;
    // Cargar las películas de la página anterior
    cargarPeliculasTendencia(currentPage - 1);
    actualizarNumeroDePagina(currentPage - 1);
});

// Event listener para el botón "Siguiente"
botonSiguiente.addEventListener('click', () => {
    console.log(seccionTendencias.getAttribute('data-page'))
    // Obtener el número de página actual
    let currentPage = Number(seccionTendencias.getAttribute('data-page'));
    // Cargar las películas de la página siguiente
    cargarPeliculasTendencia(currentPage + 1);
    actualizarNumeroDePagina(currentPage + 1);
});


document.addEventListener('DOMContentLoaded', () => {
    cargarPeliculasTendencia();
});