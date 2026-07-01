const express = require("express");
const router = express.Router();

const controller = require("../controllers/usuarioController");

router.get("/", controller.cadastro);

router.post("/salvar", controller.salvar);

router.get("/usuarios", controller.listar);

router.get("/editar/:id", controller.editar);

router.post("/editar", controller.atualizar);

router.get("/deletar/:id", controller.excluir);

module.exports = router;