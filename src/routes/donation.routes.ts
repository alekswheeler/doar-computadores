import { Router } from "express";
import { ensureDevices } from "../middlewares/ensureDevices";
import { ensureRequiredFields } from "../middlewares/ensureRequiredFields";
import { CreateDonationController } from "../modules/donation/useCases/createDonation/CreateDonationController";


const donation = Router();
const createDonationController = new CreateDonationController();

donation.post("/donation", ensureRequiredFields, ensureDevices, createDonationController.handle);

export { donation }