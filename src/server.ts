import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res)=>{
  return res.json({alive: true});
});

app.listen(3000, ()=>{
  console.log("Server is running");
});
