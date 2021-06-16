const express = require('express');
const app = express();
const cors = require('cors');
const jwt = require('express-jwt');
const port = 5000;

const utils = require('./utils');
app.use(cors());

utils.createCustomers(25)
utils.createVehicles(100)

app.get('/', (req, res) => res.send('Car Dealership API ready!'));

app.get('/api/vehicles', (req, res) => {
    res.json(utils.vehicles);
});

app.get('/api/vehicles/:id', (req, res) => {
    res.json(utils.vehicles.filter((v) => v.id === req.params.id)[0]);
});

app.get('/api/customers', (req, res) => {
    res.json(utils.customers);
});

app.post('/api/customers/:id', (req, res) => {
    res.json(utils.customers.filter((c) => c.id === req.params.id)[0]);
});

app.post('/api/login', (req, res) => {
    res.json({ token: '1234567890'})
});

app.post('/api/signup', (req, res) => {
    res.json({ token: '1234567890'})
});

app.post('/api/token', (req, res) => {
    res.json({ token: '1234567890'})
});

app.listen(port, () => console.log(`Car Dealership API listening on port ${port}!`));

module.exports = app;
