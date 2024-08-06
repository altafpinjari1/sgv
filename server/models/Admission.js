const mongoose = require('mongoose');

const AdmissionSchema = new mongoose.Schema({
    subject: { type: String, required: true },
    studentName: { type: String, required: true },
    fatherName: { type: String, required: true },
    motherName: { type: String, required: true },
    DOB: { type: Date, required: true },
    category: { type: String, required: true },
    gender: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    pinCode: { type: String, required: true },
    state: { type: String, required: true },
    adhaar: { type: String, required: true },
    qualification: { type: String, required: true },
    collageCode: { type: String, required: true },
    studyMode: { type: String, required: true },
    examMode: { type: String, required: true },
    studentImage: { type: String, required: true },
    studentSignature: { type: String, required: true },
    document: { type: String, required: true }
});

module.exports = mongoose.model('Admission', AdmissionSchema);
