import bodyParser from "body-parser";
import express from "express";
import socket from "socket.io";
import cors from "cors";
import { updateLastSeen, checkAuth } from "../middlewares";
import { loginValidation, registerValidation } from "../utils/validations";

import multer from "./multer";

import {
  UserCtrl,
  DialogCtrl,
  MessageCtrl,
  UploadFileCtrl,
} from "../controllers";

const createRoutes = (app: express.Express, io: socket.Server) => {
  const UserController = new UserCtrl(io);
  const DialogController = new DialogCtrl(io);
  const MessageController = new MessageCtrl(io);
  const UploadFileController = new UploadFileCtrl();

  app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "OPTIONS", "PUT"],
    allowedHeaders: ["content-type"]
  }));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  // app.use(checkAuth);
  app.use(updateLastSeen);
  app.use(function (_: any, res: any, next: any) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    res.header("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0");
    next();
  });

  app.get("/", (_: any, res: any) => {
    res.send("Hello, World!");
  });

  app.get("/user/me", UserController.getMe);
  app.get("/user/verify", UserController.verify);
  app.post("/user/signup", registerValidation, UserController.create);
  app.post("/user/signin", loginValidation, UserController.login);
  app.get("/user/find", UserController.findUsers);
  app.get("/user/:id", UserController.show);
  app.delete("/user/:id", UserController.delete);

  app.get("/dialogs", DialogController.index);
  app.delete("/dialogs/:id", DialogController.delete);
  app.post("/dialogs", DialogController.create);

  app.get("/messages", MessageController.index);
  app.post("/messages", MessageController.create);
  app.delete("/messages", MessageController.delete);

  app.post("/files", multer.single("file"), UploadFileController.create);
  app.delete("/files", UploadFileController.delete);
};

export default createRoutes;
