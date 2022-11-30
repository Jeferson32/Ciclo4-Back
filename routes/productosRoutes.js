const express = require('express')
const ModeloProductos = require('../models/ProductosModel')
const router = express.Router()


module.exports = router


router.post('/crearProducto', (req, res) => {
    const nuevoUsuarios = new ModeloProductos({
        nombreProducto: req.body.nombreProducto,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        marca: req.body.marca,
        cantidad: req.body.cantidad,
        idProducto: req.body.idProducto
    })
    nuevoUsuarios.save(function (err) {
        if (!err) {
            res.send('Producto agregado correctamente')
        } else {
            res.send(err)
        }
    })
})

router.get('/listarProductos', (req, res) => {
    ModeloProductos.find({}, function (docs, err) {
        if (!err) {
            res.send(docs)
        } else {
            res.send(err)
        }
    })
})

router.post('/datosProducto', (req, res) => {
    ModeloProductos.find({ idProducto: req.body.idProducto }, function (docs, err) {
        if (!err) {
            res.send(docs)
        } else {
            res.send(err)
        }
    })
})

router.post('/editar', (req, res) => {
    ModeloProductos.findOneAndUpdate({ idProducto: req.body.idProducto }, {
        nombreProducto: req.body.nombreProducto,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        marca: req.body.marca,
        cantidad: req.body.cantidad,
    }, (err) => {
        if (!err) {
            res.send('usuario actulizado')
        } else {
            res.send(err)
        }
    })
})

router.post('/borrar', (req, res) => {
    ModeloProductos.findOneAndDelete({ idProducto: req.body.idProducto }, (err) => {
        if (!err) {
            res.send('usuario eliminado')
        } else {
            res.send(err)
        }
    })
})