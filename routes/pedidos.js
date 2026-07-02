const express = require('express');
const router = express.Router();

const Pedido = require('../models/Pedido');

// Listar pedidos
router.get('/pedidos', async (req, res) => {
    const pedidos = await Pedido.findAll({
        raw: true
    });
    res.render('pedidos/index', { pedidos });
});

// Formulário de cadastro
router.get('/pedidos/novo', (req, res) => {
    res.render('pedidos/novo');
});

// Salvar pedido
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

// --- AS ROTAS NOVAS QUE ESTAVAM FALTANDO ENTRAM AQUI: ---

// Formulário de edição (Busca o pedido pelo cod_item e abre a página)
router.get('/pedidos/editar/:cod_item', async (req, res) => {
    const cod_item = req.params.cod_item;
    
    // Busca no banco usando a sua chave primária correta (cod_item)
    const pedido = await Pedido.findOne({ where: { cod_item: cod_item }, raw: true });

    res.render('pedidos/editar', { pedido });
});

// Atualizar o pedido (Recebe os dados do formulário de edição)
router.post('/pedidos/atualizar', async (req, res) => {
    const { cod_item, setor, material, quantidade, categoria, marca } = req.body;

    const dadosAtualizados = { setor, material, quantidade, categoria, marca };

    await Pedido.update(dadosAtualizados, { where: { cod_item: cod_item } });
    res.redirect('/pedidos');
});

// Excluir pedido
router.post('/pedidos/excluir', async (req, res) => {
    const { cod_item } = req.body;

    await Pedido.destroy({ where: { cod_item: cod_item } });
    res.redirect('/pedidos');
});

module.exports = router;