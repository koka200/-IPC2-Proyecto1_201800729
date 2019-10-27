var express = require('express');
var routeUser = express.Router();
var user = require('../controlador/ususario.controlador');

routeUser.get('/user/', function(req, res, next) {
    user.getAll(function(data){
        if(typeof data !=='undefined'){
            res.json(data);
        }else{
            res.json({"mensaje" : "Not Found User"});
        }
    });
});

//obtener uno
routeUser.get('/user/:id', function(req, res, next){
    let id = req.params.id;
    user.getSingle(id, function(data){
        if(typeof data !== 'undefined'){
            res.json(data);
        }else{
            res.json({"mensaje" : "Not Found User"});
        }
    });
});

routeUser.post("/auth", function(req, res){
    var data={
        ususario: req.body.ususario,
        contrasena: req.body.contrasena
    }

    user.login(data, function(resultado){
        if(typeof resultado !== 'undefined'){
            res.json({
                estado: true,
                mensaje: "Usuario Encontrado",
                data: resultado
            });
        }else{
            res.json({
                estado: false,
                mensaje: "Usuario No Encontrado"
            });
        }
    });
});

routeUser.post("/user", function(req, res){
    var data = {
        nombre: req.body.nombre,
        correo: req.body.correo,
        contrasena: req.body.contrasena,
        tipo: req.body.tipo
    }

    user.create(data, function(resultado){
        if(typeof resultado !== 'undefined'){
            res.json({
                estado: true,
                mensaje: "se agrego el usuario"
            });
        }else{
            res.json({
                estado: false,
                mensaje: "No se agrego el usuario"
            });
        }
    })
});

routeUser.put("/user/:id", function(req, res) {
    var data = {
        id: req.params.id,
        nombre: req.body.nombre,
        correo: req.body.correo,
        contrasena: req.body.contrasena
    }

    user.update(data, function(resultado){
        if(typeof resultado !=='undefined'){
            res.json({
                estado: true,
                mensaje: "Se Actualizo el usuario"
            });
        }else{
            res.json({
                estado: false,
                mensaje: "No se actualizo el usuario"
            });
        }
    });
});

routeUser.delete('/user/:id', function(req, res){
    var data = req.params.id;
    console.log(data);
    user.delete(data, function(resultado){
        if(typeof resultado !== 'undefined'){
            res.json({
                estado: true,
                mensaje: "Se elimino la cuenta"
            });
        }else{
            res.json({
                estado: false,
                mensaje: "No se pudo eliminar"
            });
        }
    });
});

module.exports = routeUser;