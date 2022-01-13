import * as express from "express";
const app = express();
const port = process.env.PORT || 3000;

app.get("/hola", (req,res) => {
  res.json({
    message: "hola soy el servidor"
  })
})

app.listen(3000, ()=>{
  console.log(`hola soy express en el puerto ${port}`)
});

//minuto 16