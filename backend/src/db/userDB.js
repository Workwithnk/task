const mongoose = require("mongoose");

const dbURL =
  "mongodb+srv://nikhil:npatel99@cluster0.xxdhq.mongodb.net/uerDB?retryWrites=true&w=majority";

mongoose
  .connect(`${dbURL}`)
  .then(() => console.log("Database connected"))
  .catch((e) => console.log(`Something went wrong ${e}`));
