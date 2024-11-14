import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
const port = 3000;


app.get("/", (req,res) => {
  /*const today = new Date();
  const day = today.getDay();

  let type = "a Weekday";
  let adv = "its time to work hard";

  if (day === 0 || day === 6) {
    type = "The Weekend";
    adv = "its time to have some fun";
  }
  res.render("index.ejs", {
    dayType: type,
    advice: adv,
  });
  */

  const data = {
    title: "EJS Tags",
    seconds: new Date().getSeconds(),
    items: ["apple", "banana", "cherry"],
    htmlContent:
      "<em>This is some em text </em>",
  };
  res.render("index.ejs", data); 
});


app.listen(port, () => {
  console.log(`Server Running on port ${port}.`);
});