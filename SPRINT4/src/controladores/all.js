// controladores/all.js
const mongoose = require('mongoose');
mongoose.plugin(schema => { schema.options.usePushEach = true });

// Métodos utilizables dentro de las rutas

const Operator = require('../modelos/operador');      	// Constructor Operador
const Passenger = require('../modelos/pasajero');      	// Constructor Pasajero
const Flight = require('../modelos/vuelo');            	// Constructor Vuelo
const Shop = require('../modelos/tienda');          	// Constructor Tienda
const Node = require('../modelos/nodo');              	// Constructor Nodo
const Stop = require('../modelos/stop');		// Constructor Stop
const Boarding = require('../modelos/boarding_passes');	// Constructor Boarding_passes

module.exports = {
	// Métodos de operadores
        indexOperador: async (req,res,next) => {                 // (GET)Módulo index: Controla las rutas iniciales de operadores de la API
            const operador = await Operator.find({});
            res.status(200).json(operador);
        },
        nuevoOperador: async (req,res,next) => {                 // (POST) Módulo NuevoOperador: Añade un operador a la base de datos
            const nuevoOperador = new Operator(req.body);
            const {id, name, email, birthdate, phone, password, airline} = req.body;
            if (id && name && email && birthdate && phone && password && airline){
                const operador = await nuevoOperador.save();
                res.status(200).json({message: 'Registro correcto'});
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
            const {id, name, email, birthdate, phone, password, country, city, location_x, location_y, url_image, type_user, notices} = req.body;
            if (id && name && email && birthdate && phone && password && country && city && location_x && location_y && url_image && type_user && notices){
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
            const {name, from, to, boarding_time, departure_time, arrival_time, seat, date, gate, state} = req.body;
            if (name && from && to && boarding_time && departure_time && arrival_time && seat && date && gate && state){	
		// CAMBIO: Añadido gate y state EN LA CONDICIÓN
                const vuelo = await nuevoVuelo.save();
                res.status(200).json(vuelo);
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
	reemplazarStateVuelo: async (req,res,next) => {            
            const { name } = req.body;
            const vuelo = req.body;
            const antiguoVuelo = await Flight.findOneAndUpdate({name}, vuelo);
	        res.status(200).json('Vuelo modificado en la base de datos');
        },	
        eliminarVuelo: async (req,res,next) => {                // (DELETE) Módulo EliminarVuelo: Elimina un vuelo filtrando por su ID
            const { name } = req.body;
            await Flight.findOneAndRemove({name: name}, function(err, vuelo) {
                if (err) return res.status(500).send({ message: err });
                if (!vuelo) return res.status(404).json({Error: 'Vuelo introducido no existe'});
            })
            res.status(200).json('Vuelo eliminado de la base de datos');
        },
	
	// Métodos de tiendas
        indexTienda: async (req,res,next) => {                   // (GET) Modulo index: Controla las rutas iniciales de tiendas de la API
            const tienda = await Shop.find({});
            res.status(200).json(tienda);
        },
        nuevaTienda: async (req,res,next) => {                   // (POST) Módulo NuevaTienda: Añade una tienda a la base de datos
            const nuevaTienda = new Shop(req.body);
            const {id, name, product_name, location_x, location_y, type, promotions} = req.body;

            if (id && name && product_name && location_x && location_y && type && promotions){
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
        nuevoNodo: async (req,res,next) => {              	// (POST) Módulo NuevoNodo: Añade un nodo a la base de datos
            if(req.body.state < 0 || req.body.state > 3){
                return res.status(500).json({Error: 'Nodo mal introducido'});
            }
            const nuevoNodo = new Node(req.body);
            const {id, location_x, location_y, state, destination} = req.body;
            if (id && location_x && location_y && state && destination){
                const nodo = await nuevoNodo.save();
                res.status(200).json(nodo);
            }
            else {
                res.status(500).json({Error: 'Nodo mal introducido'});
            }
        },
        obtenerNodo: async (req,res,next) => {                 // (GET) Módulo ObtenerNodo: Muestra un nodo de la base de datos filtrando por su ID
            const { IdNode } = req.params;
            const nodo = await Node.findById(IdNode);
            res.status(200).json(nodo);
        },
        reemplazarStateNodo: async (req,res,next) => {            // (POST) Módulo ReemplazarAdmin: Actualiza los datos de un admin de la base de datos
            console.log(req.body)
            const { id } = req.body;
            const nodo = req.body;
            const antiguoNodo = await Node.findOneAndUpdate({id}, nodo);
	        res.status(200).json('Nodo modificado en la base de datos');
        },
        eliminarNodo: async (req,res,next) => {                		// (DELETE) Módulo EliminarNodo: Elimina una nodo filtrando por su ID
            const { id } = req.body;
            await Node.findOneAndRemove({id: id}, function(err, nodo) {
                if (err) return res.status(500).send({ message: err });
                if (!nodo) return res.status(404).json({Error: 'Nodo introducido no existe'});
            })
            res.status(200).json('Nodo eliminado de la base de datos');
        },
	// Métodos de Stops
	indexStop: async (req,res,next) => {                   	  
        	const stop = await Stop.find({});
            	res.status(200).json(stop);
        },
	nuevoStop: async (req,res,next) => {                   
            const nuevoStop = new Stop(req.body);
            const {id, location_x, location_y} = req.body;
            if (id && location_x && location_y){	
                const stop = await nuevoStop.save();
                res.json(stop);
            }
            else {
                res.status(500).json({error: 'Error: Parada mal introducida'});
            }
        },
	// Métodos de Boarding_passes
	indexBoarding: async (req,res,next) => {                   	  
        	const boarding = await Boarding.find({});
            	res.status(200).json(boarding);
        },
	nuevaBoarding: async (req,res,next) => {                   
            const nuevaBoarding = new Boarding(req.body);
            const {id_hash, seat, id_passenger, flights} = req.body;
            if (id_hash && seat && id_passenger && flights){	
                const boarding = await nuevaBoarding.save();
                res.json(boarding);
            }
            else {
                res.status(500).json({error: 'Error: Tarjeta de embarque mal introducida'});
            }
        }
};
