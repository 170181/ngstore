var express = require('express');
var router = express.Router();
var Cliente = require("../models/Cliente");

/* Salvar cliente. */
router.post('/clientes', function(req, res) {
    var cliente = new Cliente(req.json);
    cliente.save(function(err, obj) {
        if(err) res.send(404);
        res.send(200);
    });
});

/* Listar clientes. */
router.get('/clientes', function(req, res) {
    Cliente.listAll(function(err, list) {
        if(err) {
            res.send(404);
            return;
        }
        
        res.json(list);
    });
});

module.exports = router;

