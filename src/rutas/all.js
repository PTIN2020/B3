// rutas/all.js 
// Todas las rutas irán aquí
const express = require('express');
const api = express.Router();

const auth = require('../middlewares/auth');

const adminCtrl = require('../controladores/admin');
const operadorCtrl = require('../controladores/all');
const vueloCtrl = require('../controladores/all');
const nodoCtrl = require('../controladores/all');
const pasajeroCtrl = require('../controladores/all');
const tiendaCtrl = require('../controladores/all');

// Administradores
api.get('/administrators', adminCtrl.indexAdmin);             		// Ver todos los admins (si los hay)
api.post('/administrators', adminCtrl.nuevoAdmin);            		// Añadir un nuevo administrador
api.get('/administrators/:adminId', adminCtrl.obtenerAdmin);     		// Ver un admin en concreto por su ID
//api.put('/administrators/:adminId', auth, adminCtrl.reemplazarAdmin);  		// Actualizar un administrador en concreto por su ID
api.delete('/administrators/:adminId', adminCtrl.eliminarAdmin); 		// Eliminar un admin por su ID
api.post('/login', adminCtrl.login);

api.get('/private', auth, function(req,res){
	res.status(200).json('Prueba: Acceso concedido a zona privada');
})

// Inicio
api.get('/', function(req,res) {
	res.send('Página de inicio');
});

// Operadores
api.get('/operators', operadorCtrl.indexOperador);                        
api.post('/operators', operadorCtrl.nuevoOperador);                       
api.get('/operators/:opId', operadorCtrl.obtenerOperador);    
 
// Vuelos
api.get('/flights', vueloCtrl.indexVuelo);                        
api.post('/flights', vueloCtrl.nuevoVuelo);                       
api.get('/flights/:IdVuelo', vueloCtrl.obtenerVuelo);              
api.delete('/flights/:IdVuelo', vueloCtrl.eliminarVuelo);                 	

// Nodos (Coches)
api.get('/nodes', nodoCtrl.indexNodo);                        
api.post('/nodes', nodoCtrl.nuevoNodo);                      
api.get('/nodes/:IdNode', nodoCtrl.obtenerNodo);              
api.delete('/nodes/:IdNode', nodoCtrl.eliminarNodo);   

// Pasajeros
api.get('/passengers', pasajeroCtrl.indexPasajero);                      
api.post('/passengers', pasajeroCtrl.nuevoPasajero);                       
api.get('/passengers/:passId', pasajeroCtrl.obtenerPasajero);	

// Tiendas
api.get('/shops', tiendaCtrl.indexTienda);                        
api.post('/shops', tiendaCtrl.nuevaTienda);                      
api.get('/shops/:IdShop', tiendaCtrl.obtenerTienda);              
api.delete('/shops/:IdShop', tiendaCtrl.eliminarTienda);  	

module.exports = api; 
