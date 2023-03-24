const express = require("express");
const upload = require('../../middlewares/upload.file');
const {isAdmin, isAuth} = require('../../middlewares/auth')
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

router.get("/year/", [isAuth], getMovieByYear);
router.get("/", [isAuth], getMovie);
router.get("/:id", [isAuth], getMovieById);
router.get("/title/:title", [isAuth], getMovieByTitle);
router.get("/genre/:genre", [isAuth], getMovieByGenre);
// router.put("/:id", putMovie);
// router.post("/", postMovie);
router.delete("/:id", [isAdmin], deleteMovie);
router.post('/', [isAdmin], upload.single('billboard'), postMovie); 
router.put('/:id', [isAdmin], upload.single('billboard'), putMovie)

module.exports = router;
