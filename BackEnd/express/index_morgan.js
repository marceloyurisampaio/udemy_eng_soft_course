import express from "express";
//import morgan from "morgan";

const app = express();
const port = 3000;

//Logging Middleware
//app.use(morgan("tiny"));

//My custom middleware. This is the function that filters the user entries
const logger = (req,res,next) => {
  console.log("Request Method:" + req.method);
  console.log("URL: " + req.url);
  next();
} 

app.use(logger);

//Custom Middleware
//app.use((req,res,next) =>{
//  console.log("Request Method: ", req.method);
//  next();
//});

app.get("/", (req,res) =>{
  res.send("Hello");
});


app.listen(port, ()=>{
  console.log(`Server is running on port ${port}`);
})