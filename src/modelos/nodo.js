// modelos/nodo.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const nodoSchema = new Schema({
   id: {
	type: String,
	required: true,
	unique: true
   },
   location: {
	type: String,
	required: true
   },
   state: {
	type: String,
	required: true
   },
});

module.exports = mongoose.model('Node', nodoSchema);
