import { Octokit } from "octokit";
import express from "express";
import * as fs from "fs";
import * as readline from "readline";

const gitRoute = express.Router();

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

async function getUserData(username: string) {
  console.log(process.env.GITHUB_ACCESS_TOKEN);
  console.log(username);
  const octokit = new Octokit({
    auth: process.env.GITHUB_ACCESS_TOKEN,
  });

  const res = await octokit.rest.users.getAuthenticated();

  //returns data as JSON
  return res.data;
}

gitRoute.get("/get", async (req, res) => {
  console.log("u h h");
  const username = req.params.username;
  try {
    const userData = await getUserData(username);
    res.status(200).send(userData);
  } catch {
    res.status(500).send();
  }
});

export default gitRoute;
