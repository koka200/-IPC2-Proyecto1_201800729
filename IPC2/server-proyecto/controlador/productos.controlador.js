var database = require('../mysql/mysql');
var producto = {};

//GET ALL
producto.getAll = function(callback) {
  if(database) {
    database.query('SELECT * FROM producto', function(error, resultados) {
      if(error) throw error;
      callback(resultados);
    });
  }
}

//GET SINGLE
producto.getSingle = function(idCategory, callback) {
  if(database) {
    var sql = "SELECT * FROM producto WHERE idproduct = ?";
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

//METODO PARA AGREGAR productoISTRADOR

//UNA VEZ CREDO EL CONTROLADOR DE AGREGAR ENTONCES LO PONES EN LA RUTA
producto.create = function(data, callback) {
    //si esxiste conexion
    if(database) {
        var sql = "INSERT INTO producto(idproduct, NOMBRE, CANTDISPON, PRECIO, DESCRIP) VALUES(?, ?, ?, ?, ?);";
        //con estos datos tenes que mandarlos si no no funcinoa
        database.query(sql, [data.nombre, data.cantdipon, data.precio, data.contra, data.id],
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
producto.update = function(data, callback) {
  //si esxiste conexion
  if(database) {
      var sql = "UPDATE producto SET NOMBRE = ?, CANTDISPON = ?, PRECIO = ?, DESCRIP = ? WHERE idproduct = ?;";
      //con estos datos tenes que mandarlos si no no funcinoa
      database.query(sql, [data.nombre, data.cantdipon, data.precio, data.contra, data.id],
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
producto.delete = function(idproduct, callback){
  if(database){
    var query="DELETE FROM producto WHERE idproduct = ?";
              database.query(query, idproduct,
                function(error, resultado){
                  if(error){
                    throw error;
                  }else{
                    callback(null, resultado);
                  }
    });
  }
}

module.exports = producto;