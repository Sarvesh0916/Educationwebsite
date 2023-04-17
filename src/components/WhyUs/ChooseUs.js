import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import chooseImg from '../Assets/why-us.jpg';
import './ChooseUs.css';

const ChooseUs = () => {
  return (
    <section>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className="choose_content">
                        <h2>Why you should <br/> choose Us?</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid facere esse reprehenderit. Dignissimos mollitia, consequatur sed molestias eius unde ducimus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus totam nam consequatur quibusdam perferendis maiores Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, rem.</p>
                    </div>
                </Col>

                <Col lg='6'>
                    <div className="choose_img">
                        <img src={chooseImg} alt="" className='w-100' />

                    
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default ChooseUs;