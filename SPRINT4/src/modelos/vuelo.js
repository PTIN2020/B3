// modelos/vuelo.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.plugin(schema => { schema.options.usePushEach = true });

const passSchema = new Schema({
   id: {
	type: String
	//required: true,
	//unique: true
   },
   name: {
	type: String
	//required: true
   }
});

const vueloSchema = new Schema({
    name: {
	type: String,
	required: true,
	unique: true
    },
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
    seat: {
	type: String,
	required: true,
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
	location_x: {			// CAMBIO
		type: Number,
		required: true
	},
	location_y: {			// CAMBIO
		type: Number,
		required: true
	}
    },
    passengers: [passSchema],
    state: {				// CAMBIO Nuevo Atributo: Estado de vuelo
	type: String,
	required: true
    }
});

module.exports = mongoose.model('Flight', vueloSchema);
