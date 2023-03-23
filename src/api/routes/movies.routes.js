const express = require("express");

const router = express.Router();

const { 
        getMovie, 
        postMovie, 
        putMovie, 
        deleteMovie, 
        getMovieById, 
        getMovieByTitle,
        getMovieByGenre,
        getMovieByYear
    } = require("../controllers/movies.controller");

router.get("/year/", getMovieByYear);
router.get("/", getMovie);
router.get("/:id", getMovieById);
router.get("/title/:title", getMovieByTitle);
router.get("/genre/:genre", getMovieByGenre);
router.put("/:id", putMovie);
router.post("/", postMovie);
router.delete("/:id", deleteMovie);

module.exports = router;
