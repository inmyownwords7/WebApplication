import express from "express";
import controllers from "./controllers";

const router = express.Router();

router.get("/user/:user", controllers.getUser);

router.get("/repo/:user/:reponame", controllers.getRepo);

router.get("/commit/:user/:reponame", controllers.getCommit);

export { router };
