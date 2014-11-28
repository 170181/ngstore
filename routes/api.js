var express = require('express');
var router = express.Router();
var Cliente = require("../models/Cliente");

/* 
 * POST /api/clientes
 * Salvar cliente. 
 **/
router.post('/clientes', function(req, res) {
    console.log(req.body);
    
    var cliente = new Cliente(req.body);
    cliente.save(function(err, obj) {
        if(err) res.send(404);
        res.json({message: "ok"});
    });
});


/* 
 * GET /api/clientes
 * Listar clientes. 
 **/
router.get('/clientes', function(req, res) {
    Cliente.listAll(function(err, list) {
        if(err) {
            res.send(404);
            return;
        }
        
        res.json(list);
    });
});


/* 
 * GET /api/clientes/:id
 * Recupera um cliente a partir do seu id.
 **/
router.get('/clientes/:id', function(req, res) {
    Cliente.findById(req.params.id, function(err, obj) {
        if(err) {
            res.send(404);
            return;
        }
        
        res.json(obj);
    });
});

module.exports = router;

