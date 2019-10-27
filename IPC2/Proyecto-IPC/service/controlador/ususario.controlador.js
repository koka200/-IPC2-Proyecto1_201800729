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
//donde tenes tu servidor??:(no se man
//jajja que hiciste??
//ese servicios no sireve esta de mas el correcto es el que dice service
// chavo pero cuando creaste el proyecto tenia 
//que ser igual que el anterior
//primero creas un servidor con express 
//despues estos controladores van en controlador del servidor
//y el front es por aparte
//dejame shutear
//get uno este es el bueno va?sivivo
usuario.getSingle = function(idCategory, callback){
    if(database){
        var sql = "SELECT * FROM usuario WHEN idUsuario = ?";
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
        var sql = "UPDATE usuario SET nombre = ?, correo=?, contrasena=? WHERE idUsuario= ?;";
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
  
  module.exports = usuario;