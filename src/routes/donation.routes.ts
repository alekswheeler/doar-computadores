import { Router } from "express";
import { authenticateEmail } from "../middlewares/authenticateEmail";
import { CreateDonationController } from "../modules/donation/useCases/createDonation/CreateDonationController";
import { ListDevicesController } from "../modules/donation/useCases/lisDevices/listDevicesController";

const donation = Router();
const createDonationController = new CreateDonationController();
const listDevicesController = new ListDevicesController();

donation.post("/donation", authenticateEmail, createDonationController.handle);
donation.get("/donation", listDevicesController.handle)

export { donation }