import {db} from "../database/database.connection.js";

export function projectDeliveryDB (studentId, projectName, link){
    return db.query(`INSERT INTO projects ("studentId", name, link) VALUES ($1, $2, $3);`, [studentId, projectName, link]);
}

export function getProjectByStudentId(projectName, studentId){
    return db.query(`SELECT * FROM projects WHERE name = $1 AND "studentId" = $2;`, [projectName, studentId]);
}

export function registerProjectAndClass(classId, projectId){
    return db.query(`INSERT INTO classes_projects ("classId", "projectId") VALUES ($1, $2);`, [classId, projectId]);
}

export function getProjectsByClassesDB (classId, projectId){
    return db.query(`SELECT students.name AS "studentName", classes.name AS "className", projects.name AS "projectName"
    FROM classes_projects
    JOIN classes ON classes_projects."classId" = classes.id
    JOIN projects ON classes_projects."projectId" = projects.id
    JOIN students ON projects."studentId" = students.id
    WHERE "classId" = $1 AND "projectId" = $2
    ORDER BY students.name;`, [classId, projectId]);
}

export function getAllProjectsDB (){
    return db.query(`SELECT DISTINCT projects.name FROM projects;`);
}