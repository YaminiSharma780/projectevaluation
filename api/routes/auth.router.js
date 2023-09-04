const express = require("express");

const singupHandler = require("../controllers/signupController");
const loginHandler = require("../controllers/loginController");

const router = express.Router();

router
  .route("/register")
  //localhost:2000/api/auth/register
  .post(singupHandler);
// {
//     "id": 4,
//     "firstname": "Sherlock",
//     "lastname": "Homes",
//     "telnum": 5656787890,
//     "email": "sherlockhomes@gmail.com",
//     "password": "Sher123"
// }
router
  .route("/login")
  //localhost:8000/api/auth/login
  .post(loginHandler);
// {
//         "email": "sherlockhomes@gmail.com",
//         "password": "Sher123"
// }
module.exports = router;
