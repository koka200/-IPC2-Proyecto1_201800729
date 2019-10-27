var express = require('express');
var routedetallecurso = express.Router();
var detallecurso = require('../controlador/detallecursos.controlador');

//GET ALL
routedetallecurso.get('/detallecurso/', function(req, res, next) {
  detallecurso.getAll(function(data) {
    if(typeof data !== 'undefined') {
      res.json(data);
    } else {
      res.json({"mensaje" : "Not found detallecurso."});
    }
  });
});

//OBTENER DATOS DE UNO
routedetallecurso.get('/detallecurso/:id', function(req, res, next) {
    //USAS PARAMS Si los datos vienen en el link
  let id = req.params.id;
  detallecurso.getSingle(id, function(data) {
    if(typeof data !== 'undefined') {
      res.json(data);
    } else {
      res.json({"mensaje" : "Not found detallecurso."});
    }
  });
});

routedetallecurso.post("/auth", function(req, res) {
    //ahora se usa body por que los datos vienen en el cuerpo 
    //no en el link
    var data = {
        correo: req.body.correo,
        contrasena: req.body.contrasena
    }

    detallecurso.login(data, function(resultado) {
        if(typeof resultado !== 'undefined') {
            res.json({
              estado: true,
              mensaje: "Usuario Encontrado.",
              data: resultado
            });
        } else {
            res.json({
                estado: false,
                mensaje: "No se encontro el detallecurso.",
            });
        }
      });
});

routedetallecurso.post("/detallecurso", function(req, res) {
    //ahora se usa body por que los datos vienen en el cuerpo 
    //no en el link
    var data = {
        semestre: req.body.semestre,
        anio: req.body.anio,
        horaInicio: req.body.horaInicio,
        horaFin: req.body.horaFin,
        idCurso: req.body.id,
        idSeccion: req.body.id
    }

    detallecurso.create(data, function(resultado) {
        //si recibe algo 
        if(typeof resultado !== 'undefined') {
            res.json({
              estado: true,
              mensaje: "Se agregó el detallecurso exitosamente."
            });
        } else {
            res.json({
                estado: false,
                mensaje: "No se agregó el detallecurso."
            });
        }
      });
});

routedetallecurso.put("/detallecurso/:id", function(req, res) {
  //ahora se usa body por que los datos vienen en el cuerpo 
  //no en el link
  var data = {
      idDetalleCurso: req.params.id,
      semestre: req.body.semestre,
      anio: req.body.anio,
      horaInicio: req.body.horaInicio,
      horaFin: req.body.horaFin,
      idCurso: req.body.idCurso,
      idSeccion: req.body.idSeccion
  }

  detallecurso.update(data, function(resultado) {
      //si recibe algo 
      if(typeof resultado !== 'undefined') {
          res.json({
            estado: true,
            mensaje: "Se actualizo el detallecurso exitosamente."
          });
      } else {
          res.json({
              estado: false,
              mensaje: "No se actualizo el detallecurso."
          });
      }
    });
});

routedetallecurso.delete('/detallecurso/:id', function(req,res){
  var data = req.params.id;
  console.log(data)
  detallecurso.delete(data, function(resultado){
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

module.exports = routedetallecurso;