import { getAllStudentsByClassDB, getAllStudentsClasses, getStudentByCpf, 
    registerStudentClass, registerStudentDB } from "../repositories/students.repositories.js";
import { getClassIdByName } from "../repositories/classes.repositories.js";


export async function registerStudent(req, res) {
    const {cpf, className} = req.body;

    try{
        await registerStudentDB(req.body);
        const student = await getStudentByCpf(cpf);
        const classId = await getClassIdByName(className);
        await registerStudentClass(classId.rows[0].id, student.rows[0].id);
        return res.status(201).send({id: student.rows[0].id, name: student.rows[0].name, email: student.rows[0].email});
    } catch (err){
        return res.status(500).send(err.message);
    }
}

export async function getStudentProfile(req, res) {
    const {id} = req.params;
    const {student} = res.locals;
    try{
        const studentClasses = await getAllStudentsClasses(Number(id));
        return res.status(200).send({student: student, Studentclasses: studentClasses.rows});
    } catch (err){
        return res.status(500).send(err.message);
    }
}

export async function getAllStudentsByClass(req, res) {
    const {id} = req.params;
    try{
        const students = await getAllStudentsByClassDB(Number(id));
        return res.status(200).send(students.rows);
    } catch (err){
        return res.status(500).send(err.message);
    }
}