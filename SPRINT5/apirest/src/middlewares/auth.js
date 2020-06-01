// middlewares/auth.js

const servicios = require('../servicios/index');
const jwt = require('jsonwebtoken')
const config = require('../config/config')
const moment = require('moment')

const bodyParser = require('body-parser');			
const express = require('express');
const app = express();
app.use(bodyParser.json());					
	
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
                return res.status(500)
            }
            if (err) {
                return res.status(401)
            }
            else {
                if (payload.sub != "Jefe"){
                    if (payload.sub == "Controlador vuelos"){
                        res.status(404).json({job: "Controlador vuelos"})
                    }
                    else {
                        res.status(404).json({job: "Controlador coches"})
                    }
                }
		else {
			res.status(200).json({job: "eres el jefe"})
		}
            }
            next();
            });
        }
}

module.exports = isAuth;
