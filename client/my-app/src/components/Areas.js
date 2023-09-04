import React, { useState } from "react";
import India from "@svg-maps/india";
import { SVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";
import "../App.css";

export default function Areas(props) {
  // NAME
  const [stateName, setStateName] = useState("Explore..");
  function onLocationClick(event) {
    setStateName(event.target.getAttribute("name"));
    console.log("Name", event.target.getAttribute("name"));
  }

  return (
    <>
      <div className="dialogue">
        <p>{stateName}</p>
        {props.products
          .filter((product) => product.region == stateName)
          .map((product) => {
            console.log(`product.region = ${product.region}`);
            console.log(`stateName = ${stateName}`);
            return (
              <>
                <div className="dialogue2">
                  <p>{product.name}</p>
                  <img src={product.image} />
                </div>
              </>
            );
          })}
      </div>
      <div className="container">
        <SVGMap map={India} onLocationClick={onLocationClick} />
      </div>
    </>
  );
}
