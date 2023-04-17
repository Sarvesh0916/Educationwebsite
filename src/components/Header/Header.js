import React, {useRef} from "react";
import { Container } from "reactstrap";
import "./header.css";
import {FaPhoneSquareAlt} from 'react-icons/fa';
import {FiMenu} from 'react-icons/fi'
import { Link } from "react-router-dom";

const Header = () => {

  const menuRef=useRef()

  const menuToggle = ()=>menuRef.current.classList.toggle('active_menu')



  return (
    <header className="header">
      <Container>
        <div className="navigation">
          <div className="logo">
            <h2>
              <i></i>Logo
            </h2>
          </div>
          <div className="nav">
            <div className="nav_menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav_list">
               
                  <li className="nav_item">
                    <Link to="/Home">Home</Link>
                  </li>

                  <li className="nav_item">
                    <Link to="/About">About Us</Link>
                  </li>

                  <li className="nav_item">
                    <Link to="/Courses">Courses</Link>
                  </li>

                  <li className="nav_item">
                    <Link to="/WhyUs">Why Us</Link> 
                  </li>

                  <li className="nav_item">
                    <Link to="/subscribe">Subscribe</Link> 
                  </li>
                
                
              </ul>
            </div>

            <div className="nav_right">
              <p><i><FaPhoneSquareAlt/></i>+91 6386765823</p>
            </div>
          </div>
            <div className="mobile_menu">
              <span><i><FiMenu onClick={menuToggle}/></i></span>
            </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
