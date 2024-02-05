const express = require("express");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");
const cloudinary = require("cloudinary");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors")

const app = express();

const PORT = process.env.PORT || 4001;

//cloudinary

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});



//middleware
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload({ useTempFiles: true }));


//routes

const galleryRouter = require("./src/routes/galleryRoutes")
const authRouter = require("./src/routes/authRouter")



//use routes
app.use("/", galleryRouter)
app.use('/auth', authRouter)


const MONGO_URL = process.env.MONGO_URL;

mongoose
  .connect(MONGO_URL)
  .then(() => {
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  })
  .catch((err) => console.log(err));
