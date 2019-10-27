var mysql = require('mysql');

//PARAMETROS DE LA CONEXION MYSQL
var parameters =  {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'proyecto'
}

var connection = mysql.createConnection(parameters);

module.exports = connection;
