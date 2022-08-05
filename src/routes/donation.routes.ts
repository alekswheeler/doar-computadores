import { Router } from "express";
import { authenticateEmail } from "../middlewares/authenticateEmail";
import { CreateDonationController } from "../modules/donation/useCases/createDonation/CreateDonationController";

const donation = Router();
const createDonationController = new CreateDonationController();

donation.post("/donation", authenticateEmail, createDonationController.handle);

export { donation }