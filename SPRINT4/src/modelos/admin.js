// modelos/admin.js
const mongoose = require('mongoose');
mongoose.plugin(schema => { schema.options.usePushEach = true });
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
const crypto = require('cryptojs');
const moment = require('moment');

const adminSchema = new Schema({
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
    password: {		
	type: String,
	required: true,
	select: false		// Contraseña oculta desde cliente web
    },
    job: {
	type: String,
	required: true
    }
});

const Administrator = module.exports = mongoose.model('Administrator', adminSchema);

/*
// Hash password
Administrator.generateHash = function(password){
	return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};

// Verificar si la password es valida
Administrator.prototype.validPassword = function(password){
	return bcrypt.compareSync(password, this.localPassword);
};*/
