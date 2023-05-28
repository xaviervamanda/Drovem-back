import { Router } from "express";

const projectsRouter = Router();

projectsRouter.post ("/projects", projectDelivery);
projectsRouter.get ("/projects/:projectId/classes/:classId", getProjectsByClasses);

export default projectsRouter;