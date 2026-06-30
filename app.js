const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');
const { sequelize } = require('./models');

const app = express();
const PORT = process.env.PORT || 3000;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('home', { title: 'CMEV' });
});

app.get('/materiais', async (req, res) => {
  const { Material } = require('./models');
  const materiais = await Material.findAll({ order: [['createdAt', 'DESC']] });
  res.render('materiais', { title: 'Materiais', materiais });
});

app.post('/materiais/:id/excluir', async (req, res) => {
  const { Material } = require('./models');
  await Material.destroy({ where: { id: req.params.id } });
  res.redirect('/materiais');
});

async function startServer() {
  try {
    await sequelize.sync();
    console.log('Banco de dados sincronizado.');

    app.listen(PORT, () => {
      console.log(`Servidor em http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Erro ao iniciar o servidor:', error);
  }
}

startServer();
