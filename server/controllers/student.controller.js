import Student  from "../models/student.model";

export const onlineAdmission = async (req, res) => {
  try {
    const {
      subject,
      studentName,
      fatherName,
      motherName,
      DOB,
      category,
      gender,
      mobileNumber,
      email,
      address,
      pinCode,
      state,
      adhaar,
      qualification,
      collageCode,
      studyMode,
      examMode,
      studentImage,
      studentSignature,
      document
    } = req.body;
    if (
      !subject ||
      !studentName ||
      !fatherName ||
      !motherName ||
      !DOB ||
      !category ||
      !gender ||
      !mobileNumber ||
      !email ||
      !address ||
      !pinCode ||
      !state ||
      !adhaar ||
      !qualification ||
      !collageCode ||
      !studyMode ||
      !examMode || !studentImage || !studentSignature || !document
    )
      return res
        .status(400)
        .json({ message: " All fields are required", success: false });

    await Student.create({
      subject,
      studentName,
      fatherName,
      motherName,
      DOB,
      category,
      gender,
      mobileNumber,
      email,
      address,
      pinCode,
      state,
      adhaar,
      qualification,
      collageCode,
      studyMode,
      examMode,
      studentImage,
      studentSignature,
      document
    });

    return res.status(201).json({
        message:"Admission application send successfully",
        success:true
    })
  } catch (error) {
    console.log(error);
  }
};

