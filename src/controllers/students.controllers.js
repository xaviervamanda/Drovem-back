import { getAllStudentsByClassDB, getAllStudentsClasses, getStudentByCpf, getStudentById, 
    registerStudentClass, registerStudentDB } from "../repositories/students.repositories.js";
import { getClassIdByName } from "./classes.controllers.js";


export async function registerStudent(req, res) {
    const {cpf, className} = req.body;

    try{
        await registerStudentDB(req.body);
        const student = await getStudentByCpf(cpf);
        const classId = await getClassIdByName(className);
        await registerStudentClass(classId, student.rows[0].id);
        return res.status(201).send({id: student.rows[0].id, name: student.rows[0].name, email: student.rows[0].email});
    } catch (err){
        return res.status(500).send(err.message);
    }
}

export async function getStudentProfile(req, res) {
    const {id} = req.params;
    try{
        const student = await getStudentById(id);
        const studentClasses = await getAllStudentsClasses(id);
        return res.status(200).send({student: student.rows[0], Studentclasses: studentClasses.rows});
    } catch (err){
        return res.status(500).send(err.message);
    }
}

export async function getAllStudentsByClass(req, res) {
    const {id} = req.params;
    try{
        const students = await getAllStudentsByClassDB(id);
        return res.status(200).send(students.rows);
    } catch (err){
        return res.status(500).send(err.message);
    }
}