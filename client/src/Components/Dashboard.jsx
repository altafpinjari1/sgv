import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Dashboard() {
  const location = useLocation();
  const { username } = location.state || {};
  const [queriesStudent, setQueriesStudent] = useState([]);
  const [admissions, setAdmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [file, setFile] = useState(null);
  const [result, setResult] = useState("");

  useEffect(() => {
    const fetchQueries = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/query");
        if (!response.ok) {
          throw new Error("Failed to fetch queries");
        }
        const data = await response.json();
        setQueriesStudent(data);
      } catch (error) {
        console.error("Error fetching queries:", error);
      }
    };

    fetchQueries();
  }, []);

  // Fetch all student admissions
  useEffect(() => {
    const fetchAdmissions = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/admission/admissions"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setAdmissions(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAdmissions();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // for upload file
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:5000/api/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const resultText = await response.text();
        setResult(`Success: ${resultText}`);
        alert(`Success: ${resultText}`);
        setFile(null);
        document.getElementById("fileInput").value = "";
      } else {
        const errorText = await response.text();
        setResult(`Error: ${errorText}`);
        alert(`Error: ${errorText}`);
      }
    } catch (error) {
      setResult(`Error: ${error.message}`);
      alert(`Error: ${error.message}`);
    }
  };

  // Student Query data
  const EnquiryHeaders = [
    "Sr.No.",
    "Full Name",
    "Email",
    "Phone No.",
    "Subject",
    "Query",
  ];

  // Online admission data
  const AdmissionHeaders = [
    "Sr.No.",
    "Subject",
    "StudentName",
    "FatherName",
    "MotherName",
    "DOB",
    "Category",
    "Gender",
    "MobileNumber",
    "Email",
    "Address",
    "PinCode",
    "State",
    "Adhaar",
    "Qualification",
    "CollageCode",
    "StudyMode",
    "ExamMode",
    "StudentImage",
    "StudentSignature",
    "Document",
  ];

  // Define widths for the headers
  const EnquiryWidths = [
    60, // Header 1 width
    500, // Header 2 width
    230, // Header 3 width
    250, // Header 4 width
    150, // Header 5 width
    400, // Header 6 width
  ];

  const AdmissionWidths = [
    60, // Header 1 width
    400, // Header 2 width
    230, // Header 3 width
    250, // Header 4 width
    200, // Header 5 width
    130, // Header 6 width
    100, // Header 7 width
    100, // Header 8 width
    140, // Header 9 width
    240, // Header 10 width
    300, // Header 11 width
    130, // Header 12 width
    100, // Header 13 width
    120, // Header 14 width
    140, // Header 15 width
    120, // Header 16 width
    120, // Header 17 width
    120, // Header 18 width
    150, // Header 19 width
    150, // Header 20 width
  ];

  return (
    <>
      <p className="px-10">Welcome, {username}!</p>
      <div className="w-full min-h-screen my-10">
        <div className="w-11/12 m-auto shadow-sm rounded border-2 mt-2">
          <h4 className="w-full bg-[#323D66] py-4 px-2 text-xl text-white">
            Upload Result
          </h4>
          <div className="w-6/12 m-auto flex flex-col gap-2 py-4">
            <input
              id="fileInput"
              type="file"
              accept=".xlsx"
              onChange={handleFileChange}
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <button
              type="button"
              onClick={handleUpload}
              className="mt-2 bg-blue-500 text-white py-2 px-4 rounded"
            >
              Upload
            </button>
            <div className="mt-4">{result}</div>
          </div>
        </div>

        <div className="w-11/12 m-auto shadow-sm rounded border-2 mt-2">
          <h4 className="w-full bg-[#323D66] py-4 px-2 text-xl text-white">
            Student Enquiry
          </h4>
          <div className="w-full h-[50vh] overflow-hidden overflow-x-scroll overflow-y-scroll">
            <table className="table-auto w-full">
              <thead
                className="bg-green-500"
                style={{ position: "sticky", top: 0, color: "white" }}
              >
                <tr className="flex gap-1">
                  {EnquiryHeaders.map((header, index) => (
                    <th
                      key={index}
                      style={{ width: `${EnquiryWidths[index]}px` }}
                      className="flex px-4 py-2 border-b border-gray-200"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {queriesStudent.map((row, index) => (
                  <tr key={index} className="flex gap-1 bgoder-r-2">
                    <td
                      style={{ width: `${EnquiryWidths[0]}px` }}
                      className="px-4 py-2 border-b border-gray-200"
                    >
                      {index + 1}
                    </td>
                    {Object.keys(row).map(
                      (key, idx) =>
                        idx !== 0 && ( // Skip the first key which we use for Sr.No.
                          <td
                            key={idx}
                            style={{ width: `${EnquiryWidths[idx]}px` }}
                            className="px-4 py-2 border-b border-gray-200"
                          >
                            {row[key]}
                          </td>
                        )
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="w-11/12 m-auto shadow-sm rounded border-2 mt-2">
          <h4 className="w-full bg-[#323D66] py-4 px-2 text-xl text-white">
            New Admission
          </h4>
          <div className="w-full h-[50vh] overflow-hidden overflow-x-scroll overflow-y-scroll">
            <table className="table-auto w-full">
              <thead
                className="bg-green-500"
                style={{ position: "sticky", top: 0, color: "white" }}
              >
                <tr className="flex gap-1 bgoder-r-2 border-lime-500">
                  {AdmissionHeaders.map((header, index) => (
                    <th
                      key={index}
                      style={{ width: `${AdmissionWidths[index]}px` }}
                      className="flex px-4 py-2 border-b border-gray-200"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {admissions.map((row, index) => (
                  <tr key={index} className="flex gap-1 bgoder-r-2">
                    <td
                      style={{ width: `${AdmissionWidths[0]}px` }}
                      className="px-4 py-2 border-b border-gray-200"
                    >
                      {index + 1}
                    </td>
                    {Object.keys(row).map(
                      (key, idx) =>
                        idx !== 0 && ( // Skip the first key which we use for Sr.No.
                          <td
                            key={idx}
                            style={{ width: `${AdmissionWidths[idx]}px` }}
                            className="px-4 py-2 border-b border-gray-200"
                          >
                            {row[key]}
                          </td>
                        )
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
