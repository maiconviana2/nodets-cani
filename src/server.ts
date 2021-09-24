import express from "express";
import dotenv from "dotenv";
import mustache from "mustache-express";
import path from "path";
import mainRoutes from './routes/index'

//Pega a porta 4000 que está no arquivo .env (raiz do projeto)
dotenv.config();

//Coloca a função express() na variável 'server'
const server = express();

//Define o template engine
server.set("view engine", "mustache");
//Define as pastas de visualização do peojeto
server.set("views", path.join(__dirname, "views"));
//Define a engine, no caso o Mustache
server.engine("mustache", mustache());
//Definindo caminho estático para arquivos estáticos
server.use(express.static(path.join(__dirname, "../public")));

// ROTAS
server.use(mainRoutes);

server.use((req,res)=>{
    res.render('pages/404');
})

//Colocando o servidor para rodar na porta definida no arquivo .env (raiz do projeto)
server.listen(process.env.PORT);
