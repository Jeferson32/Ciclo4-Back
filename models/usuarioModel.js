
const mongoose = require('mongoose')

const eschema = mongoose.Schema

const eschemaUsuario = new eschema({

    nombres: String,
    apellidos: String,
    direccion: String,
    email: String,
    clave: String,
    celular: String,
    idUsuario: String
})

const ModeloUsuario = mongoose.model('usuarios', eschemaUsuario)

module.exports = ModeloUsuario