// Módulos requeridos
const cors = require('cors');
const bodyParser = require('body-parser');			// Módulo que convierte los datos que llegan en JSON
const express = require('express');				// Framework de NODE, crea nuestra estructura del servidor
const morgan = require('morgan');				// Módulo que nos permite ver por consola los cambios en el servidor
const mongoose = require('mongoose');				// Módulo de MongoDB que nos provee de métodos y funcionalidades
const jwt = require('jwt-simple');				// Módulo JWT, autenticación por tokens
const config = require('./config/config');			// Fichero de configuración 
const path = require('path');
const app = express();
const io = require('socket.io');
const socket = require('./servicios/socket');

const routes = require('./rutas/all.js');			// Único fichero de rutas en uso.				

// Conexión a la BD
mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://db:27017/terminal2', {			// Conexión a BD REAL Docker
mongoose.connect('mongodb://db:27017/restapi-local', {			// Conexión a BD Docker B3
//mongoose.connect('mongodb://localhost/restapi-local', {		// Conexión a BD local B3
	useNewUrlParser: true,
	useUnifiedTopology: true
}).then(db => console.log('Base de datos MongoDB conectada\n_____________________________________________\n'))
	.catch(err => console.log(err));

// Middleware use
app.use(morgan('dev'));   
app.use(cors());  						// Permite ver por consola las peticiones HTTP que llegan al servidor
app.use(bodyParser.urlencoded({ extended: true }));		// Convierte las peticiones del cliente ...
app.use(bodyParser.json());					// ... y las pasa a formato JSON
		

// Configuración del servidor 
app.set('puerto', process.env.PORT || 3000);    		// Se escogerá un puerto definido o por defecto el puerto 3000

// Rutas  		
app.use('/api/', routes);

// Arranque del servidor
app.listen(app.set('puerto'), () => {
	console.log(`API Rest corriendo en el puerto ${app.get('puerto')}`);
	console.log('_____________________________________________\n');
});
