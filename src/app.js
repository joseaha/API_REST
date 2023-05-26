import express from "express";
import config from './config';
import personaRoutes from './route/persona.routes'
const app = express();

app.set('port', config.port);
//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(personaRoutes)
export default app;