const faker = require('faker');

// Faker API: https://marak.github.io/faker.js/

const vehicles = [];
const customers = [];
const makes = ['Honda', 'Ford', 'Tesla', 'Volkswagen', 'Porsche', 'BMW', 'Toyota', 'Kia', 'Jeep', 'Chrysler', 'GM'];
// TODO: Finish ...
const newMakes = {
    Honda: ['civic'],
    Ford: ['F150', 'Mustang'],
    Tesla: ['Model S', 'Model Y'],
    Volkswagen: ['Passat', 'Golf'],
    Toyota: ['Unknown'],
    BMW: ['series 1', 'series 2'],
    Porsche: ['Porsche'],

};
const colors = ['Red', 'Silver', 'Black', 'Blue', 'Silver'];

function createVehicles(count) {
    for (let i = 1; i < count; i++) {
        vehicles.push({
            id: Math.floor(Math.random() * 2000) + 500,
            make: makes[Math.floor(Math.random() * makes.length)],
            model: 'Unknown',
            year: Math.floor(Math.random() * (2021 - 2000) + 2000),
            image: 'https://via.placeholder.com/200',
            color: 'Silver',
            price: faker.finance.amount(),
            available: true
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
