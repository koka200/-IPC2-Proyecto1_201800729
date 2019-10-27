var express = require('express');
var routeAdmin = express.Router();
var admin = require('../controlador/admin.controlador');

//GET ALL
routeAdmin.get('/admin/', function(req, res, next) {
  admin.getAll(function(data) {
    if(typeof data !== 'undefined') {
      res.json(data);
    } else {
      res.json({"mensaje" : "Not found admin."});
    }
  });
});

//OBTENER DATOS DE UNO
routeAdmin.get('/admin/:id', function(req, res, next) {
    //USAS PARAMS Si los datos vienen en el link
  let id = req.params.id;
  admin.getSingle(id, function(data) {
    if(typeof data !== 'undefined') {
      res.json(data);
    } else {
      res.json({"mensaje" : "Not found admin."});
    }
  });
});

routeAdmin.post("/admin", function(req, res) {
    //ahora se usa body por que los datos vienen en el cuerpo 
    //no en el link
    var data = {
        id: req.body.id,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        usuario: req.body.usuario,
        contra: req.body.contra
    }

    admin.create(data, function(resultado) {
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

routeAdmin.put("/admin/:id", function(req, res) {
  //ahora se usa body por que los datos vienen en el cuerpo 
  //no en el link
  var data = {
      id: req.params.id,
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      usuario: req.body.usuario,
      contra: req.body.contra
  }

  admin.update(data, function(resultado) {
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

routeAdmin.delete('/admin/:id', function(req,res){
  var data = req.params.id;
  console.log(data)
  admin.delete(data, function(resultado){
    if(typeof resultado !== 'undefined'){
      res.json({
        estado: true,
        mensaje:"Se elimino la cuenta de administrador."
      });
    }else{
      res.json({
        mensaje:"No se pudo eliminar."
      })
    }
  });
});

module.exports = routeAdmin;
