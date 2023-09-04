import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "../css/SignupModal.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [showModal, setShowModal] = useState(false);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [telnum, setTelnum] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registrationMessage, setRegistrationMessage] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    const userData = {
      firstname,
      lastname,
      telnum,
      email,
      password,
    };

    try {
      const response = await fetch("http://localhost:2000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        setRegistrationMessage("Registration successful!");

        // navigate('/')
      } else {
        console.error("Error registering user");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleClose = () => {
    setShowModal(false);
    setRegistrationMessage("");
    setFirstname("");
    setLastname("");
    setTelnum("");
    setEmail("");
    setPassword("");
  };

  const handleShow = () => setShowModal(true);

  return (
    <div>
      <center>
        <Button variant="primary" onClick={handleShow}>
          Sign Up
        </Button>
      </center>
      <br />
      <br />
      <br />
      <br />

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {registrationMessage && (
            <p style={{ color: "green" }}>{registrationMessage}</p>
          )}

          <div className="signup-form signup-form-container signup-form label signup-form inpu signup-form button signup-form button:hover success-message error-message signup-form-container">
            <label>First Name:</label>
            <input
              type="text"
              value={firstname}
              onChange={(e) => {
                setFirstname(e.target.value);
                console.log(`FIRSTNAME = ${e.target.value}`);
              }}
              required
            />
          </div>
          <div className="signup-form signup-form-container signup-form label signup-form inpu signup-form button signup-form button:hover success-message error-message signup-form-container">
            <label>Last Name:</label>
            <input
              type="text"
              value={lastname}
              onChange={(e) => {
                setLastname(e.target.value);
                console.log(`LASTNAME = ${e.target.value}`);
              }}
              required
            />
          </div>
          <div className="signup-form signup-form-container signup-form label signup-form inpu signup-form button signup-form button:hover success-message error-message signup-form-container">
            <label>Number:</label>
            <input
              type="text"
              value={telnum}
              onChange={(e) => {
                setTelnum(e.target.value);
                console.log(`TELNUM = ${e.target.value}`);
              }}
            />
          </div>
          <div className="signup-form signup-form-container signup-form label signup-form inpu signup-form button signup-form button:hover success-message error-message signup-form-container">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="signup-form signup-form-container signup-form label signup-form inpu signup-form button signup-form button:hover success-message error-message signup-form-container">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSignup}>
            Sign Up
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Signup;
