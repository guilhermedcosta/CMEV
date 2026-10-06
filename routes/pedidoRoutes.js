const express = require('express');
const router = express.Router();
const controller = require('../controllers/pedidoController');

router.get('/pedidos', controller.listar);
router.get('/pedidos/novo', controller.novo);
router.post('/pedidos/criar', controller.criar);
router.get('/pedidos/editar/:id', controller.editar);
router.post('/pedidos/atualizar', controller.atualizar);
router.get('/pedidos/excluir/:id', controller.excluir);

module.exports = router;
