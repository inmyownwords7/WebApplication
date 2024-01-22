import { Octokit } from "octokit";
import express from "express";

console.log((process.env.GITHUB_ACCESS_TOKEN || "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") + " github key");

const gitRoute = express.Router();
 
async function getUserData(username: string) {
  try {
    const octokit = new Octokit({
      auth: process.env.GITHUB_ACCESS_TOKEN,
    });

    const res = await octokit.rest.users.getByUsername({
      username,
    });
//returns data as JSON 
    return res.data;
  } catch (err) {
    throw err;
  }
}

gitRoute.get("/get/:username", async (req, res) => {
  try {
    const username = req.params.user;
    const userData = await getUserData(username);
    console.log(userData);
    res.json(userData);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default gitRoute;
