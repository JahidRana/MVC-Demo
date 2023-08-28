require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT;
const userRouter=require("./routes/users.route")
const productRoute=require("./routes/product.route")


app.use(express.urlencoded({extended:true}));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});


app.use(userRouter);
app.use(productRoute);


app.use((req, res, next) => {
  res.status(404).json({
    message: "Not a Valid Request",
  });
});
