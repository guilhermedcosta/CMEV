//Arquivo principal.
//Configura Express, Handlebars, Sequelize e inicia o servidor.

const express = require('express');
const exphbs = require('express-handlebars');
const conn = require('./config/database');
const app = express();
const pedidosRoutes = require('./routes/pedidos');

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(pedidosRoutes);

app.engine('handlebars', exphbs.engine({ defaultLayout: false }));
app.set('view engine', 'handlebars');

  app.get('/', (req, res) => {
  res.render('home');
});

  conn.sync({ alter: true })
  .then(() => {
    app.listen(3000, () => {
      console.log('Servidor rodando em http://localhost:3000');
    });
  })
  .catch((err) => {
    console.error('Erro ao conectar com o banco de dados:', err);
  });