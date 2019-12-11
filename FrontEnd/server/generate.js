var faker = require('faker');

var database = {
  users: []
};

var user = {
  id: 1,
  username: faker.internet.userName(),
  email: faker.internet.email(),
  checks: []
}

for (var i = 1; i <= 5; i++) {
  user.checks.push({
    id: faker.random.number(),
    name: faker.commerce.department(),
    location: faker.address.city() + ' ' + faker.address.streetAddress(),
    products: [{
        name: faker.commerce.productName(),
        type: faker.commerce.product(),
        quantity: faker.random.number(5),
        price: faker.commerce.price()
      },
      {
        name: faker.commerce.productName(),
        type: faker.commerce.product(),
        quantity: faker.random.number(5),
        price: faker.commerce.price()
      }
    ]
  });
}
database.users.push(user);
console.log(JSON.stringify(database));
