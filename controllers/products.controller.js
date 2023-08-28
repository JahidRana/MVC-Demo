const product=require("../models/products.model");
const path=require("path");




exports.getProduct= (req, res) => {
    res.status(200).sendFile(path.join(__dirname+"/../views/product.html"));
  }

  exports.saveProduct=(req, res) => {
    const title=req.body.title;
    const price=req.body.price;

    const products={
        title,
        price
    }
    product.push(products);

    res.send(product);
  
  }