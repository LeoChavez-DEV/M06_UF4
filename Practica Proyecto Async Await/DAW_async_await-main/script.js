// Claus
const keys = {
    api_key: '02561a9705ed454289912b16018fc95a',
    session_id: '9d9c9f7c0b75b2efa763276a6a7e4a10a922189e',
    account_id: '21217465'
}

let moviesResult = document.getElementById("moviesResult");

async function setFav(id, favBool){
    const url = `https://api.themoviedb.org/3/account/${keys.account_id}/favorite?api_key=${keys.api_key}&session_id=${keys.session_id}`;
    const body = {
        media_type: "movie",
        media_id: id,
        favorite: favBool
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        const data = await response.json();
        console.log(`ID ${id} marked as ${favBool}`);
        showFavs(); 
    } catch (error) {
        console.error('Error setting favorite:', error);
    }
}

async function showFavs(){
    const url = `https://api.themoviedb.org/3/account/${keys.account_id}/favorite/movies?api_key=${keys.api_key}&session_id=${keys.session_id}&language=en-US&sort_by=created_at.asc&page=1`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        moviesResult.innerHTML = "";
        data.results.forEach(movie => printMovie(movie, true, false));
    } catch (error) {
        console.error('Error fetching favorite movies:', error);
    }
}

async function searchMovies(query){
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${keys.api_key}&query=${query}&page=1`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        moviesResult.innerHTML = "";
        
        for (const movie of data.results) {
            const isFav = await FavoriteCheck(movie.id);
            printMovie(movie, isFav, false);
        }
        total_pages = data.total_pages; 
        current_page = 1;
    } catch (error) {
        console.error('Error searching movies:', error);
    }
}

async function FavoriteCheck(movieId) {
    const url = `https://api.themoviedb.org/3/account/${keys.account_id}/favorite/movies?api_key=${keys.api_key}&session_id=${keys.session_id}&language=en-US&sort_by=created_at.asc&page=1`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.results.some(movie => movie.id === movieId);
    } catch (error) {
        console.error('Error checking favorite movies:', error);
        return false;
    }
}



/* FUNCIONS D'INTERACCIÓ AMB EL DOM */

// Click Favorites
document.getElementById("showFavs").addEventListener("click", function(){
    removeActive();
    this.classList.add("active");
    showFavs();
})

// Click Watchlist
document.getElementById("showWatch").addEventListener("click", function(){
    removeActive();
    this.classList.add("active");
    //showWatch();
})

/* Funcions per detectar la cerca d'una pel·lícula */
// Intro a l'input
document.getElementById("search").addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        query = this.value; // Actualiza la query
        searchMovies(query);
    }
});

// Click a la lupa
document.querySelector(".searchBar i").addEventListener("click", () => {
    query = document.getElementById("search").value; // Actualiza la query
    searchMovies(query);
});

// Netejar l'input
document.getElementById("search").addEventListener('click', () => clearInput()); 

function clearInput(){
    document.getElementById("search").value = "";
}

// Elimina l'atribut active del menú
function removeActive(){
    document.querySelectorAll(".menu li a").forEach(el => el.classList.remove("active"));
}

/* Funció per printar les pel·lícules */
function printMovie(movie, fav, watch){
    let favIcon = fav ? 'iconActive' : 'iconNoActive';
    let watchIcon = watch ? 'iconActive' : 'iconNoActive';

    moviesResult.innerHTML += `<div class="movie">
                                    <img src="https://image.tmdb.org/t/p/original${movie.poster_path}">
                                    <h3>${movie.original_title}</h3>
                                    <div class="buttons">
                                        <a id="fav" onClick="setFav(${movie.id}, ${!fav})"><i class="fa-solid fa-heart ${favIcon}"></i></a>
                                        <a id="watch" onClick="setWatch(${movie.id}, ${!watch})"><i class="fa-solid fa-eye ${watchIcon}"></i></a>
                                    </div>
                                </div>`;
}

/* -------------Scroll infinito------------------ */

let total_pages = 0;
let current_page = 1;
let query = '';

window.addEventListener('scroll', async () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 5 && current_page < total_pages) {
        current_page++;
        document.getElementById('loading').style.display = 'block';
        await loadMoreMovies(query, current_page);
        document.getElementById('loading').style.display = 'none';
    }
});

async function loadMoreMovies(query, page) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${keys.api_key}&query=${query}&page=${page}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        for (const movie of data.results) {
            const isFav = await FavoriteCheck(movie.id);
            printMovie(movie, isFav, false);
        }
    } catch (error) {
        console.error('Error loading more movies:', error);
    }
}