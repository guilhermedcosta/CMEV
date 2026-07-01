const express = require('express');
const exphbs = require('express-handlebars');

const sequelize = require('./config/conn');

const pedidoRoutes = require('./routes/pedidos');

const app = express();

app.use(express.urlencoded({ extended: true }));


app.use(express.static('public'));

app.engine('handlebars', exphbs.engine());

app.set('view engine', 'handlebars');

app.use(pedidoRoutes);

app.get('/', (req,res)=>{

    res.render('home');

});

sequelize.sync().then(()=>{

    app.listen(3000,()=>{

        console.log('Servidor rodando!');

    });

}).catch(err=>{

    console.log(err);

});