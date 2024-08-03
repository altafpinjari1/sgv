import React from 'react'
import { Link } from 'react-router-dom'




function Courses() {
  const Courses = [
    {
      title: 'CMS & ED',
      subtitle: '(Community Health And Essential Drugs)',
      eligiblity: '12th Pass',
      duration: '18 MONTH'
    },
    {
      title: 'CCCH',
      subtitle: '(Certificate Course in community Health)',
      eligiblity: '12th Pass',
      duration: '1 Year'
    },
    {
      title: 'DNYS',
      subtitle: '(Diploma in Naturopathy & Yoga Science)',
      eligiblity: '12th Pass',
      duration: '3 Year'
    },
    {
      title: 'GDA',
      subtitle: '(General Duty Assistant)',
      eligiblity: '10th Pass',
      duration: '3 MONTH'
    },
    {
      title: 'DP',
      subtitle: '(Diploma in Physiotherapy)',
      eligiblity: '12th Pass',
      duration: '3 Year'
    },
    {
      title: 'EMT',
      subtitle: '(Emergency Medical Technician)',
      eligiblity: '12th Pass',
      duration: '1 Year'
    },
    {
      title: 'DSCA',
      subtitle: '(Diploma in Skin & Cosmetic Assistant)',
      eligiblity: 'MEDICAL DEGREE',
      duration: '1 Year'
    },
    {
      title: 'M.D. AM',
      subtitle: '(M.D. in Alternative Medicine)',
      eligiblity: 'MEDICAL DEGREE/DNYS',
      duration: '1 Year'
    },
    {
      title: 'M.D. in CR',
      subtitle: 'M.D. in Cardiac Rehabilitation',
      eligiblity: 'MEDICAL DEGREE/DNYS',
      duration: '1 Year'
    },
    {
      title: 'Panchkarma',
      subtitle: '',
      eligiblity: '12th Pass',
      duration: '1 Year'
    },
    {
      title: 'Certificate in Yoga',
      subtitle: '',
      eligiblity: '12th Pass',
      duration: '6 months'
    },
    {
      title: 'M.D. in Acupressure',
      subtitle: '',
      eligiblity: 'MEDICAL DEGREE/DNYS',
      duration: '1 Year'
    },
    {
      title: 'M.D. in Acupressure',
      subtitle: '',
      eligiblity: 'MEDICAL DEGREE/DNYS',
      duration: '1 Year'
    },
    {
      title: 'M.D. in Neuro Rehabilitation',
      subtitle: '',
      eligiblity: 'MEDICAL DEGREE/DNYS',
      duration: '1 Year'
    },
    {
      title: 'M.D. in Gynecology & Obstetrics (A.M.)',
      subtitle: '',
      eligiblity: 'MEDICAL DEGREE/DNYS',
      duration: '1 Year'
    },

    {
      title: 'Certificate Course in Dermatology',
      subtitle: '',
      eligiblity: 'MEDICAL DEGREE',
      duration: '6 Months'
    },
    {
      title: 'Fellowship in Dermatology',
      subtitle: '',
      eligiblity: 'MEDICAL DEGREE',
      duration: '1 Year'
    },
    {
      title: 'Certificate in General Practice',
      subtitle: '',
      eligiblity: 'MEDICAL DEGREE',
      duration: '6 Months'
    },
  ]
  return (
    <>
      <section className='w-full bg-[#323D66] py-4'>
        <h2 className='w-10/12 m-auto text-2xl text-[#FFF]'>Our Courses</h2>
      </section>

      <section className='w-full h-fit flex flex-col justify-center items-center py-20'>
        <div className='text-center'>
          <h1 className='text-3xl md:text-4xl font-semibold text-[#323D66]'>Our Programs</h1>
          <p className='text-2xl font-light md:text-2xl font-light md:w-8/12 m-auto pt-2'>With the objective to extend & furnish education & training in Paramedical We Offer Following Courses</p>
        </div>

        <div className="w-10/12 m-auto flex justify-between flex-wrap gap-2 mt-10">
          {Courses.map((course, index) => (
            <div key={index} className="w-full md:w-[46%] xl:w-[30%] flex flex-col  bg-white border shadow-xl rounded-xl mb-6">
              <div className="p-4 md:p-5">
                <h3 className="text-2xl text-gray-800">
                  <i class="ri-graduation-cap-line"></i>
                </h3>
                <h3 className="text-lg font-bold text-[#323D66]">
                  {course.title}
                </h3>
                <p className="mt-2 text-gray-500">
                  {course.subtitle}
                </p>
              </div>
              <div className="flex justify-between bg-[#323D66] border-t rounded-b-xl py-3 px-4 md:py-4 md:px-5">
                <p className="mt-1 text-sm text-gray-100">
                  Eligiblity : {course.eligiblity}
                </p>
                <p className="mt-1 text-sm text-gray-100">
                  Duration : {course.duration}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Courses