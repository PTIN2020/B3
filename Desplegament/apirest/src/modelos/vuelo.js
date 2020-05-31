// modelos/vuelo.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.plugin(schema => { schema.options.usePushEach = true });

const boardingSchema = new Schema({
   id_hash: {
	type: String,
	default: ' '
   },
   seat: {
	type: String,
	default: ' '
   },
   id_passenger: {
	type: String,
	default: ' '
   }
});

const vueloSchema = new Schema({
    name: {
	type: String,
	required: true,
	unique: true
    },
    airline: {				// CAMBIO SPRINT5
	type: String,
	required: true,
    },
//    type: {
//	type: String,
//	required: true,
//	enum: ['Salida', 'Llegada']	// CAMBIO SPRINT5
  //  },
    from: {
	type: String,
	required: true
    },
    to: {
	type: String,
	required: true,
    },
    boarding_time: {
	type: String,
        required: true
    },
    departure_time: {
	type: String,
	required: true
    },
    arrival_time: {
	type: String,
        required: true
    },
    date: {
	type: Date,
	required: true
    },
    gate: {
	name: {
		type: String,
		required: true
	},
	location_x: {			
		type: Number,
		required: true
	},
	location_y: {			
		type: Number,
		required: true
	}
    },
    boarding_pass: [boardingSchema],				// CAMBIO SPRINT5
    state: {				
	type: String,
	enum: ['En hora', 'Cancelado', 'Con retraso'],		// CAMBIO SPRINT5
	default: 'En hora'
    }
});

module.exports = mongoose.model('Flight', vueloSchema);
