const express = require("express");
const multer = require("multer");
const XLSX = require("xlsx");
const path = require("path");
const File = require("../models/File"); // Adjust path if needed
const router = express.Router();

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Endpoint to upload an Excel file
router.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const filePath = req.file.path;

    // Read and parse the Excel file
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);

    // Log parsed data to console
    console.log("Parsed Excel Data:", jsonData);

    if (jsonData.length > 0) {
      // Save data to MongoDB
      const result = await File.insertMany(jsonData);
      console.log("Database Insert Result:", result); // Log result of insertion

      res.status(201).send("File uploaded and data saved successfully");
    } else {
      res.status(400).send("No data found in the file");
    }
  } catch (error) {
    console.error("Error:", error); // Log detailed error
    res.status(500).send("Error uploading file");
  }
});

// Endpoint to search for a student by Enroll_No
router.get("/search", async (req, res) => {
  const enrollNo = req.query.enrollNo; // Get Enroll_No from query parameters

  if (!enrollNo) {
    return res.status(400).send("Enroll_No is required");
  }

  try {
    const students = await File.find({ Enroll_No: enrollNo });

    if (students.length > 0) {
      res.status(200).json(students);
    } else {
      res.status(404).send("No students found with the given Enroll_No");
    }
  } catch (error) {
    console.error("Error:", error); // Log detailed error
    res.status(500).send("Error retrieving student data");
  }
});

// Endpoint to pre-fill marksheet by Enroll_No
// router.get("/marksheet", async (req, res) => {
//   const enrollNo = req.query.enrollNo;

//   if (!enrollNo) {
//     return res.status(400).send("Enroll_No is required");
//   }

//   try {
//     const student = await File.findOne({ Enroll_No: enrollNo });

//     if (student) {
//       res.status(200).json(student);
//     } else {
//       res.status(404).send("No student found with the given Enroll_No");
//     }
//   } catch (error) {
//     console.error("Error:", error); 
//     res.status(500).send("Error retrieving student data");
//   }
// });

module.exports = router;
