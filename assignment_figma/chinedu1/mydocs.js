const API_KEY = "api_key=d59c7b28e92f24b3f428ca732c1463e1"
const BASE_URL= "https://api.themoviedb.org/3/movie/";
const API_URL = `${BASE_URL}popular?${API_KEY}`;
console.log(API_URL)
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
        console.log(data)
        // if(!response.ok){
        //     throw new Error("")
        // }
    } catch (error){
        console.log(error)

    }
}

getMovies(API_URL)


