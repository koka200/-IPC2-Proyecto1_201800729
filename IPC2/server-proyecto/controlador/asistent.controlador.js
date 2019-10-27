var database = require('../mysql/mysql');
var asistn = {};

//GET ALL
asistn.getAll = function(callback) {
  if(database) {
    database.query('SELECT * FROM asistn', function(error, resultados) {
      if(error) throw error;
      callback(resultados);
    });
  }
}

//GET SINGLE
asistn.getSingle = function(idCategory, callback) {
  if(database) {
    var sql = "SELECT * FROM asistn WHERE idasistn = ?";
    database.query(sql, idCategory,
    function(error, resultado) {
      if(error) {
        throw error;
      } else {
        callback(resultado);
      }
    });
  }
}

//METODO PARA AGREGAR asistnISTRADOR

//UNA VEZ CREDO EL CONTROLADOR DE AGREGAR ENTONCES LO PONES EN LA RUTA
asistn.create = function(data, callback) {
    //si esxiste conexion
    if(database) {
        var sql = "INSERT INTO asistn(IDasistn, NOMBRE, APELLIDO, NOMUSUARIO, CONTRA) VALUES(?, ?, ?, ?, ?);";
        //con estos datos tenes que mandarlos si no no funcinoa
        database.query(sql, [data.id, data.nombre, data.apellido, data.usuario,data.contra],
            function(error, resultado) {
            if(error) {
              throw error;
            } else {
              callback(resultado);
            }
        });
    }
}

//ACTUALIZAR
asistn.update = function(data, callback) {
  //si esxiste conexion
  if(database) {
      var sql = "UPDATE asistn SET NOMBRE = ?, APELLIDO = ?, NOMUSUARIO = ?, CONTRA = ? WHERE idasistn = ?;";
      //con estos datos tenes que mandarlos si no no funcinoa
      database.query(sql, [data.nombre, data.apellido, data.usuario, data.contra, data.id],
          function(error, resultado) {
          if(error) {
            throw error;
          } else {
            callback(resultado);
          }
      });
  }
}

//borrar
asistn.delete = function(IDasistn, callback){
  if(database){
    var query="DELETE FROM asistn WHERE idasistn = ?";
              database.query(query, IDasistn,
                function(error, resultado){
                  if(error){
                    throw error;
                  }else{
                    callback(null, resultado);
                  }
    });
  }
}

module.exports = asistn;