export async function checkExistStudent (req, res, next){
    const {name} = req.body;
    try{
        const student = await getStudentByName(name);
        if (student.rowCount === 0) return res.status(404).send("Student not found");
        next();
    } catch (err){
        return res.status(500).send(err.message);
    }
}