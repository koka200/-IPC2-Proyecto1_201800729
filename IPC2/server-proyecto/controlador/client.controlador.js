var database = require('../mysql/mysql');
var client = {};

//GET ALL
client.getAll = function(callback) {
  if(database) {
    database.query('SELECT * FROM client', function(error, resultados) {
      if(error) throw error;
      callback(resultados);
    });
  }
}

//GET SINGLE
client.getSingle = function(idCategory, callback) {
  if(database) {
    var sql = "SELECT * FROM client WHERE idclient = ?";
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

client.create = function(data, callback) {
    if(database) {
        var sql = "INSERT INTO client(IDclient, NOMBRE, APELLIDO, NOMUSUARIO, CONTRA) VALUES(?, ?, ?, ?, ?);";
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
client.update = function(data, callback) {
  //si esxiste conexion
  if(database) {
      var sql = "UPDATE client SET NOMBRE = ?, APELLIDO = ?, NOMUSUARIO = ?, CONTRA = ? WHERE idclient = ?;";
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
client.delete = function(IDclient, callback){
  if(database){
    var query="DELETE FROM client WHERE idclient = ?";
              database.query(query, IDclient,
                function(error, resultado){
                  if(error){
                    throw error;
                  }else{
                    callback(null, resultado);
                  }
    });
  }
}

module.exports = client;