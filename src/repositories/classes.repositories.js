import {db} from "../database/database.connection.js";

export function getClassIdByName (name){
    return db.query(`SELECT id FROM classes WHERE name = $1;`, [name]);
}

export function getAllClassesDB (){
    return db.query(`SELECT * FROM classes;`);
}