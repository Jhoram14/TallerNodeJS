const express  = require('express');

const app = express();

app.get('/', (req, res)=>
{
    res.send('Hello world from port 3000')
});

app.listen(3000, ()=>
{
    console.log('La aplicación está escuchando en el puerto 3000...');
});