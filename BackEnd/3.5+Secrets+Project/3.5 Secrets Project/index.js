//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000; 

app.use(bodyParser.urlencoded({extended: true}));

//Middleware to verify the password inserted
function password_check (req,res,next){
  if (req.body["password"] == "ILoveProgramming"){
    req.isValid = true;
  } else{
    req.isValid = false;
  }
  next()
}

app.use(password_check);

app.get("/", (req,res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req,res) => {
  if (req.isValid){
    res.sendFile(__dirname + "/public/secret.html");
  } else{
    res.sendFile(__dirname + "/public/index.html");
    //res.redirect("/") its another way to comeback to main page
  }
});

app.listen(port, () => {
  console.log(`Server Running on port ${port}.`);
});