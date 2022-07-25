import { Router } from "express";
import { ServerAliveController } from "../modules/useCases/serverAlive/ServerAliveController";

const router = Router();

const serverAliveController = new ServerAliveController();

router.get("/", serverAliveController.handle);

export { router };