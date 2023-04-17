import React from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../Assets/webdev.jpg";
import courseImg2 from "../Assets/dsa.jpg";
import courseImg3 from "../Assets/cpp.jpg";
import {Link} from 'react-router-dom';

import "./Courses.css";
import CourseCard from "./CourseCard";

const coursesData = [
  {
    id: "01",
    title: "Full Stack Web Development-2023 for Beginners",
    lesson: 93,
    students: 340,
    rating: 290,
    imgUrl: courseImg1,
  },
  {
    id: "02",
    title: "Complete Data Structures & Algorithms-2023",
    lesson: 74,
    students: 562,
    rating: 433,
    imgUrl: courseImg2,
  },
  {
    id: "03",
    title: "C++ : from Beginners to Advanced-2022",
    lesson: 56,
    students: 410,
    rating: 360,
    imgUrl: courseImg3,
  },
];
const Courses = () => {
  return (
    <section>
      <Container>
        <Row>
            <Col lg='12' className="mb-5">
                <div className="course_top">
                    <div className="course_top_left w-50">
                        <h2>Popular Courses</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda amet, voluptatibus laudantium quam dolores aut voluptates animi pariatur excepturi suscipit?</p>
                    </div>
                    <div className="w-50 text-end">
                    <Link to="/Courses" className="btn">Explore</Link>
                    </div>
                </div>
            </Col>
          {coursesData.map((item) => (
            <Col lg="4" md="6">
              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Courses;
