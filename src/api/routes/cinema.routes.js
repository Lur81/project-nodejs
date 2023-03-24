const express = require("express");
// const router = require("../controllers/cinema.controller");
const {isAdmin, isAuth} = require('../../middlewares/auth')
const router = express.Router();

const { getCinema, 
        getCinemaById,
        postCinema, 
        putCinema, 
        deleteCinema
    } = require("../controllers/cinema.controller");

router.get("/", [isAuth], getCinema);
router.get("/:id", [isAuth], getCinemaById);
router.put("/:id", [isAdmin], putCinema);
router.post("/", [isAdmin], postCinema);
router.delete("/:id", [isAdmin], deleteCinema);

module.exports = router;
