var express = require('express');
var routeUser = express.Router();
var user = require('../controlador/users.controlador');

//GET ALL
routeUser.get('/user/', function(req, res, next) {
  user.getAll(function(data) {
    if(typeof data !== 'undefined') {
      res.json(data);
    } else {
      res.json({"mensaje" : "Not found user."});
    }
  });
});

//OBTENER DATOS DE UNO
routeUser.get('/user/:id', function(req, res, next) {
    //USAS PARAMS Si los datos vienen en el link
  let id = req.params.id;
  user.getSingle(id, function(data) {
    if(typeof data !== 'undefined') {
      res.json(data);
    } else {
      res.json({"mensaje" : "Not found user."});
    }
  });
});

routeUser.post("/auth2", function(req, res) {
    //ahora se usa body por que los datos vienen en el cuerpo 
    //no en el link
    var data = {
        usuario: req.body.usuario,
        contra: req.body.contra
    }

    user.login(data, function(resultado) {
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

routeUser.post("/user", function(req, res) {
    //ahora se usa body por que los datos vienen en el cuerpo 
    //no en el link
    var data = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        usuario: req.body.usuario,
        contra: req.body.contra,
        tipo: req.body.tipo
    }

    user.create(data, function(resultado) {
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

routeUser.put("/user/:id", function(req, res) {
  //ahora se usa body por que los datos vienen en el cuerpo 
  //no en el link
  var data = {
      id: req.params.id,
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      usuario: req.body.usuario,
      contra: req.body.contra
  }

  user.update(data, function(resultado) {
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

routeUser.delete('/user/:id', function(req,res){
  var data = req.params.id;
  console.log(data)
  user.delete(data, function(resultado){
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
