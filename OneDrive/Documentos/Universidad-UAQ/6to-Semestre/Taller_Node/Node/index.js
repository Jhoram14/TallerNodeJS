const express  = require('express');

const app = express();

app.get('/', (req, res)=>
{
    res.send('Hello world from port 3000')
});

app.get('/myname', (req, res) => {
    
    const name = req.query.name || 'Jhovani'; // Si no se proporciona un nombre, usa "NombreDesconocido" por defecto
    
    res.send(`Hello World! My name is ${name}.`);
  });

app.listen(3000, ()=>
{
    console.log('La aplicación está escuchando en el puerto 3000...');
});