const express = require("express");
require("dotenv").config();

const app = express();
const cors = require("cors");
app.use(cors({
  origin:"http://localhost:1234"
}));
const port = process.env.PORT || 8000;
app.use(express.json());
const Route = require("./Routes/routers");
app.use("/quiz", Route);
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
      await mongoose.connect(process.env.CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Connected to MongoDB");
    } catch (error) {
      console.error("Failed to connect to MongoDB:", error);
    }
  };
  
  connectDB();



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


