import { Router } from "express";
import { validateSchema } from "../middlewares/schemaValidation.js";
import {projectDeliverySchema} from "../schemas/projectsSchemas.js";
import { getAllProjects, getProjectsByClasses, projectDelivery } from "../controllers/projects.controllers.js";

const projectsRouter = Router();

projectsRouter.post ("/projects", validateSchema(projectDeliverySchema), projectDelivery);
projectsRouter.get ("/projects/:projectId/classes/:classId", getProjectsByClasses);
projectsRouter.get ("/projects", getAllProjects);

export default projectsRouter;