const express = require('express')
const ModeloUsuario = require('../models/usuarioModel')
const router = express.Router()


module.exports = router



router.post('/crearUsuario', (req, res) => {
    const nuevoUsuarios = new ModeloUsuario({
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        email: req.body.email,
        celular: req.body.celular,
        direccion: req.body.direccion,
        clave: req.body.clave,
        idUsuario: req.body.idUsuario
    })
    nuevoUsuarios.save(function (err) {
        if (!err) {
            res.send('Usuario Registrado Correctamente')
        } else {
            res.send(err)
        }
    })
})

router.get('/listarUsuarios', (req, res) => {
    ModeloUsuario.find({}, function (docs, err) {
        if (!err) {
            res.send(docs)
        } else {
            res.send(err)
        }
    })
})

router.post('/datosUsuario', (req, res) => {
    ModeloUsuario.find({ idUsuario: req.body.idUsuario }, function (docs, err) {
        if (!err) {
            res.send(docs)
        } else {
            res.send(err)
        }
    })
})

router.get('/login/:clave', (req, res) => {

    ModeloUsuario.findOne({ clave: req.params.clave }, function (err, ModeloUsuario) {
        if (!ModeloUsuario) {
            res.send("Contraseña Incorrecta")
        } else {
            res.send("logeado")
        }
    })
})

router.post('/editar', (req, res) => {
    ModeloUsuario.findOneAndUpdate({ idUsuario: req.body.idUsuario }, {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        celular: req.body.celular
    }, (err) => {
        if (!err) {
            res.send('usuario actulizado')
        } else {
            res.send(err)
        }
    })
})

router.post('/borrar', (req, res) => {
    ModeloUsuario.findOneAndDelete({ idUsuario: req.body.idUsuario }, (err) => {
        if (!err) {
            res.send('usuario eliminado')
        } else {
            res.send(err)
        }
    })
})