import React, { Fragment } from 'react'
import ChooseUs from '../components/WhyUs/ChooseUs'
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';


const WhyUsroute = () => {
  return (
    <Fragment>
      <Header/>

        <ChooseUs/>
        <Footer/>
    </Fragment>
  )
}

export default WhyUsroute