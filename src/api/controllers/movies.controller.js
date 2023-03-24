const Movie = require("../models/movies.model");
const { deleteFile } = require("../../middlewares/delete.file");

const getMovie = async (req, res) => {
    try {
      const allMovies = await Movie.find(); 
      return res.status(200).json(allMovies); 
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
     
      const allMovies = await Movie.find({year: {$gt:2010}});    
      return res.status(200).json(allMovies);     
  } catch (error) {
      return res.status(500).json(error);
  }
};

const postMovie = async (req, res) => {
    try {
      // console.log(req.body);
      const newMovie = new Movie(req.body); 
      if (req.file) {
        newMovie.billboard = req.file.path;
      }
      const createdMovie = await newMovie.save(); 
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

      if (req.file) {
        newMovie.billboard = req.file.path;
      }
      const updateMovie = await Movie.findByIdAndUpdate(id, putMovie); 
      if (updateMovie.billboard) {
        deleteFile(updateMovie.billboard);
      }
      return res.status(200).json(updateMovie);

  } catch (error) {
      return res.status(500).json(error);
  }
};


const deleteMovie = async (req, res) => {
  try {
      const {id}=req.params;
      const deleteMovie = await Movie.findByIdAndDelete(id); 
      if(!deleteMovie){     
          return res.status(404).json({ "message": "Movie not found"});
      }
      if (deleteMovie.image) {
        deleteFile(deleteMovie.image);
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