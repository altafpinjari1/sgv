import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './Components/Home.jsx'
import Recognition from './Components/Recognition.jsx'
import Courses from './Components/Courses.jsx'
import Members from './Components/Members.jsx'
import Career from './Components/Career.jsx'
import OnlineAdmission from './Components/OnlineAdmission.jsx'
import Login from './Components/Login.jsx'
import Dashboard from './Components/Dashboard.jsx'
import Result from './Components/Result.jsx'
import Marksheet from './Components/Marksheet.jsx'
import AdmissionReceipt from './Components/AdmissionReceipt.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "/Recognition",
        element: <Recognition />
      },
      {
        path: "/Courses",
        element: <Courses />
      },
      {
        path: "/Members",
        element: <Members />
      },
      {
        path:"/Career",
        element: <Career/>
      },
      {
        path:"/OnlineAdmission",
        element: <OnlineAdmission/>
      },
      {
        path:"/AdmissionReceipt/:id",
        element: <AdmissionReceipt/>
      },
      {
        path:"/Result",
        element: <Result/>
      },
      {
        path:"/Marksheet",
        element: <Marksheet/>
      },
      {
        path:"/Login",
        element: <Login/>
      },
      {
        path:"/Dashboard",
        element: <Dashboard/>
      },
      

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
