// modelos/pasajero.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pasajeroSchema = new Schema({
    id: {		// DNI
	type: String,
	required: true,
	unique: true
    },  	
    name: {
	type: String,
	required: true
    },
    email: {
	type: String,
	required: true,
	unique: true
    },
    birthdate: {
	type: Date,
	required: true,
    },
    phone: {
	type: String,
	required: true,
    },
    password: {
	type: String,
	required: true,
    },
    country: {
	type: String,
    },
    city: {
	type: String,
    },
    location: {		// Coordenadas
	type: String,
	required: true,
    },	
});

module.exports = mongoose.model('Passenger', pasajeroSchema);
