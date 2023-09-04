import React, { Component, useState } from "react";
import { Form, FormGroup, Label, Input, Col, FormFeedback } from "reactstrap";
import { Link } from "react-router-dom";
import Alert from "reactstrap";
export default function Signup2(props) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [telnum, setTelnum] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registrationMessage, setRegistrationMessage] = useState("");

  const handleSignup = async () => {
    // http://localhost:3000/signup?firstname=Yamini&lastname=Sharma&telnum=7732995856&email=yaminisharma%40gmail.com&password=Yamini123
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
        props.displayAlert("Welcome to Chitrakala..", "success");
        setRegistrationMessage("Registration successful!");
        alert("Registration successful!");
        console.log("Registration successful!");
      } else {
        props.displayAlert("We have encountered some error..", "warning");
        console.error("Error registering user");
        alert("We have encountered some error!");
        console.log("We have encountered some error!");
      }
    } catch (error) {
      console.error("Error:", error);
      console.log("Bad Error");
    }
  };

  return (
    <div className="container">
      {console.log("now calling Form")}
      <div className="row row-content">
        <div className="col-12">
          <h4>Signup</h4>
        </div>
        <div className="col-12 col-md-9">
          <Form
          //   onSubmit={handleSubmit}
          >
            <FormGroup row>
              <Label htmlFor="firstname" md={2}>
                First Name
              </Label>
              <Col md={10}>
                <Input
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder="First Name"
                  onChange={(e) => {
                    setFirstname(e.target.value);
                    console.log(`FIRSTNAME = ${e.target.value}`);
                  }}
                  required
                  //   value={this.state.firstname}
                  //   valid={errors.firstname === ""}
                  //   invalid={errors.firstname !== ""}
                  //   onBlur={handleBlur("firstname")}
                  //   onChange={handleInputChange}
                />
                {/* <FormFeedback>{errors.firstname}</FormFeedback> */}
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="lastname" md={2}>
                Last Name
              </Label>
              <Col md={10}>
                <Input
                  type="text"
                  id="lastname"
                  name="lastname"
                  placeholder="Last Name"
                  onChange={(e) => {
                    setLastname(e.target.value);
                    console.log(`LASTNAME = ${e.target.value}`);
                  }}
                  required
                  //   value={this.state.lastname}
                  //   valid={errors.lastname === ""}
                  //   invalid={errors.lastname !== ""}
                  //   onBlur={handleBlur("lastname")}
                  //   onChange={handleInputChange}
                />
                {/* <FormFeedback>{errors.lastname}</FormFeedback> */}
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="telnum" md={2}>
                Contact Tel.
              </Label>
              <Col md={10}>
                <Input
                  type="tel"
                  id="telnum"
                  name="telnum"
                  placeholder="Tel. number"
                  onChange={(e) => {
                    setTelnum(e.target.value);
                    console.log(`TELNUM = ${e.target.value}`);
                  }}
                  required
                  //   value={this.state.telnum}
                  //   valid={errors.telnum === ""}
                  //   invalid={errors.telnum !== ""}
                  //   onBlur={this.handleBlur("telnum")}
                  //   onChange={this.handleInputChange}
                />
                {/* <FormFeedback>{errors.telnum}</FormFeedback> */}
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="email" md={2}>
                Email
              </Label>
              <Col md={10}>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                    console.log(`EMAIL = ${e.target.value}`);
                  }}
                  required
                  //   value={this.state.email}
                  //   valid={errors.email === ""}
                  //   invalid={errors.email !== ""}
                  //   onBlur={this.handleBlur("email")}
                  //   onChange={this.handleInputChange}
                />
                {/* <FormFeedback>{errors.email}</FormFeedback> */}
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="firstname" md={2}>
                Password
              </Label>
              <Col md={10}>
                <Input
                  type="text"
                  id="password"
                  name="password"
                  placeholder="Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                    console.log(`PASSWORD = ${e.target.value}`);
                  }}
                  required
                  //   value={this.state.password}
                  //   valid={errors.password === ""}
                  //   invalid={errors.password !== ""}
                  //   onBlur={this.handleBlur("password")}
                  //   onChange={this.handleInputChange}
                />
                {/* <FormFeedback>{errors.password}</FormFeedback> */}
              </Col>
            </FormGroup>
            <FormGroup row>
              <div style={{ paddingLeft: "155px" }}>
                <button
                  type="submit"
                  className="btn btn-dark"
                  onClick={handleSignup}
                  style={{ width: "690px" }}
                >
                  Signup
                </button>
              </div>
            </FormGroup>
          </Form>
        </div>
        <div>
          {registrationMessage && (
            <p style={{ color: "green" }}>{registrationMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
}
