const express = require('express');
const { engine } = require('express-handlebars');
const sequelize = require('./config/database');


const produtoRoutes = require('./routes/EstoqueRoutes');

const app = express();

app.engine('handlebars', engine({
    defaultLayout: false,
}));
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/', produtoRoutes); 



sequelize.sync()
    .then(() => {
        app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
    })
    .catch(err => console.error('Erro ao conectar ou sincronizar o banco:', err));

module.exports = app;