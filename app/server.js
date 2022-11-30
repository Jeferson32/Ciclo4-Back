const express = require('express')
const app = express()
var cors = require("cors");
var session = require("express-session");

//Importar Conexion Mongo db 
const archivoDB = require('../config/conexionDB')

//Middlewares
app.use(cors());
app.use(
    session({
        secret: "mipalabrasecreta",
        cookie: { maxAge: 60000 },
    })
);
app.use("*", function (req, res, next) {
    if (req.session.MIVAR > -1) {
        req.session.MIVAR = req.session.MIVAR + 1;
    } else {
        req.session.MIVAR = 0;
    }
    console.log(req.session);
    next();
});


// Importacion del archivo de rutas y el modelo de usuarios
const rutaUsuario = require('../routes/usuarioRoutes')
const rutaProducto = require('../routes/productosRoutes')


// Importar Body.parser
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: 'true' }))

app.use('/usuarios', rutaUsuario)
app.use('/productos', rutaProducto)


app.use('/', (req, res) => {
    res.end('servidor')
})


//Configuracion server Basico

app.listen(3001, function () {
    console.log('Servidor Corriendo')
})