import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.js";
import Catalogue from "./components/Catalogue";
import Areas from "./components/Areas";
import Diary from "./components/Diary";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
// import Login2 from "./components/Login2";
// import Signup2 from "./components/Signup2";
import Profile from "./components/Profile";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Show from "./components/Show";
import AlertAlert from "./components/AlertAlert";
// import axios from "axios";
export default function App() {
  // PRODUCTS
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("http://localhost:2000/getproducts");
      const data = await response.json();
      console.log(`PRODUCTS Data = ${data}`);
      setProducts(data);
    };
    fetchProducts();
  }, []);
  // USERS
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("http://localhost:2000/getusers");
      const data = await response.json();
      console.log(`USERS Data = ${data}`);
      setUsers(data);
    };
    fetchUsers();
  }, []);
  // ALERT
  const [alert, setAlert] = useState(null);
  const displayAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <div>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route
              exact
              path="/products"
              element={<Catalogue products={products} />}
            />
            <Route
              path="/products/:id"
              element={<Show products={products} />}
            />
            <Route
              exact
              path="/areas"
              element={<Areas products={products} />}
            />
            {/* <Route exact path="/diary" element={<Diary />} /> */}
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            {/* Search Bar */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile users={users} />} />
          </Routes>
          {/* <CarouselComponent/> */}
          <Footer />
        </div>
      </Router>
    </div>
  );
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:2000/getproducts")
  //     .then((products) => setProducts(products.data))
  //     .catch((err) => console.log(err));
  // }, []);
  // return (
  //   <div>
  //     {products.map((product) => {
  //       return (
  //         <span>
  //           <p>{product.id}</p>
  //           <p>{product.name}</p>
  //           <p>{product.region}</p>
  //         </span>
  //       );
  //     })}
  //   </div>
  // );
}
