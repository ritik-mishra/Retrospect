import express from 'express'; // in newest version of node we can use this instead of ...require(express);
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'

import postRoutes from './routes/posts.js';

const app = express();
dotenv.config();

//setting up the body parser and cors. app.use will add these libraries(functions sort of) to its middleware stack (in its toolbox I suppose for later use)
app.use(bodyParser.json({limit: "30mb", extended: true}));  // setting a limit since we'll be sending some images
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));

app.use(cors());
//using express middleware, adding starting path for all the routes of posts.js. It means that the '/' route in posts will now be reached by lch:5000/posts instead of lch:5000
app.use('/posts', postRoutes);




//Connecting our server app with a real database

//later on for security reasons we'll be securing our id-pass with something called environmental variables 
//const CONNECTION_URL = 'mongodb+srv://ritikmishra:ritik123@cluster1.5a888.mongodb.net/<dbname>?retryWrites=true&w=majority'

/*In many environments (e.g. Heroku), and as a convention, you can set the environment variable PORT to tell your web server what port to listen on.
So process.env.PORT || 3000 means: whatever is in the environment variable PORT, or 3000 if there's nothing there.
*/
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true}) // changed from CONNECTION_URL to prcess.env.CONNECTION_URL
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))) //if the connection is successfull
    .catch((error) => console.log(error.message)) // if there is some error in the connection

//makes sure that we don't get any warnings in the console
mongoose.set('useFindAndModify', false); 
