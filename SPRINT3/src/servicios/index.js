// servicios/index.js

const jwt = require('jwt-simple');
const moment = require('moment');
const config = require('../config/config');

exports.createToken = function(admin){
	const payload = {
		sub: admin._id,
		iat: moment().unix(),
		exp: moment().add(10, 'days').unix(),	// 10 días de duración
	};
	return jwt.encode(payload, config.SECRET_TOKEN);
}
