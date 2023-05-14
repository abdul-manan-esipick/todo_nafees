const express = require("express");
const app = express();
const server = require("http").createServer(app);
const dotenv = require("dotenv");
dotenv.config();

const closeRouteController = require("./AppModules/baseRoutes/controller.js");

var cors = require("cors");
const openRoutes = require("./AppModules/baseRoutes/open.routes");
const closeRoutes = require("./AppModules/baseRoutes/close.routes");
const { handleError } = require("./AppModules/helper/errorHandler.js");

const { verifyUser } = closeRouteController;

//middleware
app.use(cors());
app.use(express.json());
app.use(function (error, req, res, next) {
  console.log("error");
  res.sendStatus(400);
});
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// Routes
app.use(openRoutes);
app.use(verifyUser, closeRoutes);
app.use((err, req, res, next) => {
  handleError(err, res, next);
});

PORT = process.env.PORT || 8080;
server.listen(PORT, () => console.log("Server listening:" + PORT + "..."));