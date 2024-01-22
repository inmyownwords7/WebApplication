// @ts-ignore
import cors from "cors";
import express from "express";
import gitRoute from "./middleware/githubClient";
import morgan from "morgan";
import dotenv from 'dotenv'
import path from 'path'

export const env = path.join("G:\\Github\\WebApp\\WebApplication\\", ".env");
dotenv.config({ path: env });
//initialize Express
const app = express();

app.use(gitRoute);
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api", (req, res) => {
  res.send("Welcome ")
})
// HTTP POST request for Contact Page
app.post('/api/send-email', (req: Request, res: Response) => {
  // Handle email sending logic here using the data from req.body
  const emailSendingResult = sendEmail(req.body);

  if (emailSendingResult.success) {
    console.log('Email sent successfully')
  } else {
    console.log('Failure to send email successfully')
  }
});

// Replace this function with your actual email sending logic
function sendEmail(data: any) {
  // Implement your email sending logic here
  // Return an object indicating the success or failure of the operation
  try {
    // Your email sending code goes here

    // For example, assuming success
    return { success: true };
  } catch (error) {
    // Log the error or handle it as needed
    console.error('Error sending email:', error);

    // Return an object indicating failure
    return { success: false, error: 'Failed to send email' };
  }
};

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});

server.on('error', (err) => {
  console.error(err)
})

