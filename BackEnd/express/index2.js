//This is a bodyparser use application
import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({extended: true}));

app.post("/submit", (req,res) => {
  console.log(req.body);
  res.sendStatus("201")
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

