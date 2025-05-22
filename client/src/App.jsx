import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout";
import HomePage from "./components/HomePage/HomePage";
import TeacherPage from "./components/TeacherPage/TeacherPage";
import AppointmentPage from "./components/AppointmentPage/AppointmentPage";


function App() {

  return (
    <>
      <BrowserRouter>
      
        <Routes>
            <Route path="/" element = {<Layout/>}>
              <Route path="/" element = {<HomePage/>} />
              <Route path="/teacher" element = {<TeacherPage/>} />
              <Route path="/appointment" element = {<AppointmentPage/>} />
            </Route>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
