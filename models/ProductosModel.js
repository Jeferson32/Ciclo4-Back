
const mongoose = require('mongoose')

const eschema = mongoose.Schema

const eschemaUsuario = new eschema({

    nombreProducto: String,
    descripcion: String,
    precio: String,
    marca: String,
    cantidad: String,
    idProducto: String
})

const ModeloUsuario = mongoose.model('Productos', eschemaUsuario)

module.exports = ModeloUsuario