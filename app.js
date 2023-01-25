const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const ThoughtRoute = require("./routes/ThoughtRoute");

const app = express();

//middlewares
app.use(cors({ 
  credentials: true, 
  origin: "https://front-thoughts.onrender.com",
  methods: ["GET", "POST", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

//routes
app.use("/thoughts", ThoughtRoute);

app.use(express.static("public"));

//connect database
mongoose
  .connect(
    "mongodb+srv://Ricardo:TsSXEjgLQVDHfohk@cluster0.ys4cc06.mongodb.net/thoughts?retryWrites=true&w=majority"
  )
  // .connect('mongodb://localhost:27017/thoughts') TsSXEjgLQVDHfohk
  .then(() => {
    app.listen(9000);
    console.log("Conectou ao banco!");
  })
  .catch((err) => {
    console.log("Erro :", err);
  });
