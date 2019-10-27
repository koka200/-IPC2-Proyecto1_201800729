var express = require('express');
var routeproducto = express.Router();
var producto = require('../controlador/productos.controlador');

//GET ALL
routeproducto.get('/producto/', function(req, res, next) {
  producto.getAll(function(data) {
    if(typeof data !== 'undefined') {
      res.json(data);
    } else {
      res.json({"mensaje" : "Not found producto."});
    }
  });
});

//OBTENER DATOS DE UNO
routeproducto.get('/producto/:id', function(req, res, next) {
    //USAS PARAMS Si los datos vienen en el link
  let id = req.params.id;
  producto.getSingle(id, function(data) {
    if(typeof data !== 'undefined') {
      res.json(data);
    } else {
      res.json({"mensaje" : "Not found producto."});
    }
  });
});

routeproducto.post("/producto", function(req, res) {
    //ahora se usa body por que los datos vienen en el cuerpo 
    //no en el link
    var data = {
        id: req.body.id,
        nombre: req.body.nombre,
        cantidad: req.body.cantidad,
        precio: req.body.precio,
        descp: req.body.descp
    }

    producto.create(data, function(resultado) {
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

routeproducto.put("/producto/:id", function(req, res) {
  //ahora se usa body por que los datos vienen en el cuerpo 
  //no en el link
  var data = {
    id: req.body.id,
    nombre: req.body.nombre,
    cantidad: req.body.cantidad,
    precio: req.body.precio,
    descp: req.body.descp
}

  producto.update(data, function(resultado) {
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

routeproducto.delete('/producto/:id', function(req,res){
  var data = req.params.id;
  console.log(data)
  producto.delete(data, function(resultado){
    if(typeof resultado !== 'undefined'){
      res.json({
        estado: true,
        mensaje:"Se elimino la cuenta de productoistrador."
      });
    }else{
      res.json({
        mensaje:"No se pudo eliminar."
      })
    }
  });
});

module.exports = routeproducto;
