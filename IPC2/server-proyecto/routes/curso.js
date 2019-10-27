var express = require('express');
var routecurso = express.Router();
var curso = require('../controlador/curso.controlador');

//GET ALL
routecurso.get('/curso/', function(req, res, next) {
  curso.getAll(function(data) {
    if(typeof data !== 'undefined') {
      res.json(data);
    } else {
      res.json({"mensaje" : "Not found curso."});
    }
  });
});

//OBTENER DATOS DE UNO
routecurso.get('/curso/:id', function(req, res, next) {
    //USAS PARAMS Si los datos vienen en el link
  let id = req.params.id;
  curso.getSingle(id, function(data) {
    if(typeof data !== 'undefined') {
      res.json(data);
    } else {
      res.json({"mensaje" : "Not found curso."});
    }
  });
});

routecurso.post("/auth", function(req, res) {
    //ahora se usa body por que los datos vienen en el cuerpo 
    //no en el link
    var data = {
        correo: req.body.correo,
        contrasena: req.body.contrasena
    }

    curso.login(data, function(resultado) {
        if(typeof resultado !== 'undefined') {
            res.json({
              estado: true,
              mensaje: "Usuario Encontrado.",
              data: resultado
            });
        } else {
            res.json({
                estado: false,
                mensaje: "No se encontro el curso.",
            });
        }
      });
});

routecurso.post("/curso", function(req, res) {
    //ahora se usa body por que los datos vienen en el cuerpo 
    //no en el link
    var data = {
        nombre: req.body.nombre,
        codigo: req.body.codigo,
        estado: req.body.estado,
    }

    curso.create(data, function(resultado) {
        //si recibe algo 
        if(typeof resultado !== 'undefined') {
            res.json({
              estado: true,
              mensaje: "Se agregó el curso exitosamente."
            });
        } else {
            res.json({
                estado: false,
                mensaje: "No se agregó el curso."
            });
        }
      });
});

routecurso.put("/curso/:id", function(req, res) {
  //ahora se usa body por que los datos vienen en el cuerpo 
  //no en el link
  var data = {
      idCurso: req.params.id,
      nombre: req.body.nombre,
      codigo: req.body.codigo,
      estado: req.body.estado,
  }

  curso.update(data, function(resultado) {
      //si recibe algo 
      if(typeof resultado !== 'undefined') {
          res.json({
            estado: true,
            mensaje: "Se actualizo el curso exitosamente."
          });
      } else {
          res.json({
              estado: false,
              mensaje: "No se actualizo el curso."
          });
      }
    });
});

routecurso.delete('/curso/:id', function(req,res){
  var data = req.params.id;
  console.log(data)
  curso.delete(data, function(resultado){
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

module.exports = routecurso;