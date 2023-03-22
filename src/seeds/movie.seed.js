const mongoose = require('mongoose');

const Movie = require ("../api/models/movies.model");

const arrayMovies = [
    {
      title: "The Matrix",
      director: "Hermanas Wachowski",
      year: 1999,
      genre: "Acción",
    },
    {
      title: "The Matrix Reloaded",
      director: "Hermanas Wachowski",
      year: 2003,
      genre: "Acción",
    },
    {
      title: "Buscando a Nemo",
      director: "Andrew Stanton",
      year: 2003,
      genre: "Animación",
    },
    {
      title: "Buscando a Dory",
      director: "Andrew Stanton",
      year: 2016,
      genre: "Animación",
    },
    {
      title: "Interestelar",
      director: "Christopher Nolan",
      year: 2014,
      genre: "Ciencia ficción",
    },
    {
      title: "50 primeras citas",
      director: "Peter Segal",
      year: 2004,
      genre: "Comedia romántica",
    },
  ];

  
  //mongoose.connect(process.env.DB_URL,
  mongoose.connect("mongodb+srv://root:root@cluster0.yk7yuyt.mongodb.net/movies?retryWrites=true&w=majority", 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

.then(async () => {
    const allMovies = await Movie.find();
    if(allMovies.length > 0){
        await Movie.collection.drop()
        console.log("Películas borradas");
    };
})
.catch((err) => console.log("Error borrando peliculas", err))
.then(async () => {
    const moviesMap = arrayMovies.map((movie) => new Movie(movie));
    await Movie.insertMany(moviesMap);
    console.log("Películas insertadas");
})
.catch((err) => console.log("Error insertando peliculas", err))
.finally(() => mongoose.disconnect());