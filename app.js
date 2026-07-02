const express = require('express');
const { engine } = require('express-handlebars');

const sequelize = require('./config/database');

// Importa os models para o Sequelize "enxergar" as tabelas no sync()
const Usuario = require('./models/Usuario');
// const Produto = require('./models/Produto'); // descomente se existir

const app = express();

// Configuração do Handlebars
app.engine('handlebars', engine({
    defaultLayout: false,
}));
app.set('view engine', 'handlebars');
app.set('views', './views');

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req,res) => {
    res.render('home')
})
// Rotas
app.use('/', require('./routes/usuarioRoutes'));
app.use('/', require('./routes/EstoqueRoutes'));

// Conexão + inicialização
sequelize.sync()
    .then(() => {
        app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
    })
    .catch(err => console.error('Erro ao conectar ou sincronizar o banco:', err));
