"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const AppError_1 = require("./errors/AppError");
require("express-async-errors");
const routes_1 = require("./routes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", (req, res) => {
    return res.json({ alive: true });
});
app.use(routes_1.router);
app.use((err, req, res, next) => {
    if (err instanceof (AppError_1.AppError)) {
        return res.status(err.statusCode).json({
            error: true,
            errorMessage: err.errorMessage,
            requiredFields: err.requiredFields
        });
    }
    return res.status(500).json({
        error: true,
        errorMessage: "Internal server error."
    });
});
app.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
});
