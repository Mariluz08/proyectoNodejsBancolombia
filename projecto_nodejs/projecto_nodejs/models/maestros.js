'use stric'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MaestrosSchema = Schema({
    n_lista: { type: Number, require: true, unique: true },
    nombre: { type: String, require: true },
    edad: { type: Number, require: true },
    genero: { type: String, require: true },
});

module.exports = mongoose.model('maestros', MaestrosSchema);