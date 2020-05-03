// middlewares/auth.js

const servicios = require('../servicios/index');
const jwt = require('jwt-simple');
const moment = require('moment');
const config = require('../config/config');

function isAuth (req, res, next) {
	if (!req.headers.authorization) {
		return res.status(403).json('Mensaje sin cabecera de autenticación');
	}
	// Token
	const token = req.headers.authorization.split(' ')[1];

	const payload = jwt.decode(token, config.SECRET_TOKEN);

	// Pendiente rematar esta parte	
	if (payload.exp <= moment().unix()) {
		return res.status(500).json('Token expirado');
	}
	if (!token) return res.status(500).json('Token no valido');
	
	req.admin = payload.sub;
	next();
	
}

module.exports = isAuth;
