import { Router } from "express";
import { validateSchema } from "../middlewares/schemaValidation.js";
import {productDeliverySchema} from "../schemas/projectsSchemas.js";
import { getProjectsByClasses, projectDelivery } from "../controllers/projects.controllers.js";

const projectsRouter = Router();

projectsRouter.post ("/projects", validateSchema(productDeliverySchema), projectDelivery);
projectsRouter.get ("/projects/:projectId/classes/:classId", getProjectsByClasses);

export default projectsRouter;