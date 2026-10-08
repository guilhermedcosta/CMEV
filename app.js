const express = require('express');
const { engine } = require('express-handlebars');

const sequelize = require('./config/database');

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

// Rotas
app.use('/', require('./routes/usuarioRoutes'));
app.use('/', require('./routes/EstoqueRoutes'));
app.use('/', require('./routes/pedidoRoutes'));

// Conexão + inicialização
sequelize.sync({ alter: true })
    .then(() => {
        app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
    })
    .catch(err => console.error('Erro ao conectar ou sincronizar o banco:', err));
