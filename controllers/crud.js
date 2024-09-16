//Invocamos a la conexion de la DB
const conexion = require('../database/db');
//GUARDAR un REGISTRO
exports.save = (req, res)=>{
    const user = req.body.user;
    const rol = req.body.rol;
    console.log('guardado');
    conexion.query('INSERT INTO Usuario SET ?',{User:user, Rol:rol}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            console.log(results);   
            res.redirect('/');         
        }
});
};
//ACTUALIZAR un REGISTRO
exports.update = (req, res)=>{
    const id = req.body.id;
    const user = req.body.user;
    const rol = req.body.rol;
    conexion.query('UPDATE Usuario SET ? WHERE id = ?',[{User:user, Rol:rol}, id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/');         
        }
});
};