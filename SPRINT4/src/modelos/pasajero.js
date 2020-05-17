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
    location_x: {		// CAMBIO
	type: Number,
	required: true,
    },
    location_y: {		// CAMBIO
	type: Number,
	required: true,
    },
    url_image: {		// CAMBIO
	type: String
    },
    type_user: {
	type: Number,
	required: true		// CAMBIO: Indica el tipo de usuario. 0: Usuario corriente. 1: Usuario Oro. 2. Usuario Platino. 3. Usuario Trabajador
    },
    notices: {				// CAMBIO
	id: {
		type: String,
		required: true
	},
	notification: {			// CAMBIO
		type: String,
		required: true
	},
	date: {				// CAMBIO
		type: Date,
		required: true
	}
   }
});

module.exports = mongoose.model('Passenger', pasajeroSchema);
