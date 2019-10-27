var database = require('../mysql/mysql');
var usuario = {};

//Get All
usuario.getAll= function(callback){
    if(database){
        database.query('SELECT * FROM usuario', function(error, resultados){
            if(error) throw error;
            callback(resultados);
        });
    }
}

usuario.getSingle = function(idCategory, callback){
    if(database){
        var sql = "SELECT * FROM usuario WHERE idUsuario = ?";
        database.query(sql, idCategory, 
            function(error, resultado){
                if(error){
                    throw error;
                }else{
                    callback(resultado);
                }
            })
    }
}

usuario.create = function(data, callback){
    if(database){
        var sql = "INSERT INTO usuario(nombre, correo, contrasena, tipo) VALUES(?, ?, ?, ?);";
        database.query(sql, [data.nombre, data.correo, data.contrasena, data.tipo],
            function(error, resultado){
                if(error){
                    throw error;
                }else{
                    callback(resultado);
                }
            });
    }
}

usuario.update = function(data, callback){
    if(database){
        var sql = "UPDATE usuario SET nombre = ?, correo=?, contrasena = ?, tipo = ? WHERE idUsuario= ?;";
        database.query(sql, [data.nombre, data.correo, data.contrasena, data.tipo, data.id],
            function(error, resultado) {
                if(error){
                    throw error;
                }else{
                    callback(resultado);
                }
            });
        }
}

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

//LOGIN
usuario.login = function(data, callback) {
    if(database) {
      var sql = "SELECT * FROM usuario WHERE correo = ? AND contrasena = ?";
      database.query(sql, [data.correo, data.contrasena],
      function(error, resultado) {
        if(error) {
          throw error;
        } else {
          callback(resultado[0]);
        }
      });
    }
  }
  
module.exports = usuario;