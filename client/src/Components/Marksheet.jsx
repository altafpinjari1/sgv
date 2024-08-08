import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import marksheet from "../assets/images/marksheet.png";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function Marksheet() {
  const location = useLocation();
  const { student } = location.state || {}; // Access student data from state
  const marksheetRef = useRef();
  console.log("here is our data for marksheet", marksheetRef);
  const downloadMarksheet = () => {
    const input = marksheetRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("marksheet.pdf");
    });
  };

  if (!student) {
    return <div>No data available</div>;
  }

  return (
    <>
      <section className="w-full min-h-screen overflow-hidden">
        <div className="w-full md:w-10/12 m-auto shadow-sm rounded border-2 mt-10">
          <h4 className="w-full bg-[#323D66] py-4 px-2 text-xl text-white">
            Download Marksheet
          </h4>
          <div
            className="relative w-11/12 md:w-6/12 m-auto shadow border-2 my-2 bg-red-300"
            ref={marksheetRef}
          >
            <div className="absolute w-full h-full uppercase">
              <div className="absolute md:top-[56px] md:right-[60px] top-[23px] right-[35px]">
                <span className="text-[6px] md:text-[12px]">
                  {student.Roll_No}
                </span>
              </div>
              <div className="W-full absolute md:top-[358px] md:left-[71px] flex items-center justify-between">
                <span className="w-[57px] text-[10px] font-semibold text-center">
                  {student.Year_sem}
                </span>
                <span className="w-[150.4px] text-[10px] font-semibold text-center">
                  {student.Enroll_No}
                </span>
                <span className="w-[87px] text-[10px] font-semibold text-center">
                  {student.Course_Code}
                </span>
                <span className="w-[88px] text-[10px] font-semibold text-center">
                  {student.Exam_Type}
                </span>
                <span className="w-[110px] text-[10px] font-semibold text-center">
                  {student.Regular_Private}
                </span>
              </div>
              <div className="W-full absolute md:top-[398px] md:left-[120px] flex items-center justify-between">
                <span className="w-[326px] text-[10px] font-semibold">
                  {student.Name}
                </span>
                <span className="w-[110px] text-[10px] font-semibold">
                  {student.Division}
                </span>
              </div>
              <div className="W-full absolute md:top-[426px] md:left-[164px] flex items-center justify-between">
                <span className="w-[310px] text-[10px] font-semibold">
                  {student.
                    Father_name}
                </span>
                <span className="w-[110px] text-[10px] font-semibold">
                  {student.Course_Duration} Years
                </span>
              </div>
              <div className="W-full absolute md:top-[454px] md:left-[164px] flex items-center justify-between">
                <span className="w-[310px] text-[10px] font-semibold">
                  {student.Institute_Name}
                </span>
              </div>

              {/* Ensure that student.Subjects is an array before mapping */}
              {/* {(student.map((subject, index) => ( */}
              <div
                // key={index}
                className="W-full absolute md:top-[560px] md:left-[91px] flex items-center justify-between"
              >
                <span className="w-[60px] text-[10px] font-semibold text-center">
                  {student.Subject_code}
                </span>
                <span className="w-[159px] text-[10px] font-semibold text-center">
                  {student.Subject_one}
                </span>
                <span className="w-[74px] text-[10px] font-semibold text-center">
                  {student.Maximum_marks}
                </span>
                <span className="w-[82px] text-[10px] font-semibold text-center">
                  {student.Minimum_Pass_marks}
                </span>
                <span className="w-[80px] text-[10px] font-semibold text-center">
                  {student.Obtained_marks_One}
                </span>
              </div>
              {/* for subjet two  */}
              <div
                // key={index}
                className="W-full absolute md:top-[580px] md:left-[91px] flex items-center justify-between"
              >
                <span className="w-[60px] text-[10px] font-semibold text-center">
                  {student.Subject_code}
                </span>
                <span className="w-[159px] text-[10px] font-semibold text-center">
                  {student.Subject_Two}
                </span>
                <span className="w-[74px] text-[10px] font-semibold text-center">
                  {student.Maximum_marks}
                </span>
                <span className="w-[82px] text-[10px] font-semibold text-center">
                  {student.Minimum_Pass_marks}
                </span>
                <span className="w-[80px] text-[10px] font-semibold text-center">
                  {student.Obtained_marks_Two}
                </span>
              </div>
              {/* ))} */}

              <div className="W-full absolute md:top-[728px] md:left-[310px] flex items-center justify-between">
                <span className="w-[74px] text-[10px] font-semibold text-center">
                  {student.Grand_total}
                </span>
                <span className="w-[82px] text-[10px] font-semibold text-center">
                  {student.Maximum_marks}
                </span>
                <span className="w-[78px] text-[10px] font-semibold text-center">
                  {student.Percentage}
                </span>
              </div>
              <div className="W-full absolute md:top-[768px] md:left-[140px] flex items-center justify-between">
                <span className="w-[210px] text-[10px] font-semibold">
                  {student.Grand_total}
                </span>
                <span className="w-[140px] text-[10px] font-semibold">
                  {student.Maximum_marks}
                </span>
                <span className="w-[78px] text-[10px] font-semibold">
                  {student.Percentage}
                </span>
              </div>
            </div>
            <img src={marksheet} alt="Marksheet Background" />
          </div>
          <div className="w-6/12 m-auto my-10">
            <button
              type="submit"
              className="bg-[#323D66] text-[#FFF] py-2 px-10 rounded-md flex items-center justify-center gap-2"
              onClick={downloadMarksheet}
            >
              Download Marksheet
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Marksheet;