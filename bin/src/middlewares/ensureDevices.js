"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureDevices = void 0;
const AppError_1 = require("../errors/AppError");
function ensureDevices(req, res, next) {
    const { devices, deviceCount } = req.body;
    devices.forEach(device => {
        switch (device.type) {
            case "notebook":
            case "desktop":
            case "netbook":
            case "screen":
            case "printer":
            case "scanner":
                break;
            default:
                throw new AppError_1.AppError({
                    errorMessage: `Aparelhos do tipo (${device.type}) não são aceitos.`
                });
        }
        switch (device.condition) {
            case "working":
            case "notWorking":
            case "broken":
                break;
            default:
                throw new AppError_1.AppError({
                    errorMessage: `Estado de aparelho (${device.condition}) desconhecido.`
                });
        }
    });
    if (deviceCount !== devices.length) {
        throw new AppError_1.AppError({
            errorMessage: `A quantidade de equipamentos (${deviceCount}) não está de acordo com as informações de equipamentos enviados (${devices.length}).`
        });
    }
    return next();
}
exports.ensureDevices = ensureDevices;
