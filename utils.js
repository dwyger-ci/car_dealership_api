const faker = require('faker');

// Faker API: https://marak.github.io/faker.js/

const vehicles = [];
const customers = [];
const models = ['Honda', 'Ford', 'Tesla', 'Volkswagen', 'Porsche', 'BMW', 'Toyota', 'Kia', 'Jeep', 'Chrysler', 'GM'];

function createVehicles(count) {
    for (let i = 1; i < count; i++) {
        vehicles.push({
            id: Math.floor(Math.random() * 2000) + 500,
            model: models[Math.floor(Math.random() * models.length)],
            year: Math.floor(Math.random() * (2021 - 2000) + 2000),
            image: 'https://via.placeholder.com/200',
            price: faker.finance.amount()
        })
    }
}

function createCustomers(count) {
    for (let i = 1; i < count; i++) {
        customers.push({
            id: Math.floor(Math.random() * 2000) + 500,
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email()
        })
    }
}

module.exports = {
    vehicles,
    customers,
    createCustomers,
    createVehicles
}
