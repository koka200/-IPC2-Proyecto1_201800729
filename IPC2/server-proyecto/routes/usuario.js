var express = require('express');
var routeUser = express.Router();
var usuario = require('../controlador/usuario.controlador');

//GET ALL
routeUser.get('/usuario/', function(req, res, next) {
  usuario.getAll(function(data) {
    if(typeof data !== 'undefined') {
      res.json(data);
    } else {
      res.json({"mensaje" : "Not found usuario."});
    }
  });
});

//OBTENER DATOS DE UNO
routeUser.get('/usuario/:id', function(req, res, next) {
    //USAS PARAMS Si los datos vienen en el link
  let id = req.params.id;
  usuario.getSingle(id, function(data) {
    if(typeof data !== 'undefined') {
      res.json(data);
    } else {
      res.json({"mensaje" : "Not found usuario."});
    }
  });
});

routeUser.post("/auth", function(req, res) {
    //ahora se usa body por que los datos vienen en el cuerpo 
    //no en el link
    var data = {
        correo: req.body.correo,
        contrasena: req.body.contrasena
    }

    usuario.login(data, function(resultado) {
        if(typeof resultado !== 'undefined') {
            res.json({
              estado: true,
              mensaje: "Usuario Encontrado.",
              data: resultado
            });
        } else {
            res.json({
                estado: false,
                mensaje: "No se encontro el usuario.",
            });
        }
      });
});

routeUser.post("/usuario", function(req, res) {
    //ahora se usa body por que los datos vienen en el cuerpo 
    //no en el link
    var data = {
        nombre: req.body.nombre,
        correo: req.body.correo,
        contrasena: req.body.contrasena,
        tipo: req.body.tipo
    }

    usuario.create(data, function(resultado) {
        //si recibe algo 
        if(typeof resultado !== 'undefined') {
            res.json({
              estado: true,
              mensaje: "Se agregó el usuario exitosamente."
            });
        } else {
            res.json({
                estado: false,
                mensaje: "No se agregó el usuario."
            });
        }
      });
});

routeUser.put("/usuario/:id", function(req, res) {
  //ahora se usa body por que los datos vienen en el cuerpo 
  //no en el link
  var data = {
      id: req.params.id,
      nombre: req.body.nombre,
      correo: req.body.correo,
      contrasena: req.body.contrasena,
      tipo: req.body.tipo
  }

  usuario.update(data, function(resultado) {
      //si recibe algo 
      if(typeof resultado !== 'undefined') {
          res.json({
            estado: true,
            mensaje: "Se actualizo el usuario exitosamente."
          });
      } else {
          res.json({
              estado: false,
              mensaje: "No se actualizo el usuario."
          });
      }
    });
});

routeUser.delete('/usuario/:id', function(req,res){
  var data = req.params.id;
  console.log(data)
  usuario.delete(data, function(resultado){
    if(typeof resultado !== 'undefined'){
      res.json({
        estado: true,
        mensaje:"Se elimino la cuenta de useristrador."
      });
    }else{
      res.json({
        mensaje:"No se pudo eliminar."
      })
    }
  });
});

module.exports = routeUser;

/*
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

routeUser.post("/usuario", function(req, res){
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

module.exports = routeUser;*/