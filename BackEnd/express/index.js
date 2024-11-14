import express from "express";
import bodyParser from "body-parser";

//The tree lines above is to dynamicaly change the path of the directory. This is crucial in servers allocated in clouds, because the path is dynamic.
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

/* The return codes are 1XX, 2XX, 3XX, 4XX and 5xx. Each of them has a different meaning and message. 

2XX - Sucessfull response
3XX - Redirecting response
4XX - Error from Client-Side
5XX - Erros from Server-Side

Postman can be use to test this app. 

Run this app with nodemon means that each change that is made in the code, the server is automatically reset to the new version. 
*/

app.get("/", (req, res) => {
  res.send(
    "<h1>Welcome to Marcelo's Application! Tell Me About your action.<h1>"
  );
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req,res) => {
  console.log(req.body);
  res.sendStatus("201")
});

app.post("/register", (req, res) => {
  res.sendStatus(201);
});

app.put("/user/Marcelo", (req, res) => {
  res.sendStatus(200);
});

app.patch("/user/Marcelo", (req, res) => {
  res.sendStatus(200);
});

app.delete("/user/Marcelo", (req, res) => {
  res.sendStatus(200);
});

//Callback function is a trigger function, its means that when server starts this function is call.
//3000 is the port of the server
app.listen(port, () => {
  console.log(`Server Running on port ${port}.`);
});
