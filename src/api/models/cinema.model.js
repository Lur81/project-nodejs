const mongoose = require ('mongoose');

//obtengo el schema de mongoose
const Schema = mongoose.Schema;

const cinemaSchema = new Schema(
    {
        name: {type: String, required: true},
        location: {type: String, required: true},
        movies: [{type: Schema.Types.ObjectId, ref: "movie"}]
    },{
        timestamps: true
    }
)

//Generamos el modelo de nuestra entidad en base a nuestro Schema
const Cinema = mongoose.model('cinema', cinemaSchema);

module.exports = Cinema;