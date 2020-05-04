// Módulos requeridos
const bodyParser = require('body-parser');		// Módulo que convierte los datos que llegan en JSON
const express = require("express");				// Framework de NODE, crea nuestra estructura del servidor
const morgan = require("morgan");				// Módulo que nos permite ver por consola los cambios en el servidor
const mongoose = require('mongoose');			// Módulo de MongoDB que nos provee de métodos y funcionalidades

const app = express();

// Todas las rutas estan guardadas en los siguientes ficheros:
const usuarioRoutes = require('./rutas/users');			// Rutas de usuarios
const vueloRoutes = require('./rutas/vuelos');			// Rutas de vuelos
const pasajeroRoutes = require('./rutas/pasajeros');	// Rutas de pasajeros

// Conexión a la BBDD
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/rest-api-prueba', {	
	useNewUrlParser: true,
	useUnifiedTopology: true
}).then(db => console.log('Base de datos conectada'))
	.catch(err => console.log(err));


// Configuración servidor
app.set('puerto', process.env.PORT || 3000);    // Se escogerá un puerto definido o por defecto el puerto 3000
app.set('json spaces', 2);

// Middleware
app.use(morgan('dev'));     	// Permite ver por consola las peticiones HTTP que llegan al servidor
app.use(bodyParser.json());		// Permite al servidor recibir los datos en formato JSON

// Rutas
app.use('/users', usuarioRoutes);
app.use('/vuelos', vueloRoutes);
app.use('/pasajeros', pasajeroRoutes);
app.use('/api/users', require('./rutas/users')); 	// Nos permite filtrar desde /api/users (Convenio) o desde /users
app.use('/api/vuelos', require('./rutas/vuelos')); 	// Nos permite filtrar desde /api/vuelos (Convenio) o desde /vuelos
app.use('/api/pasajeros', require('./rutas/pasajeros')); 	// Nos permite filtrar desde /api/pasajeros (Convenio) o desde /pasajeros

// Arrancado del servidor
app.listen(app.set('puerto'), () => {
	console.log(`Servidor Express escuchando en el puerto ${app.get('puerto')}`);
});

