// // import { OAuth2Client } from 'google-auth-library';
// // import express from 'express';
// // import * as url from 'url';
// // import opn from 'opn';
// // import destroyer from 'server-destroy';
// // // Download your OAuth2 configuration from Google
// // import keys from './credentials.json';
// // import path from 'path'
// // import { fileURLToPath } from 'url';
// // const filename = fileURLToPath(import.meta.url)
// // const app = express();
// // const credentialsPath = path.dirname(keys)
// // /**
// //  * Start by acquiring a pre-authenticated oAuth2 client.
// //  */
// // export async function googleAuthClient() {
// //   const oAuth2Client = await getAuthenticatedClient();

// //   // Make a simple request to the People API using our pre-authenticated client.
// //   const apiURL = 'https://people.googleapis.com/v1/people/me?personFields=names';
// //   const res = await oAuth2Client.request({ url: apiURL });
// //   console.log(res.data);

// //   // After acquiring an access_token, you may want to check on the audience, expiration,
// //   // or original scopes requested.  You can do that with the `getTokenInfo` method.
// //   const tokenInfo = await oAuth2Client.getTokenInfo(
// //     oAuth2Client.credentials.access_token
// //   );
// //   console.log(tokenInfo);
// // }

// // /**
// //  * Create a new OAuth2Client, and go through the OAuth2 content
// //  * workflow.  Return the full client to the callback.
// //  */
// // function getAuthenticatedClient(): Promise<OAuth2Client> {
// //   return new Promise((resolve, reject) => {
// //     // create an oAuth client to authorize the API call.
// //     const oAuth2Client = new OAuth2Client(
// //       keys.web.client_id,
// //       keys.web.client_secret,
// //       keys.web.redirect_uris[0]
// //     );

// //     // Generate the URL that will be used for the consent dialog.
// //     const authorizeUrl = oAuth2Client.generateAuthUrl({
// //       access_type: 'offline',
// //       scope: 'https://www.googleapis.com/auth/userinfo.profile',
// //     });

// //     // Set up an endpoint to handle the OAuth callback
// //     app.get('/oauth2callback', async (req, res) => {
// //       try {
// //         const qs = new url.URL(req.url, 'http://localhost:3001').searchParams;
// //         const code = qs.get('code');
// //         console.log(`Code is ${code}`);
// //         res.end('Authentication successful! Please return to the console.');

// //         // Now that we have the code, use it to acquire tokens.
// //         const r = await oAuth2Client.getToken(code as string);
// //         // Make sure to set the credentials on the OAut
// //         oAuth2Client.setCredentials(r.tokens);
// //         console.info('Tokens acquired.');
// //         resolve(oAuth2Client);
// //       } catch (e) {
// //         reject(e);
// //       }
// //     });

// //     // Open an HTTP server to listen for the OAuth callback.
// //     const server = app.listen(3001, () => {
// //       // open the browser to the authorize URL to start the workflow
// //       opn(authorizeUrl, { wait: false }).then((cp: any) => cp.unref());
// //     });

// //     // Destroy the server when it's no longer needed
// //     destroyer(server);
// //   });
// // }

// // googleAuthClient().catch(console.error);
// import { OAuth2Client } from "google-auth-library";
// import express from "express";
// const router = express.Router();
// export async function getTokenUsingCode() {
//   // Replace with your client ID and client secret from the Google Cloud Console
//   const clientId =
//     "493869205289-084nogbgd8dthlqjrt1umf56fbco51i5.apps.googleusercontent.com";
//   const clientSecret = "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";
//   const redirectUri = "http://localhost:3000/oauth2callback"; // Adjust based on your setup
 
  
//   router.get("/oauth2callback", async (req, res) => {
//     const code = req.query.code as string;

//     const oAuth2Client = new OAuth2Client(clientId, clientSecret, redirectUri);

//     try {
//       const tokenResponse = await oAuth2Client.getToken(code);
//       const accessToken = tokenResponse.tokens.access_token;

//       console.log("Access Token:", accessToken);
//       res.send("Authentication successful! You can close this tab now.");
//     } catch (error) {
//       console.error("Error getting token:", error);
//       res.status(500).send("Error during authentication.");
//     }
//   });
// }
