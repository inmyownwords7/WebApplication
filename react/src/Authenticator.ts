// Define your Token type
import fs from 'fs';

// Read the JSON file
const jsonString = fs.readFileSync('token.json', 'utf8');

// Parse the JSON content
const parsedData = JSON.parse(jsonString);

// Access client_id and client_secret
const clientId = parsedData.web.client_id;
const clientSecret = parsedData.web.client_secret;

console.log('Client ID:', clientId);
console.log('Client Secret:', clientSecret);