

import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import './Features.css';
import {RiDraftLine,RiDiscussLine} from 'react-icons/ri';
import {FaAddressBook} from 'react-icons/fa';

// const FeatureData= [
//     {
//         title:'Fast Learning',
//         desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, consequuntur.",
//         icon:'RiDraftLine'
//     },

//     {
//         title:'24X7 virtual support',
//         desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, consequuntur.",
//         icon:'RiDiscussLine'
//     },

//     {
//         title:'Certifications',
//         desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, consequuntur.",
//         icon:'FaAddressBook'
//     },

    

const Features = () => {
  return (
    <section>
        <Container>
            <Row>
                
                <Col lg='4' md="6">
                    <div className="single_feature">
                        <h2 className='mb-3'><i><RiDraftLine/></i></h2>
                        <h6>Fast Learning</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, consequuntur.</p>
                    </div>
                </Col>

                <Col lg='4' md='6'>
                    <div className="single_feature">
                        <h2 className='mb-3'><i><RiDiscussLine/></i></h2>
                        <h6>24X7 virtual support</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, consequuntur.</p>
                    </div>
                </Col>

                <Col lg='4' md="6">
                    <div className="single_feature">
                        <h2 className='mb-3'><i><FaAddressBook/></i></h2>
                        <h6>Certifications</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, consequuntur.</p>
                    </div>
                </Col>

               
            </Row>
        </Container>
    </section>
   )
}

export default Features