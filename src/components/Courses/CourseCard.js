import React from "react";
import { SlBookOpen } from "react-icons/sl";
import { FaUserTie, FaStar } from "react-icons/fa";

const CourseCard = (props) => {

    const{imgUrl, title, lesson, students, rating} = props.item
  return (
    <div className="single_course_item">
      <div className="course_img">
        <img src={imgUrl} alt="" className="w-100" />
      </div>
      <div className="course_details">
        <h6 className="course_title mb-4">
         {title}
        </h6>

        <div className="maindiv">
          <p className="lesson">
            <i>
              <SlBookOpen />
            </i>{" "}
            {lesson} Lessons
          </p>

          <p className="students">
            <i>
              <FaUserTie />
            </i>{" "}
            {students} students
          </p>
        </div>

        <div className="maindiv">
          <p className="rating">
            <i>
              <FaStar />
            </i>{" "}
            {rating}+
          </p>

          <p className="enroll">
            <a href="#">Enroll</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
