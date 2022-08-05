import { router } from "./routes";
import { AppError } from "./errors/AppError";

const PORT = process.env.PORT || 5000
const app = router;

router.listen(PORT, ()=>{
  console.log("Server is running at http://localhost:5000");
});