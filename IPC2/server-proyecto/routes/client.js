var express = require('express');
var routeclient = express.Router();
var client = require('../controlador/client.controlador');

//GET ALL
routeclient.get('/client/', function(req, res, next) {
  client.getAll(function(data) {
    if(typeof data !== 'undefined') {
      res.json(data);
    } else {
      res.json({"mensaje" : "Not found client."});
    }
  });
});

//OBTENER DATOS DE UNO
routeclient.get('/client/:id', function(req, res, next) {
    //USAS PARAMS Si los datos vienen en el link
  let id = req.params.id;
  client.getSingle(id, function(data) {
    if(typeof data !== 'undefined') {
      res.json(data);
    } else {
      res.json({"mensaje" : "Not found client."});
    }
  });
});

routeclient.post("/client", function(req, res) {
    //ahora se usa body por que los datos vienen en el cuerpo 
    //no en el link
    var data = {
        id: req.body.id,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        usuario: req.body.usuario,
        contra: req.body.contra
    }

    client.create(data, function(resultado) {
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

routeclient.put("/client/:id", function(req, res) {
  //ahora se usa body por que los datos vienen en el cuerpo 
  //no en el link
  var data = {
      id: req.params.id,
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      usuario: req.body.usuario,
      contra: req.body.contra
  }

  client.update(data, function(resultado) {
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

routeclient.delete('/client/:id', function(req,res){
  var data = req.params.id;
  console.log(data)
  client.delete(data, function(resultado){
    if(typeof resultado !== 'undefined'){
      res.json({
        estado: true,
        mensaje:"Se elimino la cuenta de clientistrador."
      });
    }else{
      res.json({
        mensaje:"No se pudo eliminar."
      })
    }
  });
});

module.exports = routeclient;