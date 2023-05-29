import { getClassIdByName } from "../repositories/classes.repositories.js";
import { getAllProjectsDB, getProjectByStudentId, getProjectId, getProjectsByClassesDB, projectDeliveryDB, registerProjectAndClass, updateStudentProjectGradeDB } from "../repositories/projects.repositories.js";
import { getStudentByName } from "../repositories/students.repositories.js";

export async function projectDelivery (req, res){
    const {className, studentName, projectName, link} = req.body;
    try{
        const student = await getStudentByName(studentName);
        const project = await getProjectId(projectName);
        await projectDeliveryDB(student.rows[0].id, project.rows[0].id, link);
        const classId = await getClassIdByName(className);
        const studentProject = await getProjectByStudentId(project.rows[0].id, student.rows[0].id);
        await registerProjectAndClass(classId.rows[0].id, studentProject.rows[0].projectId);
        return res.status(200).send({id: studentProject.rows[0].id, name: projectName});
    } catch(err){
        return res.status(500).send(err.message);
    }
}

export async function getProjectsByClasses (req, res){
    const {classId, projectId} = req.params;
    try{
        const projects = await getProjectsByClassesDB(Number(classId), Number(projectId));
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

export async function updateStudentProjectGrade (req, res){
    const {grade} = req.body;
    const {id} = req.params;
    
    try{
        await updateStudentProjectGradeDB(grade, id);
        return res.status(200);
    } catch(err){
        return res.status(500).send(err.message);
    }
}
