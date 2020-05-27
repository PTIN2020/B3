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
	type: Number,
	enum: [0, 1, 2, 3],		// 0: En reparación/No funciona. 1: Disponible. 2: Ocupado. 3: Cargando
	default: 1			// Por defecto disponible
   },
   destination: {
	type: Number,
	required: true
   }
});

module.exports = mongoose.model('Node', nodoSchema);
