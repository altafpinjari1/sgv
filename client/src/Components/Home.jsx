import React, { useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


//img
import img1 from '../assets/images/woman-3053492_1920.jpg'
import img2 from '../assets/images/img2.1.jpg'
import img3 from '../assets/images/img3.jpg'
import img4 from '../assets/images/img4.jpg'
import img5 from '../assets/images/img5.jpg'

import studentimg from '../assets/images/student.jpg'


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
]

function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [subject, setSubject] = useState('');
  const [query, setQuery] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', { name, email, phoneNumber, subject, query });
    // Add your form submission logic here
  };
  return (
    <>
      <section>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 12500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper w-[99%] h-[80vh] rounded overflow-hidden text-white"
        >
          <SwiperSlide className='swiper-slide'
            style={{ backgroundImage: `url(${img1})` }}
          >
            <div className='w-full h-full flex flex-col justify-center gap-2'>
              <h2 className='text-3xl md:text-5xl font-bold'>Diploma in Naturopathy and Yogic Science</h2>
              <h2 className='text-2xl md:text-4xl font-semibold md:font-bold'>Bachelor of Naturopathy & Yogic Sciences</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide id="slide-img2"
            style={{ backgroundImage: `url(${img2})` }}
          >
            <div className='w-full h-full flex flex-col justify-center gap-2'>
              <h2 className='text-2xl md:text-5xl font-bold'>Bachelor of Physiotherapy</h2>
              <h2 className='text-2xl md:text-5xl font-bold'>Diphtheria-Pertussis-Tetanus vaccine</h2>
              <h2 className='text-2xl md:text-5xl font-bold'>(DPT/BPT)</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide id="slide-img3"
            style={{ backgroundImage: `url(${img3})` }}
          >
            <div className='w-full h-full flex flex-col justify-center gap-2'>
              <h2 className='text-5xl font-bold'>Erectile dysfunction</h2>
              <h2 className='text-5xl font-bold'>Centers for Medicare & Medicaid Services</h2>
              <h2 className='text-5xl font-bold'>CMS/ED</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide id="slide-img4"
            style={{ backgroundImage: `url(${img4})` }}
          >
            <div className='w-full h-full flex flex-col justify-center gap-2'>
              <h2 className='text-5xl font-bold'>Certificate course in community health</h2>
              <h2 className='text-5xl font-bold'>(CCCH)</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide id="slide-img5"
            style={{ backgroundImage: `url(${img5})` }}
          >
            <div className='w-full h-full flex flex-col justify-center gap-2'>
              <h2 className='text-5xl font-bold'>Paramedical</h2>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      <section className='w-full m-auto md:h-[70vh] py-10 text-center flex items-center flex-col md:flex-row gap-10'>
        <div className='w-11/12 md:w-8/12 px-6'>
          <h1 className='text-2xl md:text-3xl font-medium'>"Swami Gurdashanand Vidhyapeeth An autonomous</h1>
          <h1 className='text-2xl md:text-3xl font-medium'>institute under Swami Gurdashanand Vidhyapeeth Council"</h1>
        </div>
        <div className='w-11/12 md:w-3/12 h-72 px-6 border-2 rounded-xl shadow-sm md:shadow-lg' >
          <div className='w-full text-end text-3xl pt-4 text-red-600'>
            <i class="ri-pushpin-fill"></i>
          </div>
          <ul className="space-y-2 text-start">
            <li className='animate-bounce'>
              <Link to="/OnlineAdmission" className="text-lg text-red-500 hover:text-gray-300 shine-red shine-royalblue"> Online Admission
              </Link>
            </li>
            {/* <li>
              <Link to="/OnlineAdmission" className="text-sm text-red-500 hover:text-gray-300 blink shine-red shine-royalblue">
                Online Admission(Second/Third Year/Sem)
              </Link>
            </li> */}
          </ul>
        </div>
      </section>

      <section className='w-full h-fit md:h-[90vh] flex flex-col justify-center items-center '>
        <div className='text-center'>
          <h1 className='text-3xl md:text-4xl font-semibold text-[#323D66]'>Our Programs</h1>
          <p className='text-2xl font-light md:text-2xl md:w-8/12 m-auto pt-2'>With the objective to extend & furnish education & training in Paramedical We Offer Following Courses</p>
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
        <div className='w-8/12 md:w-2/12 m-auto my-4'>
          <Link to='/Courses' className='bg-[#323D66] text-[#FFF] py-2 px-6 rounded-md flex items-center justify-center gap-2'>More Courses <i class="ri-arrow-right-line"></i></Link>
        </div>
      </section>

      <section className='w-full md:w-10/12 m-auto h-fit md:h-screen px-2 flex flex-col justify-center items-start mt-0 md:mt-10 py-10'>
        <div className='mt-20'>
          <h1 className='text-2xl md:text-4xl font-semibold text-[#323D66] pb-4'>Swami Gurdashanand Vidhyapeeth</h1>
        </div>

        <div className='w-full m-auto'>
          <p className='text-lg md:text-2xl font-light py-1 text-slate-500'>
            Welcome to Swami Gurdashanand Vidhyapeeth, a premier educational institution dedicated to providing high-quality medical education to aspiring students. Our mission is to empower the next generation of healthcare professionals with the knowledge, skills, and values necessary to excel in their chosen careers.
          </p>
          <p className='text-lg md:text-2xl font-light py-1 text-slate-600'>
            At Swami Gurdashanand Vidhyapeeth, we offer a range of medical courses designed to cater to the diverse needs of students. Our programs include CMS Ed, CCCH, BPT, DMLT, and BNYS, all of which are carefully crafted to provide students with a comprehensive understanding of the medical field. Our experienced faculty, state-of-the-art infrastructure, and innovative teaching methods ensure that our students receive a world-class education that prepares them for success.
          </p>
          <p className='text-lg md:text-2xl font-light py-1 text-slate-600'>
            Our institution is committed to fostering a culture of excellence, innovation, and social responsibility. We believe that education should not only equip students with knowledge but also instill in them the values of compassion, empathy, and service to humanity. Our students are encouraged to think critically, solve problems creatively, and develop a passion for lifelong learning.
          </p>
          <p className='text-lg md:text-2xl font-light py-1 text-slate-600'>
            At Swami Gurdashanand Vidhyapeeth, we are dedicated to producing highly skilled and dedicated healthcare professionals who can make a positive impact in the world. We invite you to explore our website and discover the opportunities that await you at our institution.
          </p>

        </div>
      </section>

      <section className='w-full m-auto h-fit md:h-[82vh] py-10 md:py-20 bg-slate-100'>
        <div className='w-10/12 m-auto flex justify-between flex-col md:flex-row gap-2'>
          <div className='relative w-full md:w-5/12 h-full flex justify-center items-center'>
            <div className='absolute top-[4%] left-6 w-[50vh] md:w-[65vh] md:h-[54vh] bg-[#323D66] rounded'></div>
            <img src={studentimg} alt="" className='z-[1] p-2 rounded-xl' />
          </div>
          <div className='w-full md:w-5/12 h-fit md:p-10'>
            <h2 className='text-2xl md:text-4xl font-semibold text-[#323D66]'>Get Enquiry</h2>
            <form onSubmit={handleSubmit} className='py-10'>
              <div className="mb-4">
                <input
                  className="border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder='Enter Name'
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder='Enter Email'
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="phoneNumber"
                  type="tel"
                  placeholder='Enter Phone Number'
                  value={phoneNumber}
                  onChange={(event) => setPhoneNumber(event.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="subject"
                  type="text"
                  placeholder='Enter Subject'
                  value={subject}
                  onChange={(event) => setSubject(event.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <textarea
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="query"
                  placeholder='Enter Message'
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  required
                />
              </div>
              <button type='submit' className='bg-[#323D66] text-[#FFF] py-2 px-6 rounded-md flex items-center justify-center gap-2'>Submit Query <i class="ri-arrow-right-line"></i></button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home