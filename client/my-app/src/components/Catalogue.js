import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Show from "./Show";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Catalogue(props) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const onProductSelect = (product) => {
    setSelectedProduct(product);
    console.log(`Selected Product --> ${product}`);
  };
  const catalogue = props.products.map((product) => {
    return (
      <div className="col-12 col-md-3 m-1">
        <Card onClick={() => onProductSelect(product)}>
          <Card.Img
            style={{ height: "200px", width: "100%", objectFit: "cover" }}
            variant="top"
            src={product.image}
          />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.region}</Card.Text>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Link to={`/products/${product.id}`}>
                <Button variant="dark">View Details</Button>
              </Link>
              <Button variant="dark">Add to Cart</Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row">{catalogue}</div>
    </div>
  );
}
// ****************************************************
// import React, { useState } from "react";
// import { Card, CardImg, CardImgOverlay, CardTitle, Button } from "reactstrap";

// export default function Catalogue(props) {
//   const catalogue = props.products.map((product) => {
//     return (
//       <div className="col-12 col-md-3 m-2">
//         <Card key={product.id}>
//           <CardImg
//             height={200}
//             width={250}
//             src={product.image}
//             alt={product.name}
//           />
//           <CardImgOverlay>
//             <CardTitle>{product.name}</CardTitle>
//           </CardImgOverlay>
//         </Card>
//         <Button>Add to Cart</Button>
//       </div>
//     );
//   });
//   return (
//     <div className="container">
//       <div className="row">{catalogue}</div>
//     </div>
//   );
// }
