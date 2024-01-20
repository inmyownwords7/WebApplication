import { promises as fs } from 'fs';
import path from 'path';
import { authenticate } from '@google-cloud/local-auth';
import { google, Auth } from 'googleapis';

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/script.projects'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = path.join(process.cwd(), 'token.json');
const CREDENTIALS_PATH = path.join(process.cwd(), 'credentials.json');

/**
 * Reads previously authorized credentials from the save file.
 *
 * @return {Promise<google.auth.OAuth2|null>}
 */
export async function loadSavedCredentialsIfExist(): Promise<Auth.OAuth2Client | null> {
  try {
    const content = await fs.readFile(TOKEN_PATH, 'utf-8');
    const credentials = JSON.parse(content);
    const { client_id, client_secret, refresh_token } = credentials;
    const oauth2Client = new google.auth.OAuth2(client_id, client_secret);
    oauth2Client.setCredentials({ refresh_token });
    return oauth2Client;
  } catch (err) {
    return null;
  }
}

/**
 * Serializes credentials to a file compatible with google.auth.OAuth2.fromJSON.
 *
 * @param {google.auth.OAuth2} client
 * @return {Promise<void>}
 */
export async function saveCredentials(client: Auth.OAuth2Client): Promise<void> {
  const content = await fs.readFile(CREDENTIALS_PATH, 'utf-8');
  const keys = JSON.parse(content);
  const key = keys.installed || keys.web;
  const payload = JSON.stringify({
    type: 'authorized_user',
    client_id: key.client_id,
    client_secret: key.client_secret,
    refresh_token: client.credentials?.refresh_token,
  });
  await fs.writeFile(TOKEN_PATH, payload, 'utf-8');
}

/**
 * Load or request authorization to call APIs.
 *
 */
export async function authorize(): Promise<Auth.OAuth2Client> {
  let client = await loadSavedCredentialsIfExist();
  if (client) {
    return client;
  }
  client = (await authenticate({
    scopes: SCOPES,
    keyfilePath: CREDENTIALS_PATH,
  })) as Auth.OAuth2Client;
  if (client.credentials) {
    await saveCredentials(client);
  }
  return client;
}

export { SCOPES };
