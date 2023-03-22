const express = require ("express");
const dotenv = require ("dotenv");
const {connect} = require ("./src/utils/database"); //importamos nuestra función connect de nuestro archivo database.js
const routerMovie = require ("./src/api/routes/movies.routes");
const routerCinema = require ("./src/api/routes/cinema.routes");

const routerUser = require ('./src/api/routes/users.routes');




dotenv.config();
const PORT = process.env.PORT || 8000;


const app = express();

connect();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/movies',routerMovie);
app.use('/cinemas',routerCinema);
app.use ('/users', routerUser);

app.listen (PORT, () => console.log(`Listening on: http://localhost:${PORT}`));
