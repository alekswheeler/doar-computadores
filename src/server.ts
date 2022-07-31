import { router } from "./routes";

import { AppError } from "./errors/AppError";

const app = router;

router.listen(3000, ()=>{
  console.log("Server is running at http://localhost:3000");
});
