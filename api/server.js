const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const productsRouter = require("./routes/products.router");
const usersRouter = require("./routes/users.router.js");
const authRouter = require("./routes/auth.router");

const app = express();
const db = require("./db.js");
app.use(cors());

const port = 2000;
app.use(express.json());
app.get("/", (req, res) => res.send("Server is working ! ✅" + port));

// STATIC DATA
// app.use("/api/products", productsRouter);
// DATABASE PRODUCTS DATA
app.use("/getproducts", productsRouter);
console.log("productsRouter = ",productsRouter);
// DATABASE USERS DATA
app.use("/getusers", usersRouter);
// DATABASE AUTH
app.use("/api/auth", authRouter);

app.listen(port, () => console.log(`Chitrakala Server is listening on port ${port}!`));
