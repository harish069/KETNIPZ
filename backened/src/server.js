const express = require("express");
const cors = require("cors")
const connect = require("./config/db");

const { signin, signup } = require("./controller/auth.controller");
const productController = require('./controller/productController');
const cartController = require('./controller/cartController');

const app = express();
app.use(cors());
app.use(express.json());

// app.post("/signup", signup);
// app.post("/signin", signin);
app.use('/users',require("./controller/user.controller"))
app.use('/prod', productController);
app.use('/cart', cartController);

const start = async () => {
  await connect();
  app.listen(1234, () => {
    console.log("listing to port 1234");
  });
};

module.exports = start;
