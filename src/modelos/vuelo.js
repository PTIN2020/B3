// modelos/vuelo.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const gateSchema = new Schema({
   name: {
	type: String
	//required: true,
	//unique: true
   },
   location: {
	type: String
	//required: true
   }
});

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
 	unique: true
    },
    date: {
	type: Date,
	default: () => moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),	// PDTE cambiar formato de hora
	required: true,
    },
    gate: [gateSchema],
    passengers: [passSchema]
});

module.exports = mongoose.model('Flight', vueloSchema);
