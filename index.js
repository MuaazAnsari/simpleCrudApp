const express = require("express");
const mongoose = require("mongoose");

const app = express();

// ------ Middlewares ----------
// To access json data in req.body
app.use(express.json());
// used to parse incoming request bodies with application/x-www-form-urlencoded content type.
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res, next) => {
  res.send("Hello there!");
});

// ---- Routes ----
const productRoutes = require("./routes/product.route");
app.use("/api/products", productRoutes);

// ---- Database Connection Logic -------
mongoose
  .connect("mongodb://localhost:27017/Node-Api")
  .then(() => {
    console.log("Connected to DB");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => console.log(err));
