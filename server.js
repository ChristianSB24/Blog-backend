const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors())

app.use(express.urlencoded({extended: true}));
app.use(express.json())

const db = require("./models");

db.sequelize.sync();

//Run to reset database
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
//   });

// routes
require("./routes/post.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});