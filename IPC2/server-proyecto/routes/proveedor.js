var express = require('express');
var routeproveedor = express.Router();
var proveedor = require('../controlador/proveedor.controlador');

//GET ALL
routeproveedor.get('/proveedor/', function(req, res, next) {
  proveedor.getAll(function(data) {
    if(typeof data !== 'undefined') {
      res.json(data);
    } else {
      res.json({"mensaje" : "Not found proveedor."});
    }
  });
});

//OBTENER DATOS DE UNO
routeproveedor.get('/proveedor/:id', function(req, res, next) {
    //USAS PARAMS Si los datos vienen en el link
  let id = req.params.id;
  proveedor.getSingle(id, function(data) {
    if(typeof data !== 'undefined') {
      res.json(data);
    } else {
      res.json({"mensaje" : "Not found proveedor."});
    }
  });
});

routeproveedor.post("/proveedor", function(req, res) {
    //ahora se usa body por que los datos vienen en el cuerpo 
    //no en el link
    var data = {
        id: req.body.id,
        nombre: req.body.nombre,
        apellido: req.body.direccion,
        usuario: req.body.telefono
    }

    proveedor.create(data, function(resultado) {
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

routeproveedor.put("/proveedor/:id", function(req, res) {
  //ahora se usa body por que los datos vienen en el cuerpo 
  //no en el link
  var data = {
      id: req.params.id,
      nombre: req.body.nombre,
      apellido: req.body.direccion,
      usuario: req.body.telefono
  }

  proveedor.update(data, function(resultado) {
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

routeproveedor.delete('/proveedor/:id', function(req,res){
  var data = req.params.id;
  console.log(data)
  proveedor.delete(data, function(resultado){
    if(typeof resultado !== 'undefined'){
      res.json({
        estado: true,
        mensaje:"Se elimino la cuenta de proveedoristrador."
      });
    }else{
      res.json({
        mensaje:"No se pudo eliminar."
      })
    }
  });
});

module.exports = routeproveedor;
