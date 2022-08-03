"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDonationController = void 0;
const CreateDonationUseCase_1 = require("./CreateDonationUseCase");
class CreateDonationController {
    handle(req, res) {
        const { name, email, phone, zip, city, state, streetAddress, number, complement, neighborhood, deviceCount, devices } = req.body;
        const createDonationUseCase = new CreateDonationUseCase_1.CreateDonationUseCase();
        const result = createDonationUseCase.execute({
            name,
            email,
            phone,
            zip,
            city,
            state,
            streetAddress,
            number,
            complement,
            neighborhood,
            deviceCount,
            devices
        });
        return res.status(200).json(result);
    }
}
exports.CreateDonationController = CreateDonationController;
