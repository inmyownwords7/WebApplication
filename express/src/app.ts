// @ts-ignore
import express, {Express, Request, Response} from 'express';
import path from 'path';

const app: Express = express();

//app.use('/assets', express.static(path.join('./', 'assets')));
// app.use(express.static('build'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/api', (req: Request, res: Response) => {
    res.send({message: 'Welcome to my-express-api!'});
    console.log("Welcome to my-express-api")
});

// HTTP POST request for Contact Page
app.post('/api/contact', (req: Request, res: Response) => {
    // Handle the form data received from the TypeScript application
    const formData = req.body;
    console.log(formData)
    // Add your logic here to process the form data

    // Respond to the TypeScript application
    res.json({success: true});
});
app.get('/calendar', (req: Request, res: Response) => {
    //res.sendFile(__dirname);
});

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
