// @ts-ignore
import cors from "cors";
import express, { Express, Request, Response } from "express";
import { google } from "googleapis";
//import { authenticate } from "./middleware/githubClient";
// import { App, createNodeMiddleware } from "octokit";
import morgan from "morgan";
import { router } from "./middleware/routes";
import { setHeaders } from "./middleware/middlewares";
import {readJsonFile} from "./middleware/readJsonFile";
import {GoogleAuth, OAuth2Client} from "google-auth-library";

// import {credentials} from './middleware/googleOauth'
//initialize Express
const app: Express = express();
const expressApp: Express = express();
interface MyObject {
  id: number;
  name: string;
}
// const octoKitApp = new App({
//   appId,
//   privateKey,
//   webhooks: { secret },
//   oauth: { clientId, clientSecret },
// });

// expressApp.use(createNodeMiddleware(app));

// const octokit = {
//   auth: process.env.GITHUB_ACCESS_TOKEN,
// };
// app.use("/github_api", router);
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

// app.get("/calendar", async (req: Request, res: Response) => {
//   try {
//     // const auth = await authorize();

//     const calendar = google.calendar({ version: "v3", auth });

//     // List upcoming events from the primary calendar
//     const events = await calendar.events.list({
//       calendarId: "primary",
//       timeMin: new Date().toISOString(),
//       maxResults: 10,
//       singleEvents: true,
//       orderBy: "startTime",
//     });

//     const upcomingEvents = events.data.items;
//     res.json({ upcomingEvents });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Internal Server Error");
//   }
// });

async function main() {
  //await authenticate();
  // const filePath = './credentials.json';
  // try {
  //   const objectArray = await readJsonFile(credentials);
  //   if (objectArray) {
  //     console.log('Array of objects:', objectArray); // Log the content
  //   } else {
  //     console.log('Error reading or parsing JSON.');
  //   }
  // } catch (error) {
  //   console.error('Error:', error);
  // }

//   const auth = new GoogleAuth({
//     scopes: 'https://www.googleapis.com/auth/cloud-platform'
//   });
//   const client = await auth.getClient();
//   const projectId = await auth.getProjectId();
//   const url = `https://dns.googleapis.com/dns/v1/projects/${projectId}`;
//   const res = await client.request({ url });
//   console.log(res.data);
// }
app.get('/oauth2callback', async (req, res) => {
  const code = req.query.code as string;
  console.log(code)
  const clientId =
    "493869205289-084nogbgd8dthlqjrt1umf56fbco51i5.apps.googleusercontent.com";
  const clientSecret = "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";
  const redirectUri = "http://localhost:3000/";
   
  const oAuth2Client = new OAuth2Client(
    clientId,
    clientSecret,
    redirectUri
  );

  try {
    const tokenResponse = await oAuth2Client.getToken(code);
    const accessToken = tokenResponse.tokens.access_token;

    console.log('Access Token:', accessToken);
    res.send('Authentication successful! You can close this tab now.');
  } catch (error) {
    console.error('Error getting token:', error);
    res.status(500).send('Error during authentication.');
  }
});

}

main().catch(err => console.error(err));
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
// expressApp.listen(3001, () => {
//   console.log(`Listening at http://localhost:3001/api`);
// });

server.on("error", console.error)

