var express = require('express');
var router = express.Router();
var Cliente = require("../models/Cliente");

/* 
 * POST /api/clientes
 * Salvar cliente. 
 **/
router.post('/clientes', function(req, res) {    
    // req.body representa o objeto JSON cliente recebido na requisição POST.
    Cliente.salvar(req.body, function(error, obj) {
        if(error) {
            console.log(error);
            res.status(500).send(error.err);
            return;
        }
        res.json({message: "ok"});
    });
});


/* 
 * GET /api/clientes
 * Listar clientes. 
 **/
router.get('/clientes', function(req, res) {
    Cliente.listarTodos(function(error, list) {
        if(error) {
            console.log(error);
            res.status(500).send(error.err);
            return;
        }
        
        res.json(list);
    });
});


/* 
 * GET /api/clientes/:int(\\d+)
 * Recupera um cliente a partir do seu id.
 **/
router.get('/clientes/:id', function(req, res) {
    Cliente.buscarPorId(req.params.id, function(error, obj) {
        if(error) {
            console.log(error);
            res.status(500).send(error.err);
            return;
        }
        
        res.json(obj);
    });
});


/* 
 * GET /api/clientes/count
 * Retorna o número de clientes cadastrados.
 **/
router.get('/count/clientes', function(req, res) {
    Cliente.totalCadastrados(function(error, contagem) {
        if(error) {
            console.log(error);
            res.status(500).send(error.message);
            return;
        }
        
        res.json({count:contagem});
    });
});


/* 
 * DELETE /api/clientes/:int(\\d+)
 * Exclui um cliente do banco de dados.
 **/
router.delete('/clientes/:id', function(req, res) {
    Cliente.excluir(req.params.id, function(error, cliente) {
        if(error) {
            console.log(error);
            res.status(500).send(error.message);
            return;
        }
        
        res.status(200).send();
    });
});

module.exports = router;

