const {
    response
} = require('express');

const usuariosGet = (req = request, res = response) => {

    const query = req.query;
    res.json({
        msg: 'put API - controlador',
        query
    });
};


const usuariosPost = (req, res = response) => {

    const {nombre, edad} = req.body;

    res.json({
        msg: 'post API - controlador',
        nombre,
        edad
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