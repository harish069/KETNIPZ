const express = require("express");
const cors = require("cors")
const connect = require("./config/db");

const { signin, signup } = require("./controller/auth.controller");
const productController = require('./controller/productController');
const cartController = require('./controller/cartController');

const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());
const port = process.env.PORT || 1234;


// app.post("/signup", signup);
// app.post("/signin", signin);
app.use('/users',require("./controller/user.controller"))
app.use('/prod', productController);
app.use('/cart', cartController);

const start = async () => {
  await connect();
  app.listen(port, () => {
    console.log("listing to port", port);
  });
};

module.exports = start;
