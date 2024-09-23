const express = require("express"); //imports the express module
const mongoose = require("mongoose");
const Product = require("./Models/product.model");
const app = express(); // initializing it
const productRoute = require("./routes/product.route");

//NodeJS middleware part
app.use(express.json()); //middleware that parses incoming requests with JSON payloads
app.use(express.urlencoded({ extended: false })); //configuring it to use things like form url to add stuff

//routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated"); //res you get from the server when you visit the default page
}); //a forward slash(default page), request(what client sends to the server) and a response(what response comes from the server )

/*gets all products
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//gets a single product based on id
app.get("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params; //gets the id from the url
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body); //use await because it taks time
    res.status(200).json(Product); //json throws back the req
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//update a product based on id
app.put("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const updatedProduct = await Product.findById(id); //check if product is updated
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//delete a product
app.delete("./api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
*/
mongoose
  .connect(
    "mongodb+srv://menechamaryleen:7O4VVFgCF6cOgyfx@backenddb.uiipu.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    //when it is connected you have the response in the curly braces
    console.log("Connected to the database!");
    app.listen(3000, () => {
      //adding a listener to the app at port 3000
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    //if it is not connected you have this
    console.log("Connection failed!");
  });
