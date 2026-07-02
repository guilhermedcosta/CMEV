const express = require('express');
const router = express.Router();

const Pedido = require('../models/Pedido');

    router.get('/pedidos', async (req, res) => {
    const pedidos = await Pedido.findAll({
        raw: true
    });
    res.render('pedidos/index', { pedidos });
});

    router.get('/pedidos/novo', (req, res) => {
    res.render('pedidos/novo');
});

    router.post('/pedidos', async (req, res) => {
    const { setor, material, quantidade, categoria, marca } = req.body;

    await Pedido.create({
        setor,
        material,
        quantidade,
        categoria,
        marca
    });

    res.redirect('/pedidos');
});

    router.get('/pedidos/editar/:cod_item', async (req, res) => {
    const cod_item = req.params.cod_item;
    
        const pedido = await Pedido.findOne({ where: { cod_item: cod_item }, raw: true });

    res.render('pedidos/editar', { pedido });
});

    router.post('/pedidos/atualizar', async (req, res) => {
    const { cod_item, setor, material, quantidade, categoria, marca } = req.body;

    const dadosAtualizados = { setor, material, quantidade, categoria, marca };

    await Pedido.update(dadosAtualizados, { where: { cod_item: cod_item } });
    res.redirect('/pedidos');
});

    router.post('/pedidos/excluir', async (req, res) => {
    const { cod_item } = req.body;

    await Pedido.destroy({ where: { cod_item: cod_item } });
    res.redirect('/pedidos');
});

module.exports = router;