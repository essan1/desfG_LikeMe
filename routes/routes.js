import express from 'express';
import path from 'path';
const router = express.Router();
const __dirname = import.meta.dirname;

//ruta principal
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'))
});


//ruta generica
router.get('*', (req, res) => {
    res.status(400);
    res.send("<h1><center>404 ERROR -- Pagina No Encontrada</center></h1>");
})

export default router;