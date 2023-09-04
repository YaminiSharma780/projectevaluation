import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-4 offset-1 col-sm-2">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/menu">Menu</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="col-7 col-sm-5">
            <h5>Our Address</h5>
            <address style={{ color: "black" }}>
              Chitrakala Kendra Private Limited
              <br />
              Noida, Uttar Pradesh <br />
              India <br />
              <i className="fa fa-phone fa-lg"></i>: +91 1234 5678
              <br />
              <i className="fa fa-fax fa-lg"></i>: +91 8765 4321
              <br />
              <i className="fa fa-envelope fa-lg"></i>:{" "}
              <a href="mailto:contactus@food.net">contactus@hudoo.com</a>
            </address>
          </div>
          <div className="col-12 col-sm-4 align-self-center">
            <div className="text-center">
              <a
                className="btn btn-social-icon btn-google"
                style={{ color: "black" }}
                href="http://google.com/+"
              >
                <i className="fa fa-google-plus"></i>
              </a>
              <a
                className="btn btn-social-icon btn-facebook"
                style={{ color: "black" }}
                href="http://www.facebook.com/profile.php?id="
              >
                <i className="fa fa-facebook"></i>
              </a>
              <a
                className="btn btn-social-icon btn-linkedin"
                style={{ color: "black" }}
                href="http://www.linkedin.com/in/"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              <a
                className="btn btn-social-icon btn-twitter"
                style={{ color: "black" }}
                href="http://twitter.com/"
              >
                <i className="fa fa-twitter"></i>
              </a>
              <a
                className="btn btn-social-icon btn-google"
                style={{ color: "black" }}
                href="http://youtube.com/"
              >
                <i className="fa fa-youtube"></i>
              </a>
              <a
                style={{ color: "black" }}
                className="btn btn-social-icon"
                href="mailto:"
              >
                <i className="fa fa-envelope-o"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <p>© Copyright 2023 Indian Restaurant</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
