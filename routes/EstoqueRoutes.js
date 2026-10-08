const express = require('express');
const router = express.Router();
const Produto = require('../models/produtos'); 


router.get('/produtos', async (req, res) => {
    const produtos = await Produto.findAll();
    res.render('estoque', { produtos: produtos.map(p => p.get({ plain: true })) });
});


router.get('/produtos/novo', (req, res) => {
    res.render('novo_produto');
});


router.post('/produtos/criar', async (req, res) => {
    try {
        await Produto.create({
            ...req.body,
            foto_url: req.body.foto_url || null
        });
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
    try {
        const dadosAtualizacao = {
            cod_item: req.body.cod_item,
            nome_produto: req.body.nome_produto,
            marca: req.body.marca,
            categoria: req.body.categoria,
            quantidade_atual: req.body.quantidade_atual,
            preco: req.body.preco
        };

        if (req.body.foto_url !== undefined) {
            dadosAtualizacao.foto_url = req.body.foto_url || null;
        }

        await Produto.update(dadosAtualizacao, { where: { id: req.body.id } });
        res.redirect('/produtos');
    } catch (err) {
        console.error('Erro ao atualizar produto:', err);
        res.redirect(`/produtos/editar/${req.body.id}`);
    }
});


router.get('/produtos/excluir/:id', async (req, res) => {
    await Produto.destroy({ where: { id: req.params.id } });
    res.redirect('/produtos');
});

module.exports = router;