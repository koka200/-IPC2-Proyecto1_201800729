var database = require('../mysql/mysql');
var curso = {};

//Get All
curso.getAll= function(callback){
    if(database){
        database.query('SELECT * FROM curso', function(error, resultados){
            if(error) throw error;
            callback(resultados);
        });
    }
}

curso.getSingle = function(idCategory, callback){
    if(database){
        var sql = "SELECT * FROM curso WHERE idCurso = ?";
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

curso.create = function(data, callback){
    if(database){
        var sql = "INSERT INTO curso(nombre, codigo, estado) VALUES(?, ?, ?);";
        database.query(sql, [data.nombre, data.codigo, data.estado],
            function(error, resultado){
                if(error){
                    throw error;
                }else{
                    callback(resultado);
                }
            });
    }
}

curso.update = function(data, callback){
    if(database){
        var sql = "UPDATE curso SET nombre = ?, codigo=?, estado = ? WHERE idCurso= ?;";
        database.query(sql, [data.nombre, data.codigo, data.estado, data.id],
            function(error, resultado) {
                if(error){
                    throw error;
                }else{
                    callback(resultado);
                }
            });
        }
}

curso.delete = function(iDCurso, callback){
    if(database){
      var query="DELETE FROM curso WHERE idCurso = ?";
                database.query(query, iDCurso,
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
curso.login = function(data, callback) {
    if(database) {
      var sql = "SELECT * FROM curso WHERE correo = ? AND contrasena = ?";
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
  
module.exports = curso;