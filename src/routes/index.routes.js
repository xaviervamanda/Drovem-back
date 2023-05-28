import { Router } from "express";
import studentsRouter from "./students.routes.js";
import projectsRouter from "./projects.routes.js";
import classesRouter from "./classes.routes.js";


const router = Router();

router.use(studentsRouter);
router.use(projectsRouter);
router.use(classesRouter)

export default router;