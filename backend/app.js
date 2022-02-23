const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = 8000 || process.env.PORT;

app.use(cors());
require("./src/db/userDB");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require("./src/Routes/MainRoute"));

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
