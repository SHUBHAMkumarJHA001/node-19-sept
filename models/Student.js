const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const StudentSchema = new Schema({
    rollNo: { type:String },
    name: { trpe:String },
    fatherName: { type: String },
    adharcardNo: { type: String },
    mobileNo: { type: String },
})

module.export=mongoose.model('Student',StudentSchema)