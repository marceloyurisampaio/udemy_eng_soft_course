import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var bandName = "";

app.use(bodyParser.urlencoded({extended: true}));

//MiddleWare to form the band name string
function bandNameGenerator (req, res, next){
  console.log (req.body);
  bandName = req.body["street"] + req.body["path"];
  next();
}

//Usar uma função dessa maneira faz com que ela seja usada em todas as requisições, de forma global. Caso eu queira associar um middleware a uma rota específica, devo chamada diretamente apos a definição da rota no metodo post. 
app.use(bandNameGenerator); //Aplicar a função dessa maneira a torna um middleware geral da aplicação. 

//Routes 
app.get("/", (req,res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req,res) => { //Para chamar um middleware específico para esse método post por exemplo, 
  res.send(`<h1>Your Band name is:<\h1> <h2>${bandName}<\h2>`);
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});