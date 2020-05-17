// middlewares/auth.js

const servicios = require('../servicios/index');
const jwt = require('jsonwebtoken')
const config = require('../config/config')
const moment = require('moment')

async function isAuth (req, res, next) {
    const token = req.headers['miclavesecreta']
    if (!token) {
        return res.status(403).json({Error:"Mensaje sin cabecera de autenticación"});
    }
    else {
	// Payload
        const payload = jwt.decode(token, config.SECRET_TOKEN);
        jwt.verify(token, config.SECRET_TOKEN, (err, admin) => {
            if (payload.exp <= moment().unix()) {
                return res.status(500).json({Error: "Token expirado"});
            }
            if (err) {
                return res.status(401).json({Error: "Token no valido"});
            }
            else {
                if (payload.sub != "Jefe"){
                    res.status(404).json({
                        message: "No eres el jefe del aeropuerto"
                    })
                }
                else{
                    res.status(200).json({
                        message: "Eres el jefe del aeropuerto"
                    })
                }
            }
            });
        }
}

module.exports = isAuth;
