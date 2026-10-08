const Usuario = require("../models/Usuario");

module.exports = {

    login(req, res) {
        res.render("usuario", { error: null });
    },

    async autenticar(req, res) {
        const cpf = String(req.body.cpf || "").trim();
        const senha = String(req.body.senha || "").trim();

        if (!cpf || !senha) {
            return res.render("usuario", { error: "CPF e senha são obrigatórios." });
        }

        const usuario = await Usuario.findOne({
            where: { cpf },
            raw: true
        });

        if (!usuario || usuario.senha !== senha) {
            return res.render("usuario", { error: "CPF ou senha inválidos." });
        }

        return res.redirect("/produtos");
    },

    cadastro(req, res){
        res.render("cadastroUsuario");
    },

    async salvar(req, res){

        await Usuario.create({
            cpf: req.body.cpf,
            senha: req.body.senha
        });

        res.redirect("/usuarios");
    },

    async listar(req, res){

        const usuarios = await Usuario.findAll({raw:true});

        res.render("usuarios", {usuarios});
    },

    async editar(req, res){

        const usuario = await Usuario.findByPk(req.params.id,{raw:true});

        res.render("editar",{usuario});
    },

    async atualizar(req,res){

        await Usuario.update({

            cpf:req.body.cpf,
            senha:req.body.senha

        },{
            where:{
                id:req.body.id
            }
        });

        res.redirect("/usuarios");
    },

    async excluir(req,res){

        await Usuario.destroy({
            where:{
                id:req.params.id
            }
        });

        res.redirect("/usuarios");
    }

}