'use strict'
var bcrypt = require('bcrypt-nodejs')
var Opinion = require('../models/opniones');

function pruebas(req, res) {
  res.status(200).send({
    message: 'probando el api rest del usuario con node y mongo'
  });
}

function GuardandoOpiniones(req, res) {
  var opinion = new Opinion();
  var parametro = req.body;

  console.log(parametro);
  opinion.opinion = parametro.opinion;
  opinion.motivo = parametro.motivo;
  opinion.locacion = parametro.locacion;
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
                opinion: userStored
              });
            }
          }
        })
        //guardar el usuario
      
   

  } 
module.exports = {
  GuardandoOpiniones
};
