var database = require('../mysql/mysql');
var usuario = {};

//LOGIN
usuario.login = function(data, callback) {
  if(database) {
    var sql = "SELECT * FROM usuario WHERE usuario = ? AND contra = ?";
    database.query(sql, [data.usuario, data.contra],
    function(error, resultado) {
      if(error) {
        throw error;
      } else {
        callback(resultado[0]);
      }
    });
  }
}

//GET ALL
usuario.getAll = function(callback) {
  if(database) {
    database.query('SELECT * FROM usuario', function(error, resultados) {
      if(error) throw error;
      callback(resultados);
    });
  }
}

//GET SINGLE
usuario.getSingle = function(idCategory, callback) {
  if(database) {
    var sql = "SELECT * FROM usuario WHERE idUsuario = ?";
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

//METODO PARA AGREGAR usuarioISTRADOR

//UNA VEZ CREDO EL CONTROLADOR DE AGREGAR ENTONCES LO PONES EN LA RUTA
usuario.create = function(data, callback) {
    //si esxiste conexion
    if(database) {
        var sql = "INSERT INTO Usuario(nombre, apellido, usuario, contra, tipo) VALUES(?, ?, ?, ?, ?);";
        //con estos datos tenes que mandarlos si no no funcinoa
        database.query(sql, [data.nombre, data.apellido, data.usuario, data.contra, data.tipo],
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
usuario.update = function(data, callback) {
  //si esxiste conexion
  if(database) {
      var sql = "UPDATE usuario SET NOMBRE = ?, APELLIDO = ?, NOMUSUARIO = ?, CONTRA = ? WHERE idusuario = ?;";
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
usuario.delete = function(IDusuario, callback){
  if(database){
    var query="DELETE FROM usuario WHERE idusuario = ?";
              database.query(query, IDusuario,
                function(error, resultado){
                  if(error){
                    throw error;
                  }else{
                    callback(null, resultado);
                  }
    });
  }
}

module.exports = usuario;