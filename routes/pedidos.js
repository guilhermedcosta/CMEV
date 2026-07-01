const express = require('express');
const router = express.Router();

const Pedido = require('../models/Pedido');

// Listar pedidos
router.get('/pedidos', async (req, res) => {

    const pedidos = await Pedido.findAll({
        raw: true
    });

    res.render('pedidos/index', {
        pedidos
    });

});

// Formulário de cadastro
router.get('/pedidos/novo', (req, res) => {

    res.render('pedidos/novo');

});

// Salvar pedido
router.post('/pedidos', async (req, res) => {

    const { setor, material, quantidade } = req.body;

    await Pedido.create({

        setor,

        material,

        quantidade

    });

    res.redirect('/pedidos');

});

module.exports = router;