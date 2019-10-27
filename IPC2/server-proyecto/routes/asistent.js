var express = require('express');
var routeAsistent = express.Router();
var asistent = require('../controlador/users.controlador');

/* GET users listing. */
routeAsistent.get('/asistent', function(req, res, next) {
    asistent.getAll(function(data){
    if(typeof data !== 'undefined'){
      res.json(data);
    }else{
      res.json({"mensaje":"No se encontro usuario"});
    }
  });
});

// get1
routeAsistent.get('/asistent/:id', function(req,res){
  let id= req.params.id;
  asistent.getSingle(function(data){
    if(typeof data !== 'undefined') {
      res.json(data);
    } else {
      res.json({"mensaje" : "ususario no encontrado."});
    }
  });
});

routeAsistent.post("/asistent",function(req, res){
  var data ={
    id= req.body.id,
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    usuario: req.body.usuario,
    contra: req.body.contra
  }

  asistent.create(data, function(resultado){
    if(typeof resultado !== 'undefined'){
      res.json({
        estado: true,
        mensaje: "Se agrego exitosamente."
      });
    }else{
      res.json({
        estado: false,
        mensaje: "No se pudo agregar"
      });
    }
  });
});

routeAsistent.put("/asistent/:id", function(req, res) {

  var data = {
      id: req.params.id,
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      usuario: req.body.usuario,
      contra: req.body.contra
  }

  asistent.update(data, function(resultado) {
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

routeAsistent.delete('/asistent/:id', function(req,res){
  var data = req.params.id;
  console.log(data)
  asistent.delete(data, function(resultado){
    if(typeof resultado !== 'undefined'){
      res.json({
        estado: true,
        mensaje:"Se elimino la cuenta de usuario."
      });
    }else{
      res.json({
        mensaje:"No se pudo eliminar."
      })
    }
  });
});


module.exports = routerusers;