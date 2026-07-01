const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

const sequelize = require("./config/db");
const Usuario = require("./models/Usuario");

app.engine("handlebars", exphbs.engine({defaultLayout:false}));
app.set("view engine","handlebars");

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use("/", require("./routes/usuarioRoutes"));

sequelize.sync()
.then(()=>{

    app.listen(3000,()=>{
        console.log("Servidor iniciado...");
    });

});