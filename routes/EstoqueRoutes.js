const express = require('express');
const router = express.Router();
const Produto = require('../models/produtos'); 


router.get('/produtos', async (req, res) => {
    const produtos = await Produto.findAll();
    res.render('cadastrar_estoque', { produtos: produtos.map(p => p.get({ plain: true })) });
});


router.get('/produtos/novo', (req, res) => {
    res.render('novo_produto');
});


router.post('/produtos/criar', async (req, res) => {
    try {
        await Produto.create(req.body);
        res.redirect('/produtos');
    } catch (err) {
        console.error('Erro ao criar produto:', err);
        res.render('novo_produto', {
            erro: err.message,
            produto: req.body
        });
    }
});


router.get('/produtos/editar/:id', async (req, res) => {
    const produto = await Produto.findByPk(req.params.id);
    res.render('editar_produto', { produto: produto.get({ plain: true }) });
});


router.post('/produtos/atualizar', async (req, res) => {
    await Produto.update(req.body, { where: { id: req.body.id } });
    res.redirect('/produtos');
});


router.get('/produtos/excluir/:id', async (req, res) => {
    await Produto.destroy({ where: { id: req.params.id } });
    res.redirect('/produtos');
});

module.exports = router;