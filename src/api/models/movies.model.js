const mongoose = require ('mongoose');

//obtengo el schema de mongoose
const Schema = mongoose.Schema;

const movieSchema = new Schema(
    {
        title: {type: String, required: true},
        director: {type: String, required: true},
        year: {type: Number, required: true},
        duration: {type: Number, required: true},
        genre: {type: String, required: true},
        valoration: {type: Number, required: false},
        synopsis: {type: String, required: true},
        billboard: {type: String, required: false, default: "https://res.cloudinary.com/da3lrqri1/image/upload/v1679572491/movies/portadaDefault_n65yft.jpg"},
    },{
        timestamps: true
    }
)

//Generamos el modelo de nuestra entidad en base a nuestro Schema
const Movie = mongoose.model('movie', movieSchema);

module.exports = Movie;