const API_KEY = "api_key=d59c7b28e92f24b3f428ca732c1463e1";
const BASE_URL= "https://api.themoviedb.org/3/";
const SEARCHMOVIEURL = `${BASE_URL}search/movie?${API_KEY}`;
const API_URL = `${BASE_URL}movie/popular?${API_KEY}`;
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
const movieMainContainer = document.querySelector(".movie-main-container")

//image url "https://api.themoviedb.org/3/search/movie"

console.log(movieMainContainer);
//console.log(API_URL)
//promise method of fecthing api
// const getMovies = (url)=>{
//     fetch(url)
//     .then((response)=> response.json())
//     .then((data)=>{console.log(data)})
//     .catch((error)=> console.log(error))
// }
// fecthing api with async await 
const getMovies = async (url)=>{
    try{
        const response = await fetch(url);
        const data = await response.json();
        //console.log(data)
        //accesing thing from the api data
        console.log(data.results)
        showMovies(data.results)
        // if(!response.ok){
        //     throw new Error("")
        // }
    } catch (error){
        console.log(error)

    }
}

getMovies(API_URL)

function showMovies(movies){
    movieMainContainer.innerHTML= '';
    movies.forEach(movie => {
        const{overview, title, vote_average, poster_path} = movie;
        console.log(`${IMAGE_URL}${poster_path}`)
        //console.log(vote_average);
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie')
        movieElement.innerHTML = `
                <div>
                <img src="${IMAGE_URL}${poster_path}" alt="">
                </div>
                        <div class="title-rating">
                            <span>${title}</span>
                            <span>${vote_average}</span>
                        </div>
                        <div class="overView">
                            <p>${overview}</p>
                        </div> 

        `
        movieMainContainer.appendChild(movieElement)
        
    });


}
const searchMovieForm= document.querySelector('#search')
searchMovieForm.addEventListener('keyup',(event)=>{
    event.preventDefault();
    const inputValue = event.target.value
    console.log(inputValue)
    if(inputValue){
        const searchUrl = SEARCHMOVIEURL + "&query=" + inputValue
        console.log(searchUrl)
        getMovies(searchUrl)
    }else{
        getMovies(API_URL)
    }

    
})



