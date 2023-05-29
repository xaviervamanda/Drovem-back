import {db} from "../database/database.connection.js";

export function projectDeliveryDB (studentId, projectId, link){
    return db.query(`INSERT INTO students_projects ("studentId", "projectId", link) VALUES ($1, $2, $3);`, [studentId, projectId, link]);
}

export function getProjectByStudentId(projectId, studentId){
    return db.query(`SELECT * FROM students_projects WHERE "projectId" = $1 AND "studentId" = $2;`, [projectId, studentId]);
}

export function getProjectId (projectName){
    return db.query(`SELECT * FROM projects WHERE name = $1;`, [projectName]);
}

export function registerProjectAndClass(classId, projectId){
    return db.query(`INSERT INTO classes_projects ("classId", "projectId") VALUES ($1, $2);`, [classId, projectId]);
}

export function getProjectsByClassesDB(classId, projectId) {
    return db.query(`
      SELECT students.name AS "studentName", students.image AS "studentImage", classes.name AS "className", projects.name AS "projectName", grades.grade
      FROM students_projects
      JOIN classes_projects ON students_projects.id = classes_projects."studentProjectId"
      JOIN classes ON classes_projects."classId" = classes.id
      JOIN projects ON students_projects."projectId" = projects.id
      JOIN students ON students.id = students_projects."studentId"
      JOIN grades ON students_projects.id = grades."studentProjectId"
      WHERE classes_projects."classId" = $1 AND students_projects."projectId" = $2
      ORDER BY students.name;
    `, [classId, projectId]);
}

export function getAllProjectsDB (){
    return db.query(`SELECT DISTINCT projects.name, projects.id FROM projects ORDER BY projects.name;`);
}

