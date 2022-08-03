const express = require("express");
const cors = require('cors');
const { readdirSync } = require('fs');
const dotenv = require('dotenv');
const mongoose = require("mongoose");

dotenv.config();

const app = express();
app.use(express.json());

//cors handling
let allowed = ['http://localhost:3000', "http://127.0.0.1:5173"]
function options(req, res) {
  let temp;
  let origin = req.header('Origin');
  if (allowed.indexOf(origin) > -1) {
    temp = {
      origin: true,
      optionSuccessStatus: 200,
    }
  }
  else {
    temp = {
      origin: false,
      optionSuccessStatus: 402,
    }
  }

  res(null, temp);
}
app.use(cors(options));

//routes
readdirSync('./routes').map((route) => app.use("/", require('./routes/' + route)));

//databse
mongoose.connect(process.env.DATABASE_URL)
  .then(() => console.log("connected to database successfully"))
  .catch((err) => console.log("error connecting mongodb" + err.message))

const PORT = process.env.PORT || 4444;
app.listen(PORT, () => {
  console.log("server is running at http://localhost:4444");
})