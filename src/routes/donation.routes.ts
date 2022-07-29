import { Router } from "express";
import { ensureRequiredFields } from "../middlewares/ensureRequiredFields";
import { CreateDonationController } from "../modules/donation/useCases/createDonation/CreateDonationController";


const donation = Router();
const createDonationController = new CreateDonationController();

donation.post("/donation", ensureRequiredFields, createDonationController.handle);

export { donation }