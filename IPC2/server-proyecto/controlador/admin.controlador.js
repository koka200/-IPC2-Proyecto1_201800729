var database = require('../mysql/mysql');
var admin = {};

//GET ALL
admin.getAll = function(callback) {
  if(database) {
    database.query('SELECT * FROM admins', function(error, resultados) {
      if(error) throw error;
      callback(resultados);
    });
  }
}

//GET SINGLE
admin.getSingle = function(idCategory, callback) {
  if(database) {
    var sql = "SELECT * FROM admins WHERE idadmin = ?";
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

//METODO PARA AGREGAR ADMINISTRADOR

//UNA VEZ CREDO EL CONTROLADOR DE AGREGAR ENTONCES LO PONES EN LA RUTA
admin.create = function(data, callback) {
    //si esxiste conexion
    if(database) {
        var sql = "INSERT INTO admins(IDADMIN, NOMBRE, APELLIDO, NOMUSUARIO, CONTRA) VALUES(?, ?, ?, ?, ?);";
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
admin.update = function(data, callback) {
  //si esxiste conexion
  if(database) {
      var sql = "UPDATE admins SET NOMBRE = ?, APELLIDO = ?, NOMUSUARIO = ?, CONTRA = ? WHERE idadmin = ?;";
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
admin.delete = function(IDADMIN, callback){
  if(database){
    var query="DELETE FROM admins WHERE idadmin = ?";
              database.query(query, IDADMIN,
                function(error, resultado){
                  if(error){
                    throw error;
                  }else{
                    callback(null, resultado);
                  }
    });
  }
}

module.exports = admin;