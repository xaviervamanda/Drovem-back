import { Router } from "express";
import { getAllClasses } from "../controllers/classes.controllers.js";

const classesRouter = Router();

classesRouter.get ("/classes", getAllClasses);

export default classesRouter;