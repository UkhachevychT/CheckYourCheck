var faker = require('faker');

var database = {
  check: {
    name: faker.commerce.department(),
    location: faker.address.city() + ' ' + faker.address.streetAddress(),
    products: []
  }
};

for (var i = 1; i <= 5; i++) {
  database.check.products.push({
    name: faker.commerce.productName(),
    type: faker.commerce.product(),
    quantity: faker.random.number(5),
    price: faker.commerce.price()
  });
}
console.log(JSON.stringify(database));
