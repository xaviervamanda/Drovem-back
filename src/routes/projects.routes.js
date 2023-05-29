import { Router } from "express";
import { validateSchema } from "../middlewares/schemaValidation.js";
import {projectDeliverySchema} from "../schemas/projectsSchemas.js";
import { getAllProjects, getProjectsByClasses, projectDelivery, updateStudentProjectGrade } from "../controllers/projects.controllers.js";

const projectsRouter = Router();

projectsRouter.post ("/projects", validateSchema(projectDeliverySchema), projectDelivery);
projectsRouter.get ("/projects/:projectId/classes/:classId", getProjectsByClasses);
projectsRouter.get ("/projects", getAllProjects);
projectsRouter.put ("/projects/:id", updateStudentProjectGrade);

export default projectsRouter;