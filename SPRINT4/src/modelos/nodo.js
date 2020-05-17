// modelos/nodo.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const nodoSchema = new Schema({
   id: {
	type: String,
	required: true,
	unique: true
   },
   location_x: {
	type: Number,
	required: true
   },
   location_y: {
	type: Number,
	required: true
   },
   state: {
	type: Number,		// CAMBIO. 0: En reparación/No funciona. 1: Disponible. 2: Ocupado. 3: Cargando
	required: true
   },
   destination: {
	type: Number,
	required: true
   }
});

module.exports = mongoose.model('Node', nodoSchema);
