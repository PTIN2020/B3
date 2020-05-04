// controladores/all.js
const mongoose = require('mongoose');
mongoose.plugin(schema => { schema.options.usePushEach = true });

// Métodos utilizables dentro de las rutas

const Operator = require('../modelos/operador');      // Constructor Operador
const Passenger = require('../modelos/pasajero');      // Constructor Pasajero
const Flight = require('../modelos/vuelo');            // Constructor Vuelo
const Shop = require('../modelos/tienda');          // Constructor Tienda
const Node = require('../modelos/nodo');              // Constructor Nodo


module.exports = {
	// Métodos de operadores
        indexOperador: async (req,res,next) => {                 // (GET)Módulo index: Controla las rutas iniciales de operadores de la API
            const operador = await Operator.find({});
            res.status(200).json(operador);
        },
        nuevoOperador: async (req,res,next) => {                 // (POST) Módulo NuevoOperador: Añade un operador a la base de datos
            const nuevoOperador = new Operator(req.body);
            const {id, name, email, birthdate, phone, password, aerolinea} = req.body;
            if (id && name && email && birthdate && phone && password && aerolinea){
                const operador = await nuevoOperador.save();
                res.status(200).json(operador);
            }
            else {
                res.status(500).json({error: 'Error: Operador mal introducido, revise los campos'});
            }
        },
        obtenerOperador: async (req,res,next) => {               // (GET) Módulo ObtenerOperador: Muestra un operador de la base de datos filtrando por su ID
            const { opId } = req.params;
            const operador = await Operator.findById(opId);
            res.status(200).json(operador);
        },

        // Métodos de pasajeros
        indexPasajero: async (req,res,next) => {                 // (GET) Módulo index: Controla las rutas iniciales de pasajeros de la API
            const pasajero = await Passenger.find({});
            res.status(200).json(pasajero);
        },
        nuevoPasajero: async (req,res,next) => {                 // (POST) Módulo NuevoPasajero: Añade un pasajero a la base de datos
            const nuevoPasajero = new Passenger(req.body);
            const {id, name, email, birthdate, phone, password, country, city, location} = req.body;
            if (id && name && email && birthdate && phone && password && country && city && location){
                const pasajero = await nuevoPasajero.save();
	    	res.status(200).json(pasajero);
            }
            else {
                res.status(500).json({error: 'Error: Pasajero mal introducido, revise los campos'});
            }
        },    
        obtenerPasajero: async (req,res,next) => {               // (GET) Módulo ObtenerPsajero: Muestra un pasajero de la base de datos filtrando por su ID
            const { passId } = req.params;
            const pasajero = await Passenger.findById(passId);
            res.status(200).json(pasajero);
        },

        // Métodos de vuelos
        indexVuelo: async (req,res,next) => {                   // (GET) Modulo index: Controla las rutas iniciales de vuelos de la API
            const vuelo = await Flight.find({});
            res.status(200).json(vuelo);
        },
        nuevoVuelo: async (req,res,next) => {                   // (POST) Módulo NuevoVuelo: Añade un vuelo a la base de datos
            const nuevoVuelo = new Flight(req.body);
            const {name, from, to, boarding_time, departure_time, arrival_time, seat, date, gate, passengers} = req.body;	// A REVISAR: Ahora mismo añade desde POSTMAN 
            if (name && from && to && boarding_time && departure_time && arrival_time && seat && date && gate && passengers){
                const vuelo = await nuevoVuelo.save();
                res.json(vuelo);
            }
            else {
                res.status(500).json({error: 'Error: Vuelo mal introducido'});
            }
        },
        obtenerVuelo: async (req,res,next) => {                 // (GET) Módulo ObtenerVuelo: Muestra un vuelo de la base de datos filtrando por su ID
            const { IdVuelo } = req.params;
            const vuelo = await Flight.findById(IdVuelo);
            res.status(200).json(vuelo);
        },
        eliminarVuelo: async (req,res,next) => {                // (DELETE) Módulo EliminarVuelo: Elimina un vuelo filtrando por su ID
            const { IdVuelo } = req.params;
            await Flight.findByIdAndRemove(IdVuelo);
            res.status(200).json('Vuelo eliminado de la base de datos');
        },
	
	// Métodos de tiendas
        indexTienda: async (req,res,next) => {                   // (GET) Modulo index: Controla las rutas iniciales de tiendas de la API
            const tienda = await Shop.find({});
            res.status(200).json(tienda);
        },
        nuevaTienda: async (req,res,next) => {                   // (POST) Módulo NuevaTienda: Añade una tienda a la base de datos
            const nuevaTienda = new Shop(req.body);
            const {id, name, product_name, location, type, promotions} = req.body;

            if (id && name && product_name && location && type && promotions){
                const tienda = await nuevaTienda.save();
                res.json(tienda);
            }
            else {
                res.status(500).json({error: 'Error: Tienda mal introducida'});
            }
        },
        obtenerTienda: async (req,res,next) => {                 // (GET) Módulo ObtenerTienda: Muestra una tienda de la base de datos filtrando por su ID
            const { IdShop } = req.params;
            const tienda = await Shop.findById(IdShop);
            res.status(200).json(tienda);
        },
        eliminarTienda: async (req,res,next) => {                // (DELETE) Módulo EliminarTienda: Elimina una tienda filtrando por su ID
            const { IdShop } = req.params;
            await Shop.findByIdAndRemove(IdShop);
            res.status(200).json('Tienda eliminada de la base de datos');
        },

	// Métodos de nodos
	indexNodo: async (req,res,next) => {                   	  // (GET) Modulo index: Controla las rutas iniciales de nodos de la API
            const nodo = await Node.find({});
            res.status(200).json(nodo);
        },
        nuevoNodo: async (req,res,next) => {                   // (POST) Módulo NuevoNodo: Añade un nodo a la base de datos
            const nuevoNodo = new Node(req.body);
            const {id, location, state} = req.body;
            if (id && location && state){
                const nodo = await nuevoNodo.save();
                res.json(nodo);
            }
            else {
                res.status(500).json({error: 'Error: Nodo mal introducido'});
            }
        },
        obtenerNodo: async (req,res,next) => {                 // (GET) Módulo ObtenerNodo: Muestra un nodo de la base de datos filtrando por su ID
            const { IdNode } = req.params;
            const nodo = await Node.findById(IdNode);
            res.status(200).json(nodo);
        },
        eliminarNodo: async (req,res,next) => {                // (DELETE) Módulo EliminarTienda: Elimina una tienda filtrando por su ID
            const { IdNode } = req.params;
            await Node.findByIdAndRemove(IdNode);
            res.status(200).json('Nodo eliminado de la base de datos');
        },
};
