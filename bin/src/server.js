"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = require("./routes");
const PORT = process.env.PORT || 5000;
const app = routes_1.router;
app.listen(PORT, () => {
    console.log("Server is running at http://localhost:3000");
});
