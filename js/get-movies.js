/*carga datos de películas a la tabla*/
document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch(`http://localhost:8080/api/peliculas`,
        {
            method: 'GET',
            headers: {
                accept: 'application/json'
            }
        }
    );
    const movies = await response.json();
      
    const tbody = document.getElementById('bodyTable');
    
    movies.forEach(movie => {
        const movieId = document.createElement('td');
        movieId.textContent = movie.idPelicula;
        const title = document.createElement('td');
        title.textContent = movie.titulo;
        const gender = document.createElement('td');
        gender.textContent = movie.genero;
        const imgMovie = document.createElement('img');
        imgMovie.classList.add('imgTable', 'img-fluid', 'img-thumbnail');
        imgMovie.src = `../assets/img/images/${movie.imagen}`;
        imgMovie.alt = `Imagen de película ${movie.titulo}`;
        imgMovie.loading = 'lazy';
        const imgTd = document.createElement('td');
        imgTd.appendChild(imgMovie);
        const updateBtn = document.createElement('button');
        updateBtn.textContent = 'Modificar';
        updateBtn.classList.add('btn', 'btn-outline-light');
        const updateDiv = document.createElement('div');
        updateDiv.appendChild(updateBtn);
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Eliminar';
        deleteBtn.classList.add('btn', 'btn-outline-light');
        const deleteDiv = document.createElement('div');
        deleteDiv.appendChild(deleteBtn);
        const btnDiv = document.createElement('div');
        btnDiv.classList.add('d-flex', 'justify-content-center', 'align-items-center', 'm-2', 'gap-2', 'alineation');
        btnDiv.appendChild(updateDiv);
        btnDiv.appendChild(deleteDiv);
        const actions = document.createElement('td');
        actions.appendChild(btnDiv);
        const dataRow = document.createElement('tr');
        dataRow.appendChild(movieId);
        dataRow.appendChild(title);
        dataRow.appendChild(gender);
        dataRow.appendChild(imgTd);
        dataRow.appendChild(actions);

        tbody.appendChild(dataRow);
    });
});