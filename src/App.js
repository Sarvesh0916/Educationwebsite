import React from 'react'
import "./App.css"
import Home from './pages/Home';
import Homeroute from './Routes/Homeroute';
import Aboutroute from './Routes/Aboutroute';
import Coursesroute from './Routes/Coursesroute';
import WhyUsroute from './Routes/WhyUsroute';
import Subscriberoute from './Routes/Subscriberoute';
import {Route, Routes} from 'react-router-dom';
const App = () => {
  return (
    <>
    <Routes>
      <Route path = "/" element={<Home/>}/>
      <Route path='/Home' element={<Homeroute/>}/>
      <Route path='/About' element={<Aboutroute/>}/>
      <Route path='/Courses' element={<Coursesroute/>}/>
      <Route path='/WhyUs' element={<WhyUsroute/>}/>
      <Route path='/Subscribe' element={<Subscriberoute/>}/>
    </Routes>
    </>
  )
}

export default App