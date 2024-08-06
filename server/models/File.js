const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    Roll_No: String,
    Enroll_No: String,
    Course_Code: String,
    Regular_Private: String,
    Name: String,
    Year_sem: String,
    Father_name: String,
    Course_Duration: String,
    Institute_Name: String,
    Exam_Type: String,
    Subject_one: String,
    Subject_code: String,
    Maximum_marks: Number,
    Minimum_Pass_marks: Number,
    Obtained_marks_One: Number,
    Subject_Two: String,
    Subject_code: String,
    Maximum_marks: Number,
    Minimum_Pass_marks: Number,
    Obtained_marks_Two: Number,
    Grand_total: Number,
    Result: String,
    Percentage: Number,
    Division: String
});

const File = mongoose.model('File', fileSchema);

module.exports = File;
