"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = require("./routes");
const app = routes_1.router;
routes_1.router.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
});
