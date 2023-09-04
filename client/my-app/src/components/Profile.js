import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Show from "./Show";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Profile(props) {
  const myprofile = props.users.map((user) => {
    return (
      <div className="tableDiv">
        <table>
          <tr>
            <th>First Name</th>
            <td>{user.firstname}</td>
          </tr>
          <br />
          <tr>
            <th>Last Name</th>
            <td>{user.lastname}</td>
          </tr>
          <br />
          <tr>
            <th>Telephone</th>
            <td>{user.telnum}</td>
          </tr>
          <br />
          <tr>
            <th>Email</th>
            <td>{user.email}</td>
          </tr>
        </table>
      </div>
    );
  });
  return (
    <div style={{ width: "500px", marginTop: "50px" }} className="container">
      <div className="row">{myprofile}</div>
    </div>
  );
}
