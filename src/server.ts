import { router } from "./routes";

const PORT = process.env.PORT || 5000;

const app = router;

app.listen(PORT, ()=>{
  console.log("Server is running at http://localhost:3000");
});
