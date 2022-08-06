import "reflect-metadata";
import { router } from "./routes";
import { AppError } from "./errors/AppError";
import { appDataSource } from "./databaseConnection";

const PORT = process.env.PORT || 5000
const app = router;

appDataSource.initialize();
console.log("Everithing is OK!");

router.listen(PORT, ()=>{
  console.log("Server is running at http://localhost:5000");
});