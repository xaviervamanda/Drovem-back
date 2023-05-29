import { getStudentById } from "../repositories/students.repositories.js";

export async function checkExistStudent (req, res, next){
    const {id} = req.params;
    
    try{
        const student = await getStudentById(Number(id));
        if (student.rowCount === 0) return res.status(404).send("Student not found");
        res.locals.student = student.rows[0];
        next();
    } catch (err){
        return res.status(500).send(err.message);
    }
}