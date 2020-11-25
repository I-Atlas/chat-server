import express from "express";
import { createServer } from "http";

// core/db - mongoose connect
import "./core/db";
import createRoutes from "./core/routes";
import createSocket from "./core/socket";

const app = express();
const http = createServer(app);
const io = createSocket(http);

createRoutes(app, io);

const PORT = 5000;

const start = () => {
  try {
    http.listen(PORT, () => {
      console.log(`Server is listening on port: ${PORT}.`);
    });
  } catch (error) {
    console.log(`Something went wrong: ${error.message}`);
    process.exit(1);
  }
};

start();
