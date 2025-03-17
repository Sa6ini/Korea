import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout";
import HomePage from "./components/HomePage/HomePage";


function App() {

  return (
    <>
      <BrowserRouter>
      
        <Routes>
            <Route path="/" element = {<Layout/>}>
              <Route index element = {<HomePage/>} />
              <Route path="" element = {<></>} />
            </Route>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
