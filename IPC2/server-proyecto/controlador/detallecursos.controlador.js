var database = require('../mysql/mysql');
var detallecurso = {};

//Get All
detallecurso.getAll= function(callback){
    if(database){
        database.query('SELECT * FROM detallecurso', function(error, resultados){
            if(error) throw error;
            callback(resultados);
        });
    }
}

detallecurso.getSingle = function(idCategory, callback){
    if(database){
        var sql = "SELECT * FROM detallecurso WHERE idDetalleCurso = ?";
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

detallecurso.create = function(data, callback){
    if(database){
        var sql = "INSERT INTO detallecurso(semestre, anio, horaInicio, horaFin, idCurso, idSeccion) VALUES(?, ?, ?, ?, ?, ?);";
        database.query(sql, [data.semestre, data.anio, data.horaInicio, data.horaFin, data.idCurso, idSeccion],
            function(error, resultado){
                if(error){
                    throw error;
                }else{
                    callback(resultado);
                }
            });
    }
}

detallecurso.update = function(data, callback){
    if(database){
        var sql = "UPDATE detallecurso SET semestre = ?, anio=?, horaInicio = ?, horaFin = ?, idCurso = ?, idSeccion = ? WHERE idDetalleCurso= ?;";
        database.query(sql, [data.semestre, data.anio, data.horaInicio, data.horaFin, data.idCurso, idSeccion],
            function(error, resultado) {
                if(error){
                    throw error;
                }else{
                    callback(resultado);
                }
            });
        }
}

detallecurso.delete = function(IDdetallecurso, callback){
    if(database){
      var query="DELETE FROM detallecurso WHERE idDetalleCurso = ?";
                database.query(query, IDdetallecurso,
                  function(error, resultado){
                    if(error){
                      throw error;
                    }else{
                      callback(null, resultado);
                    }
      });
    }
}

module.exports = detallecurso;