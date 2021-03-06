const express = require('express');
const pino = require('express-pino-logger')();

const app = express(); app.use(express.urlencoded({ extended: false }));
app.use(pino);

app.get('/api/counter', (req, res) => {
    let value = Number(req.query.value);
    value = value + 1;
    res.setHeader('Content-Type', 'application/json');

    res.send(JSON.stringify({ value: value }));
});

app.get('/api/test', (req, res) => {
    const name = req.query.name || 'World';
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ message: `Hello ${name}!` }));
});

app.use('/', express.static(__dirname + '/../build'));

app.listen(3001, () => console.log('Express server is running on localhost:3001'));
