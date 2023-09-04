import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  // NavLink,
} from "reactstrap";
import { NavLink } from "react-router-dom";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div>
        <Navbar
          style={{ marginBottom: "20px" }}
          color="light"
          light
          expand="md"
        >
          <NavbarBrand className="mr-auto" href="/">
            <img
              src="/icons/newLogo.jpg"
              height="45"
              width="45"
              alt="ChitraKala"
              style={{ border: "2px solid black", borderRadius: "50%" }}
            />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink className="nav-link" to="/home">
                  <span className="fa fa-home fa-lg"></span> Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/products">
                  <span className="fa-solid fa-list"></span> Products
                  {/* <FontAwesomeIcon icon="fa-regular fa-square-caret-down" /> */}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/areas">
                  <span className="fa-solid fa-map"></span> Areas
                </NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink className="nav-link" to="/diary">
                  <span className="fa-solid fa-book"></span> Diaries
                </NavLink>
              </NavItem> */}
              {/* Search */}
              <form className="form-inline my-2 my-lg-0">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-dark my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
              <NavItem>
                <NavLink className="nav-link" to="/about">
                  <span className="fa fa-info fa-lg"></span> About Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/contact">
                  <span className="fa fa-address-card fa-lg"></span> Contact Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/login">
                  <span
                    className="fa-solid fa-user-plus"
                    aria-hidden="true"
                  ></span>{" "}
                  Login
                  {/* <FontAwesomeIcon icon="fa-solid fa-user-plus" /> */}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/signup">
                  <span className="fa fa-sign-in" aria-hidden="true"></span>
                  SignUp
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/profile">
                  <span className="fa-solid fa-user"></span> Profile
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
