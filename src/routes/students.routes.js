import { Router } from "express";
import {validateSchema} from "../middlewares/schemaValidation.js";
import { registerStudentSchema } from "../schemas/studentsSchemas.js";
import { getAllStudentsByClass, getStudentProfile, registerStudent } from "../controllers/students.controllers.js";
import { checkExistStudent } from "../middlewares/students.middlewares.js";

const studentsRouter = Router();

studentsRouter.post ("/students", validateSchema(registerStudentSchema), registerStudent);
studentsRouter.get ("/students/:id", checkExistStudent, getStudentProfile);
studentsRouter.get ("/students/classes/:id", getAllStudentsByClass);

export default studentsRouter;