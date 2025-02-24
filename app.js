// importar módulo express
import express from 'express';

// Crear instancia de express
const app = express();

// Configurar el puerto en el que el servidor escuchará
const PORT = 3000;

// Ruta básica
app.get('/', (req, res) => {
    res.send('¡Hello, world!');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Sevidor corriendo en http://localhost:${PORT}`);

});

// Express, ruteo básico
// Ruta GET para el home
// Solicitud http://localhost:3000/
app.get('/', (req, res) => {
    res.send('Página de inicio');
});

// Ruta GET para recibir datos simples
// Solicitud http://localhost:3000/data
app.get('/data', (req, res) => {
    res.send('Datos, recibidos');
});

// Ruteo con parámetro de ruta
// Solicitud http://localhost:3000/user/123
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`Perfil del usuario con ID ${userId}`);
});

// Ruteo con multiples parámetros
// Solicitud http://localhost:3000/products/electronics/456
app.get('/product/:category/:id', (req, res) => {
    const { category, id } = req.params;
    res.send(`Categoria ${category} ID del producto ${id}`);
});

// Ruteo con parámetro de consulta (URL)
// Solicitud http://localhost:3000/search?q=javascript
app.get('/search', (req, res) => {
    const query = req.query.q;
    res.send(`Resultado de la busqueda para ${query}`);
});

// --> Ruteo con multiples parametros de consulta
// Solicitud http://localhost:3000/filter?type=book&minPrice=10&maxPrice=50
app.get('/filter', (req, res) => {
    const { type, minPrice, maxPrice } = req.query;
    res.send(`Filtrar por tipo: ${type}, rango de precios: ${minPrice} - ${maxPrice}`);
});