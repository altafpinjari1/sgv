import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true,
  },
  studentName: {
    type: String,
    required: true,
  },
  fatherName: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  DOB: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  pinCode: {
    type: Number,
    required: true,
  },
  qualification: {
    type: String,
    required: true,
  },
  adhaar: {
    type: Number,
    required: true,
  },
  collageCode: {
    type: String,
    required: true,
  },
  studyMode: {
    type: String,
    required: true,
  },
  examMode: {
    type: String,
    required: true,
  },
  studentImage: {
    type: Buffer,
    contentType: String,
    // required: false,
  },
  studentSignature: {
    ttype: Buffer,
    contentType: String,
    // required: false,
  },
  document: {
    type: Buffer,
    contentType: String,
    // required: false,
  },
});

// export const Student = mongoose.model("OnlineAdmission", studentSchema);
