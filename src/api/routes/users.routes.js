const express = require ('express');
const {login, register, logout} = require('../controllers/users.controllers');
const { isAuth } = require('../../middlewares/auth');
const router = express.Router();

// router.get('/', (req,res) => {res.send("Este es mi get")});
router.post('/login', login);
router.post('/register', register);
router.post('/logout', [isAuth], logout);
// router.put('/', (req,res) => {res.send("Este es mi put")});
// router.delete('/', (req,res) => {res.send("Este es mi delete")});

module.exports = router;