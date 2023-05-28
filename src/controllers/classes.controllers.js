import { getAllClassesDB } from "../repositories/classes.repositories.js";

export async function getAllClasses (req, res){
    try{
        const classes = await getAllClassesDB();
        return res.status(200).send(classes.rows);
    } catch (err){
        return res.status(500).send(err.message);
    }
}