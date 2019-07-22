const util = require('./util');
const db = require('./db');

function getCompra(req,res) {
    let producto=req.params.producto;
    console.log(producto);
    let objprod={
        nombre: producto,
        precio: 1200,
        foto: 'https://c.pxhere.com/photos/90/8a/fashion_woman_clothing_female_standing_beauty_beautiful_caucasian-527819.jpg!d'
    }
    db.saveDB(objprod)
    .then( prod => res.send(prod))
    .catch( err => res.send({data: err}))
}

function getProd(req, res) {
    db.readDB()
    .then( prods => {
        res.send({data: prods})
        console.log(prods)
        }
    )

    .catch( err => res.send({data: err}))
}

function postProd(req, res) {
    let producto = req.body;
    console.log(producto);

    db.saveDB(producto)
    .then( prods => res.send(producto))
    .catch( err => res.send({data: err}))
}

function deleteProd(req, res) {
    let id = req.params.id;
    console.log(id);

    db.deleteDB(id)
    .then( prods => res.send({data: id}))
    .catch( err => res.send({data: err}))
}

function putProd(req, res) {

    let id = req.params.id;
    let producto = req.body;
    console.log('put', id, producto);

    db.updateDB(producto, id)
    .then( prod => res.send({data: prod}))
    .catch( err => res.send({data: err}))
}

function notFound(req,res) {
    res.send({respuesta: 'Pagina no encontrada'});
}

module.exports = {
    getProd,
    postProd   ,
    deleteProd ,
    putProd,
    notFound,
    getCompra
}
