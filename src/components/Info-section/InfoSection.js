import React from "react";
import { Container, Row, Col } from "reactstrap";
import img1 from '../Assets/testimonial01.png'
import './InfoSection.css'
const InfoSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="info_content">
              <h2>Learn Anywhere <br/> Learn Anytime <br/> At your own comfort</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur      <br/>adipisicing elit.
                Suscipit velit quod beatae similique a, minima sequi dolores,
                cupiditate <br/> pariatur, animi quia iusto cumque. Accusamus dolores
                provident aspernatur aliquam optio? Maiores.
              </p>

            </div>
          </Col>
          <Col lg="6" md="6">
            <img src={img1} alt="img1" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default InfoSection;
