import React, { Fragment } from 'react'
import About from '../components/About/About'
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const Aboutroute = () => {
  return (
    <Fragment>
      <Header/>
        <About/>
    <Footer/>
    </Fragment>
    
  )
}

export default Aboutroute