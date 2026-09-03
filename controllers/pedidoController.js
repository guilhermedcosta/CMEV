const Pedido = require('../models/Pedido');

module.exports = {
    novo(req, res) {
        res.render('cadastrar_pedido');
    },

    async criar(req, res) {
        await Pedido.create({
            cod_item: req.body.cod_item,
            setor: req.body.setor,
            material: req.body.material,
            quantidade: req.body.quantidade,
            categoria: req.body.categoria,
            marca: req.body.marca
        });

        res.redirect('/pedidos');
    },

    async listar(req, res) {
        const pedidos = await Pedido.findAll({ raw: true });
        res.render('pedidos', { pedidos });
    },

    async editar(req, res) {
        const pedido = await Pedido.findByPk(req.params.id, { raw: true });
        res.render('editar_pedido', { pedido });
    },

    async atualizar(req, res) {
        await Pedido.update({
            cod_item: req.body.cod_item,
            setor: req.body.setor,
            material: req.body.material,
            quantidade: req.body.quantidade,
            categoria: req.body.categoria,
            marca: req.body.marca
        }, {
            where: {
                id: req.body.id
            }
        });

        res.redirect('/pedidos');
    },

    async excluir(req, res) {
        await Pedido.destroy({
            where: {
                id: req.params.id
            }
        });

        res.redirect('/pedidos');
    }
};
