var database = require('../mysql/mysql');
var proveedor = {};

//GET ALL
proveedor.getAll = function(callback) {
  if(database) {
    database.query('SELECT * FROM proveedor', function(error, resultados) {
      if(error) throw error;
      callback(resultados);
    });
  }
}

//GET SINGLE
proveedor.getSingle = function(idCategory, callback) {
  if(database) {
    var sql = "SELECT * FROM proveedor WHERE idproveedor = ?";
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

//METODO PARA AGREGAR proveedorISTRADOR

//UNA VEZ CREDO EL CONTROLADOR DE AGREGAR ENTONCES LO PONES EN LA RUTA
proveedor.create = function(data, callback) {
    //si esxiste conexion
    if(database) {
        var sql = "INSERT INTO proveedor(IDproveedor, NOMBRE, APELLIDO, NOMUSUARIO, CONTRA) VALUES(?, ?, ?, ?, ?);";
        //con estos datos tenes que mandarlos si no no funcinoa
        database.query(sql, [data.id, data.nombre, data.direccion, data.telefono],
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
proveedor.update = function(data, callback) {
  //si esxiste conexion
  if(database) {
      var sql = "UPDATE proveedor SET NOMBRE = ?, APELLIDO = ?, NOMUSUARIO = ?, CONTRA = ? WHERE idproveedor = ?;";
      //con estos datos tenes que mandarlos si no no funcinoa
      database.query(sql, [data.nombre, data.direccion, data.telefono, data.id],
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
proveedor.delete = function(IDproveedor, callback){
  if(database){
    var query="DELETE FROM proveedor WHERE idproveedor = ?";
              database.query(query, IDproveedor,
                function(error, resultado){
                  if(error){
                    throw error;
                  }else{
                    callback(null, resultado);
                  }
    });
  }
}

module.exports = proveedor;