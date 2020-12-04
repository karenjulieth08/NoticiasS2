//LLAMAdO A LA API

const movies = ["up", "fast", "harry","her"];
var newMovie = [];

   
    let urlOmbd = `http://www.omdbapi.com/?apikey=964334f2&s="woman"&type=movie`;

    fetch(urlOmbd, {method:"GET"})
    .then(res => res.json())
    .then(data => {
    
        console.log(data.Search[0].Actors);

//IMPRIMIR EN PANTALLA
  
for (i = 1; i <= 4; i++) {

    const posterMovie = document.createElement ("img");
    const moviePoster = document.querySelector("#poster"+i);

    posterMovie.className = "card-img-top";
    posterMovie.src = data.Search[i-1].Poster;

    moviePoster.appendChild(posterMovie);

    const movieTitle= document.querySelector("#title"+i);
     movieTitle.textContent = "TITULO: " + data.Search[i-1].Title;

    const movieYear= document.querySelector("#year"+i);
    movieYear.textContent = "AÑO: " + data.Search[i-1].Year;

    const movieActors= document.querySelector("#actors"+i);
    movieActors.textContent = "TIPO: " + data.Search[i-1].Type;

}
})





