//External dependencies
import express from "express";
import next from "next";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import compression from "compression";
import helmet from "helmet";
import morgan from "morgan";
//Configuration
require("dotenv").config();
//internal imports
import exampleRoutes from "./routes/example.routes";
//Setup of server, port and database
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();
const port = process.env.PORT || 3000;
const db = process.env.MONGODB_URI;
//DB
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connected"));
//Run server and app
nextApp.prepare().then(() => {
  const app = express();
  //Middlewares
  app.use(morgan("dev"));
  //Transform code from json
  app.use(bodyParser.json());
  //external bodyParser required in new versions
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );
  //Add cookies functionality
  app.use(cookieParser());
  //compress all response
  app.use(compression());
  //protect the backend dev source
  app.use(helmet());
  //Routes
  app.use("/api", exampleRoutes);

  //Send everything to frontend
  app.get("*", (req, res) => {
    return handle(req, res);
  });
  //Port Listening to run server
  app.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
