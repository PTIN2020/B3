// modelos/pasajero.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const promoSchema = new Schema({		// Promos de tiendas (liga la oferta del gusto al que se suscribe el pasajero con la tienda)
	offer: {
		type: String
	}
});

const noticeSchemaLikes = new Schema({		// Noticias de gustos
	name: {				
		type: String
	},
	promotions: [promoSchema]
});

const likeSchema = new Schema({
	typelike: {
		type: String,
		enum: ['Restauración', 'Ropa', 'Ocio', 'DutyFree', 'Otros']
	},
	newsletter: [noticeSchemaLikes]		
});


const noticeSchemaFlights = new Schema({	// Notificaciones de vuelos:
	id: {
		type: String,
		default: ' '
	},
	notification: {				// "Se ha abierto puerta de embarque" -> Saltará a la hora de embarque 
		type: String,			// "Tu vuelo se ha retrasado." -> Administrador lo cambia manualmente.								
		default: ' '
	},					// "La puerta de embarque se abre en 10 minutos." -> Saltará 10min antes de la hora de embarque.
	date: {				
		type: Date,
		default: () => Date.now()
	}
});

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
    location_x: {		
	type: Number,
	required: true,
    },
    location_y: {		
	type: Number,
	required: true,
    },
    url_image: {		
	type: String
    },
    type_user: {
	type: Number,
	enum: [0, 1, 2, 3],	// 0: Usuario corriente. 1: Usuario Oro. 2. Usuario Platino. 3. Usuario Trabajador
	default: 0		
    },
    likes: [likeSchema],
    notices: [noticeSchemaFlights]
});

module.exports = mongoose.model('Passenger', pasajeroSchema);
