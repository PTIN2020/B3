// controladores/admin.js
const mongoose = require('mongoose');
mongoose.plugin(schema => { schema.options.usePushEach = true });

const Administrator = require('../modelos/admin');
const bcrypt = require('bcryptjs');          
const servicio = require('../servicios');
const config = require('../config/config.js')
const jwt = require('jsonwebtoken');


async function login (req,res) {
    const id = req.body.id;
    const password = req.body.password;
    await Administrator.findOne({id, password})
      .then(admin => {
        if (!admin) return res.status(401).json({Error: "Usuario o contraseña incorrectas"})            // Usuario incorrecto
        else {
            //bcrypt.compare(password, admin.password, (err, data) => {
               // if (data) {
                    return res.status(200).json({
                        message: 'Login correcto',
                        token: servicio.createToken(admin)
                    })
              //  } else {
                    return res.status(401).json({Error: "Usuario o contraseña incorrectas"})        	// Contraseña incorrecta
               // }
            //});
        }
    })
}

module.exports = {
	login,
        indexAdmin: async (req,res,next) => {    		// (GET) Módulo index: Controla las rutas iniciales de administradores de la API
            const admin = await Administrator.find({});
            res.status(200).json(admin);			
        },
        nuevoAdmin: async (req,res,next) => {             // (POST) Módulo NuevoAdmin: Añade un administrador a la base de datos

		const nuevoAdmin = new Administrator(req.body);
		const {id, name, email, password, job} = req.body;
	
            	if (id && name && email && password && job){
                	try {
			const admin = await nuevoAdmin.save();
	           	     res.status(200).json({message: 'Registro correcto'});
	       		} catch (err) {
				return res.status(500).json({error: 'Administrador mal introducido, revise los campos'});	
			}
           	 }
	    	else {
                	res.status(500).json({error: 'Faltan datos obligatorios por introducir'});
            	}
        },
        obtenerAdmin: async (req,res,next) => {               // (GET) Módulo ObtenerAdmin: Muestra un administrador de la base de datos filtrando por su ID
            const { adminId } = req.params;
            const admin = await Administrator.findById(adminId);
            res.status(200).json(admin);
        },
        reemplazarAdmin: async (req,res,next) => {            // (POST) Módulo ReemplazarAdmin: Actualiza los datos de un admin de la base de datos
            const { adminId } = req.params;
            const nuevoAdmin = req.body;
            const antiguoAdmin = await Administrator.findByIdAndUpdate(adminId, nuevoAdmin);
	        res.status(200).json('Administrador modificado en la base de datos');
        },
        eliminarAdmin: async (req,res,next) => {       // (DELETE) Módulo EliminarAdmin: Elimina un administrador de la base de datos
            const {id, name, job} = req.body;
            if(job == "Jefe"){
                return res.status(500).json({Error: "No puedes eliminarte a ti mismo"})
            }
            await Administrator.findOneAndRemove({id: id, name: name, job: job}, function(err, admin) {
                if (err) return res.status(500).send({ message: err });
                if (!admin) return res.status(404).json({Error: 'El administrador introducido no existe'});
                else res.status(200).json('Administrador eliminado de la base de datos');
            });
        },
}
