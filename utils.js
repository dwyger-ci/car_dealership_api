const faker = require('faker');
const guid = require('uuid');

// Faker API: https://marak.github.io/faker.js/

const vehicles = [];
const customers = [];
const models = [];
const makes = [];
const carData = {
    Fighter: ['Tie Fighter', 'X-Wing', 'Passport'],
    Bomber: ['Tie Bomber', 'Droid Bomber', 'Assult Bomber'],
    Tesla: ['Model S', 'Model Y', 'Model 3'],
    Volkswagen: ['Passat', 'Golf'],
    Toyota: ['Camry', 'Prius', 'Corolla'],
    BMW: ['series 1', 'series 2'],
    Porsche: ['Boxter', 'Cayman'],
    Moons: ['The Moon', 'Uropa', 'Ganymede'],
    Planets: ['Pluto', 'Mercury', 'Mars'],
    Lightfreighter: ['Millenium Falcon', 'The Ghost'],
    Spacestation: ['Internation Space Station', 'Tiangong space station', 'Salyut 7']
};
const colors = ['Red', 'Silver', 'Black', 'Blue', 'Silver'];

function createVehicles(count) {
    for (let i = 1; i < count; i++) {
        for (const make in carData) {
            let models = carData[make];
            vehicles.push({
                id: guid.v4(),
                make: make,
                model: models[Math.floor(Math.random() * models.length)],
                year: Math.floor(Math.random() * (2050 - 2000) + 2000),
                image: 'https://via.placeholder.com/200',
                color: colors[Math.floor(Math.random() * colors.length)],
                price: faker.finance.amount(),
                available: true
            });
        }
    }
}

function createCustomers(count) {
    for (let i = 1; i < count; i++) {
        customers.push({
            id: guid.v4(),
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email()
        })
    }
}

function getMakes() {
  for (const make in carData) {
    makes.push(make);
  }
}

function getModels() {
  for (const make in carData) {
    const modelList = carData[make]
    for (let i = 0; i < modelList.length; i++) {
      models.push(modelList[i]);
    }
  }
}

module.exports = {
    vehicles,
    customers,
    createCustomers,
    createVehicles,
    getModels,
    models,
    getMakes,
    makes
}
