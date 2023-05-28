import { getClassIdByName } from "../repositories/classes.repositories.js";
import { getAllProjectsDB, getProjectByName, getProjectsByClassesDB, projectDeliveryDB, registerProjectAndClass } from "../repositories/projects.repositories.js";
import { getStudentByName } from "../repositories/students.repositories.js";

export async function projectDelivery (req, res){
    const {className, studentName, projectName, link} = req.body;
    try{
        const student = await getStudentByName(studentName);
        const classId = await getClassIdByName(className);
        const project = await getProjectByName(projectName);
        await registerProjectAndClass(classId.rows[0].id, project.rows[0].id);
        await projectDeliveryDB(student.rows[0].id, projectName, link);
        return res.status(200).send({id: project.rows[0].id, name: projectName});
    } catch(err){
        return res.status(500).send(err.message);
    }
}

export async function getProjectsByClasses (req, res){
    const {classId, projectId} = req.body;
    try{
        const projects = await getProjectsByClassesDB(classId, projectId);
        return res.status(200).send(projects.rows);
    } catch(err){
        return res.status(500).send(err.message);
    }
}

export async function getAllProjects(req, res){
    try{
        const projects = await getAllProjectsDB();
        return res.status(200).send(projects.rows);
    } catch(err){
        return res.status(500).send(err.message);
    }
}
