const Student = require('../models/Student');

async function addStudent(req, res){
    try{
        console.log(req.body,'req.body');
        let student = new Student(req.body);
        await student.save();
        console.log("data saved succesfully...");
        res.end("data added...");

    }catch(err){
        console.log(err)
    }
}

async function getStudent(req, res){
    try{
        let students = await Student.find({});
        console.log(students);
        res.end(students);
    }catch(err){
        console.log(err)
    }
}

module.export = {
    
}