import { Router } from "express";
import { ServerAliveController } from "../modules/donation/useCases/serverAlive/ServerAliveController";

const alive = Router();

const serverAliveController = new ServerAliveController();

alive.get("/", serverAliveController.handle);

export { alive }