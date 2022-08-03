"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const donation_routes_1 = require("./donation.routes");
require("express-async-errors");
const AppError_1 = require("../errors/AppError");
const router = (0, express_1.default)();
exports.router = router;
router.use(express_1.default.json());
router.use(donation_routes_1.donation);
router.get("/", (req, res) => {
    return res.json({ alive: true });
});
router.use((err, req, res, next) => {
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
