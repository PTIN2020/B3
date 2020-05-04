// modelos/tienda.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const promoSchema = new Schema({
   offer: {
	type: String
   }
});

const tiendaSchema = new Schema({
   id: {
	type: String,
	required: true,
	unique: true
   },
   name: {
	type: String,
	required: true
   },
   product_name: {
	type: String,
	required: true
   },
   location: {
	type: String,
	required: true
   },
   type: {
	type: String,
	required: true
   },
   promotions: [promoSchema]
});

module.exports = mongoose.model('Shop', tiendaSchema);
