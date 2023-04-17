import React from "react";
import "./Susbcribe.css";
import { Container, Row, Col } from "reactstrap";
import SubsImg from "../Assets/subscribe.jpg";

const Subscribe = () => {
  // const toSubscribe = ()=>{
  //   document.getElementById('h').dangerouslySetInnerHTML="Whoa! You just subscribed us";
  // }
  return (
   
    <section>
      <Container>
        <Row>
          <Col lg="6">
            <div className="choose_content">
              <h2 className="mb-4">
                Subscribe Us for <br /> best courses, guidance <br /> and much
                more!
              </h2>
              <div className="search">
                <input type="text" placeholder="Enter your email.." />
                <button className="btn"> Subscribe</button>
              </div>
              <h3 id="h"></h3>
            </div>
          </Col>

          <Col lg="6">
            <div className="choose_img">
              <img src={SubsImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Subscribe;
