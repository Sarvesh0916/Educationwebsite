import React, { Fragment } from 'react';
import Header from '../components/Header/Header';
import InfoSection from '../components/Info-section/InfoSection';
import About from '../components/About/About';
import Courses from '../components/Courses/Courses';
import ChooseUs from '../components/WhyUs/ChooseUs';
import Features from '../components/Features/Features';
import Subscribe from '../components/Subscribe/Subscribe';
import Footer from '../components/Footer/Footer';
const Home = () => {
  return (
<Fragment>
  <Header/>
  <InfoSection/>
  <About/>
  <Courses/>
  <ChooseUs/>
  <Features/>
  <Subscribe/>
  <Footer/>
</Fragment>  
)
}

export default Home