const mongoose = require('mongoose');   //requerimos mongoose

//nuestra url a mongoDB

//const DB_URL = "mongodb+srv://root:root@cluster0.yk7yuyt.mongodb.net/movies?retryWrites=true&w=majority";
// mongodb+srv://root:AQUI MI PASSWORD@cluster0.7wqqxkh.mongodb.net/AQUI NOMBRE BBDD?retryWrites=true&w=majority

const connect = async () => {

    try {
        //Aquí conectamos a la BBDD
        const db = await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        const {name, host} = db.connection;
        console.log(`Connected to ${name} DB in host: ${host}`)
        
    } catch (error) {
        console.log(`He tenido un error al conectar con mi BBDD: ${error}`)
    }

}

module.exports = {connect}