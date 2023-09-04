import { useParams, useLocation } from "react-router-dom";
import "../App.css";

export default function Show(props) {
  const location = useLocation();
  console.log(`location.pathname = ${location.pathname}`);
  const { id } = useParams();
  console.log(`myID = ${id}`);
  console.log(`props.products = ${props.products}`);

  return (
    <div className="container">
      <div>
        {props.products
          .filter((product) => product.id == id)
          .map((product) => {
            console.log(`param ID = ${id}`);
            console.log(`product.id = ${product.id}`);
            console.log(`product.name = ${product.name}`);
            console.log(`product.image = ${product.image}`);
            return (
              <>
                <div style={{ display: "flex" }}>
                  <div className="productImg">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div
                    style={{
                      width: "500px",
                      border: "2px solid black",
                      overflow: "hidden",
                    }}
                  >
                    <h2>{product.name}</h2>
                    <h5>Creator: {product.creator}</h5>
                    <h5>Region: {product.region}</h5>
                    <p>{product.description}</p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "black",
                        color: "white",
                        height: "30px",
                        width: "50px",
                      }}
                    >
                      <h3>{product.rating}</h3>
                    </div>
                  </div>
                </div>
                <br></br>
              </>
            );
          })}
      </div>
      <div>
        <button className="btn btn-dark" style={{ width: "1000px" }}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
// {
/* <div className="productImg">
          <img src={product.image} alt={product.name} />
        </div>
        <div
          style={{
            width: "500px",
            border: "2px solid black",
            overflow: "hidden",
          }}
        >
          <h2>Bandhani</h2>
          <h5>Creator: Artisans of Andhra Pradesh and Telangana</h5>
          <h5>Region: Andhra Pradesh and Telangana</h5>
          <p>
            Description: Kalamkari is a traditional art form that involves
            hand-painting or block-printing on textiles using natural dyes. It
            often depicts mythological stories, scenes from epics like the
            Ramayana and Mahabharata, and intricate floral designs. Kalamkari
            involves a complex process of outlining the design using a kalam pen
            and filling it with vibrant colors.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "black",
              color: "white",
              height: "30px",
              width: "50px",
            }}
          >
            <h3>4.5</h3>
          </div>
        </div>
      </div>
      <br></br>
      <div>
        <button className="btn btn-dark" style={{ width: "1000px" }}>
          Add to Cart
        </button> */
// }
