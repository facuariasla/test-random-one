import * as express from "express";
const app = express();
const port = process.env.PORT || 3000;

app.get("/env", (req, res) => {
  res.json({
    enviroment: process.env.NODE_ENV
  })
})
app.get("/db-env", (req, res) => {
  res.json({
    "db-host": process.env.DB_HOST,
  })
})
// algo
app.get("/hola", (req,res) => {
  res.json({
    message: "hola soy el servidor, heroku"
  })
})

app.listen(port, ()=>{
  console.log(`hola soy express en el puerto ${port}`)
});

//minuto 16