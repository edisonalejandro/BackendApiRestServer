const { response } = require('express');
const bcryptjs = require('bcryptjs');

const Usuario = require('../models/usuario');


const usuariosGet = (req = request, res = response) => {

    const query = req.query;
    res.json({
        msg: 'put API - controlador',
        query
    });
};


const usuariosPost = async(req, res = response) => {

    const { nombre, correo, password, rol} = req.body;
    const usuario = new Usuario( { nombre, correo, password, rol} );

    // Verificar si el correo existe

    // Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync( password, salt );
    
    // Guardar en base de datos

    await usuario.save();

    res.json({
        msg: 'post API - controlador',
        usuario
    });
};

const usuariosPut = (req, res = response) => {

    const {id} = req.params;
    res.json({
        msg: 'put API - controlador',
        id
    });
};



const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'Delete API - controlador'
    });
};


const usuariosPatch = ( req, res = response ) => {
    res.json({
        msg: 'patch API - controlador'
    });
  }; 

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosDelete,
    usuariosPatch,
    usuariosPut
}