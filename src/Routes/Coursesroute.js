import React, { Fragment } from 'react'
import Courses from '../components/Courses/Courses'
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';


const Coursesroute = () => {
  return (
    <Fragment>
      <Header/>

        <Courses/>
        <Footer/>
    </Fragment>
  )
}

export default Coursesroute