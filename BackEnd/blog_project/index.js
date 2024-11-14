import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

//Public paste to static archives
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));

//This are the routes. First of them is the main page. There will be show all the essays writen by authors. In this page will have three options: Create an essay, read essays that was writen by the user and see all the essays. The authentication is in this page too.   
app.get("/" , (req,res) => {
  res.render("index.ejs", {
    essays: essays,
  });
});

app.get("/createessay", (req,res) => {
  res.render("createEssay.ejs");
});

app.get("/yourEssays" , (req,res) => {
  res.render("yourEssays.ejs");
});

app.get("/login", (req,res) => {
  res.render("login.ejs");
});

app.get("/register", (req,res) => {
  res.render("register.ejs");
});



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


//Aqui passo alguns exemplos de essays que serão listadas na página principal. 
const essays = ["isplorem",
                "isplorem",
                "ipslorem"];