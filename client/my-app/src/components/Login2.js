import React, { Component, useState } from "react";
import { Form, FormGroup, Label, Input, Col, FormFeedback } from "reactstrap";
import { Link } from "react-router-dom";
import Alert from "reactstrap";
// import { useParams, useLocation } from "react-router-dom";
export default function Login2(props) {
  // http://localhost:3000/login?email=geetasharma%40gmail.com&password=Geeta123
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loginMessage, setloginMessage] = useState("");

  const handleLogin = async () => {
    const loginData = {
      email,
      password,
    };

    try {
      const response = await fetch("http://localhost:2000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });
      console.log(`API Response = ${response}`);
      if (response.ok) {
        setloginMessage("Login successful!");
        const responseData = await response.json();
        // Assuming the server returns a token upon successful login
        const token = responseData.accessToken;
        // Save the token to local storage or a state management solution
        localStorage.setItem("authToken", token);
        console.log("Successful Login !");
        console.log("authToken", token);
        // Taking params from url
        // const location = useLocation();
        // console.log(`location.pathname = ${location.pathname}`);
        // const { id } = useParams();
        // console.log(`myID = ${id}`);
        // console.log(`props.products = ${props.products}`);
      } else {
        setLoginError("Invalid credentials");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="container">
      {loginMessage && <p style={{ color: "green" }}>{loginMessage}</p>}
      {console.log(loginMessage)}
      <div className="row row-content">
        <div className="col-12">
          <h4>Signup</h4>
        </div>
        <div className="col-12 col-md-9">
          <Form
          //   onSubmit={handleSubmit}
          >
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
                  onClick={handleLogin}
                  style={{ width: "690px" }}
                >
                  Login
                </button>
              </div>
            </FormGroup>
          </Form>
        </div>
      </div>
    </div>
  );
}
