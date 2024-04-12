import express from 'express';
import router from './routes/routes.js'


const app = express();
const PORT = process.env.PORT || 3033;

//middleware para recibir json
app.use(express.json());

//middleware para recibir form
app.use(express.urlencoded((false)));

app.use(router);


app.listen(PORT, () => console.log(`serv running on http://localhost:${PORT}`));