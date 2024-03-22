import express from "express";
import session from "express-session";
import ViteExpress from "vite-express";
import morgan from "morgan";

// create express instance
const app = express();
const PORT = 8000;

// setup middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));
app.use(session({ 
  secret: 'ssshhhhh', 
  saveUninitialized: true, 
  resave: false 
}));

// Import handler functions
import handlerFunctions from "./controller.js"

// ENDPOINTS



  

// Open Server
ViteExpress.listen(app, PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})