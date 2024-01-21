// @ts-ignore
import cors from "cors";
import express, { Express, Request, Response } from "express";
import { google } from "googleapis";
import { authenticate } from "./middleware/githubClient";
import morgan from "morgan";
import { authorize } from "./middleware/googleclient";
import { router } from "./middleware/routes";
import { setHeaders } from "./middleware/middlewares";
import { App, createNodeMiddleware } from "octokit";
//initialize Express
const app: Express = express();
const expressApp: Express = express();

// const octoKitApp = new App({
//   appId,
//   privateKey,
//   webhooks: { secret },
//   oauth: { clientId, clientSecret },
// });

expressApp.use(createNodeMiddleware(app));

const octokit = {
  auth: process.env.GITHUB_ACCESS_TOKEN,
};
app.use("/github_api", router);
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(setHeaders);

app.get("/api", (req: Request, res: Response) => {
  res.send({ message: "Welcome to my-express-api!" });
  console.log("Welcome to my-express-api");
});

// HTTP POST request for Contact Page
app.post("/api/contact", (req: Request, res: Response) => {
  // Handle the form data received from the TypeScript application
  const formData = req.body;
  console.log(formData);
  // Add your logic here to process the form data

  // Respond to the TypeScript application
  res.json({ success: true });
});

app.get("/calendar", async (req: Request, res: Response) => {
  try {
    const auth = await authorize();

    const calendar = google.calendar({ version: "v3", auth });

    // List upcoming events from the primary calendar
    const events = await calendar.events.list({
      calendarId: "primary",
      timeMin: new Date().toISOString(),
      maxResults: 10,
      singleEvents: true,
      orderBy: "startTime",
    });

    const upcomingEvents = events.data.items;
    res.json({ upcomingEvents });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

async function main() {
  await authenticate();
}

main();
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
expressApp.listen(3001, () => {
  console.log(`Listening at http://localhost:3001/api`);
});

server.on("error", console.error);
