const Movie = require("../models/movies.model");


const getMovie = async (req, res) => {
    try {
      const allMovies = await Movie.find(); //recojo los datos con una peticion a mongo
      return res.status(200).json(allMovies); // devuelvo los datos en formato json con un status 200
    } catch (error) {
      return res.status(500).json(error);
    }
  };


const getMovieById = async (req, res) => {
  try {
      const {id} = req.params;
      const allMovies = await Movie.findById(id);      
      return res.status(200).json(allMovies);        
  } catch (error) {
      return res.status(500).json(error);
  }
};

const getMovieByTitle = async (req, res) => {
  try {
      const {title} = req.params;
      const allMovies = await Movie.find({title: title});      
      return res.status(200).json(allMovies);        
  } catch (error) {
      return res.status(500).json(error);
  }
};

const getMovieByGenre = async (req, res) => {
  try {
      const {genre} = req.params;
      const allMovies = await Movie.find({genre: genre});      
      return res.status(200).json(allMovies);        
  } catch (error) {
      return res.status(500).json(error);
  }
};

const getMovieByYear = async (req, res) => {
  try {
     // const {year} = req.params;
      const allMovies = await Movie.find({year: {$gt:2010}});    
      return res.status(200).json(allMovies);     
  } catch (error) {
      return res.status(500).json(error);
  }
};

const postMovie = async (req, res) => {
    try {
      console.log(req.body);
      // const { title, director, genre, year, id } = req.body;
      // const newMovies = new Movie({ title, director, genre, year, id }); // creamos una nueva pelicula con los datos enviados
      const newMovie = new Movie(req.body); //esta linea es igual a las dos anteriores
      const createdMovie = await newMovie.save(); // guardamos el cliente en mongo y nos devuelve el nuevo elemento
      return res.status(201).json(createdMovie);
    } catch (error) {
      return res.status(500).json(error);
    }
  };

const putMovie = async (req, res) => {
  try {
      const {id}=req.params;
      const putMovie = new Movie(req.body);
      putMovie._id = id;

      const updateMovie = await Movie.findByIdAndUpdate(id, putMovie, {new: true}); //Buscamos por id y actualizamos el elemento
      if(!updateMovie){     //Controlamos que el elemento existiera y si no enviamos error 404
          return res.status(404).json({ "message": "Movie not found"});
       }
      return res.status(200).json(updateMovie);
  } catch (error) {
      return res.status(500).json(error);
  }
};


const deleteMovie = async (req, res) => {
  try {
      const {id}=req.params;
      const deleteMovie = await Movie.findByIdAndDelete(id); //Buscamos por id y borramos el elemento
      if(!deleteMovie){     //Controlamos que el elemento existiera y si no enviamos error 404
          return res.status(404).json({ "message": "Movie not found"});
      }
      return res.status(200).json(deleteMovie);
  } catch (error) {
      return res.status(500).json(error);
  }
}


module.exports = {getMovie, 
                  postMovie, 
                  putMovie, 
                  deleteMovie,
                  getMovieById,
                  getMovieByTitle,
                  getMovieByGenre,
                  getMovieByYear
                };