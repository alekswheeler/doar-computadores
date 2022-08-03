"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const donation_routes_1 = require("./donation.routes");
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.router = router;
router.use(donation_routes_1.donation);
