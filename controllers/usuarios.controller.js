const { response } = require('express');

const usuariosGet = (req, res = response) => {

    const {q, nombre, apellido} = req.query;

    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apellido
    })
}

const usuariosPost = (req, res = response) => {
    const body = req.body;

    res.status(201).json({
        msg: 'post API - controlador',
        body: body
    })
}

const usuariosPut = (req, res = response) => {

    const id = req.params.id;

    res.json({
        msg: 'put API - controlador',
        id
    })
}

const usuariosDelete = (req, rres = responsees) => {
    res.json({
        msg: 'delete API - controlador'
    })
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}