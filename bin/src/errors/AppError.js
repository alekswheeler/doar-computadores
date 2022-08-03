"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppError = void 0;
class AppError {
    constructor({ errorMessage, statusCode = 400, requiredFields }) {
        this.errorMessage = errorMessage;
        this.statusCode = statusCode;
        if (requiredFields !== undefined) {
            this.requiredFields = requiredFields;
        }
    }
}
exports.AppError = AppError;
