'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OpinionSchema = Schema({
    opinion: String,
    motivo: String,
    email: {
        latitude: Number,
        longitude: Number
    }
});

module.exports = mongoose.model('opiniones', OpinionSchema);
