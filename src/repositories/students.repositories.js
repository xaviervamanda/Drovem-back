import {db} from "../database/database.connection.js";

export function registerStudentDB(body){
    const {name, cpf, email, image} = body;

    return db.query(`INSERT INTO students (name, cpf, email, image) VALUES ($1, $2, $3, $4);`, [name, cpf, email, image]);
}

export function getStudentByCpf(cpf){
    return db.query(`SELECT * FROM students WHERE cpf = $1;`, [cpf]);
}
export function getStudentById(id){
    return db.query(`SELECT * FROM students WHERE id = $1;`, [id]);
}

export function getStudentByName(name){
    return db.query(`SELECT * FROM students WHERE name = $1;`, [name]);
}

export function registerStudentClass (className, studentId){
    return db.query(`INSERT INTO students_classes ("classId", "studentId") VALUES ($1, $2);`, [className, studentId]);
}

export function getAllStudentsClasses(studentId){
    return db.query(`SELECT classes.name AS "className", students_classes."startDate", students_classes."endDate" 
    FROM students_classes 
    JOIN classes ON students_classes."classId" = classes.id 
    WHERE "studentId" = $1;`, [studentId]);
}

export function getAllStudentsByClassDB(id){
    return db.query(`SELECT classes.name AS "className", 
    students.name AS "studentName", 
    students.image AS "studentImage" 
    FROM students_classes
    JOIN classes ON students_classes."classId" = classes.id
    JOIN students ON students_classes."studentId" = students.id
    WHERE "classId" = $1
    ORDER BY "students.name";`, [id]);
}