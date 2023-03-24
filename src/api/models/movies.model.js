const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const movieSchema = new Schema(
    {
        title: {type: String, required: true},
        director: {type: String, required: false},
        year: {type: Number, required: false},
        duration: {type: Number, required: false},
        genre: {type: String, required: false},
        valoration: {type: Number, required: false},
        synopsis: {type: String, required: false},
        billboard: {type: String, required: true, default: "https://res.cloudinary.com/da3lrqri1/image/upload/v1679668241/movies/portadaDefault_aiu31k.jpg"},
    },{
        timestamps: true
    }
)


const Movie = mongoose.model('movie', movieSchema);

module.exports = Movie;