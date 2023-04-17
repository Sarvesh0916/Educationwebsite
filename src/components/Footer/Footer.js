

import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import {FaPhone,FaFacebook, FaLinkedin, FaGithub, FaTwitter} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi'
import './Footer.css'

const footerQuickLinks= [
    {
        display:'Home',
        url: '#Home'
    },
    {
        display:'About',
        url: '#About'
    },
    {
        display:'Courses',
        url: '#Courses'
    },
    {
        display:'Why Us',
        url: '#WhyUs'
    },
    {
        display:'Subscribe',
        url: '#Subscribe'
    },

]

const Footer = () => {
  return (
    <footer className="footer">
        <Container>
            <Row>
                <Col lg='3'>
                    
                    <div className="row">
                        <div className="contact-left">
                            <h1 className="sub-title">Reach out to Us</h1>
                            <p><i><FaPhone/></i>6386765823</p>
                            <p><i><HiOutlineMail/></i>misshrasarvesh16@gmail.com</p>
                            <div className="social-icons">
                                <a href="https://www.linkedin.com/in/sarvesh-mishra-410522202/ " target='blank'><i><FaLinkedin/></i></a>
                                <a href="https://twitter.com/Sarvesh50926597" target='blank'><i><FaTwitter/></i></a>
                                <a href="https://www.facebook.com/profile.php?id=100023855988754" target='blank'><i><FaFacebook/></i></a>
                                <a href="https://github.com/Sarvesh0916" target='blank'><i><FaGithub/></i></a>
                            </div>
                        </div>
                    </div>
                </Col>

                <Col lg='3'>
                    <h6 className='fw-bold'>Explore</h6>
                    <ListGroup>
                        {
                            footerQuickLinks.map((item,index)=>(
                                <ListGroupItem key={index} className='border-0 ps-0'>  <a href={item.url}>{item.display}</a></ListGroupItem>
                            ))
                        }
                    </ListGroup>
                </Col>

                <Col lg='3'>
                    <h6 className='fw-bold'>Get in Touch</h6>

                    <p> Address: Gorakhpur, Uttar Pradesh India</p>

                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer