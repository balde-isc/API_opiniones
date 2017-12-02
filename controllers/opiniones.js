'use strict'
var bcrypt = require('bcrypt-nodejs')
var Opinion = require('../models/opniones');

function pruebas(req, res) {
  res.status(200).send({
    message: 'probando el api rest del usuario con node y mongo'
  });
}

function GuardandoOpiniones(req, res) {
  var usuario = new Usuario();
  var parametro = req.body;

  console.log(parametro);
  usuario.nombre = parametro.nombre;
  usuario.apellido = parametro.apellido;
  usuario.email = parametro.email;
  usuario.role = 'Role_Admin';
  usuario.imagen = 'null';

    //Encriptar contraseña y guardar datos
      if (usuario.nombre != null && usuario.apellido != null && usuario.email != null) {
        usuario.save((err, userStored) => {
          if (err) {
            res.status(500).send({
              message: 'Error al guardar el usuario'
            });
          } else {
            if (!userStored) {
              res.status(404).send({
                message: 'No se ha registrado nada'
              });
            } else {
              res.status(500).send({
                usuario: userStored
              });
            }
          }
        })
        //guardar el usuario
      } 
   

  } 
module.exports = {
  GuardandoOpiniones
};
