//const mysql = require('mysql2');
/*const conexion = mysql.createConnection({
    host     : 'localhost',
    user     : 'nperez',
    password : 'nPerez32$',
    database : 'nperez'  
});*/


const {
  createPool
 } = require('mysql2');

 const pool = createPool({
  host: "localhost",
  user: "coropeza",
  password: "cOropeza32$",
  database: "coropeza",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

/*pool.connect((error)=>{
    if (error) {
      console.error('El error de conexión es: ' + error);
      return;
    }
    console.log('¡Conectado a la Base de Datos!');
  });*/
module.exports = pool;