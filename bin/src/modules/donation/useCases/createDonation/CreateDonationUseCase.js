"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDonationUseCase = void 0;
const Donation_1 = require("../../entities/Donation");
class CreateDonationUseCase {
    execute({ name, email, phone, zip, city, state, streetAddress, number, complement, neighborhood, deviceCount, devices }) {
        const donation = new Donation_1.Donation({
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
        return {
            succes: true
        };
    }
}
exports.CreateDonationUseCase = CreateDonationUseCase;
