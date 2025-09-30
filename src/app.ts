// Importing morgan , express 
import express, { Express } from "express";
import morgan from "morgan";

const app: Express = express();

// Use morgan for HTTP request logging
app.use(morgan("combined"));

export default app;

