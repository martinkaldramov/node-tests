const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
  var res = utils.add(20, 13);

  expect(res).toBe(33).toBeA('number');
});

it('should square a number', () => {
  var res = utils.square(4);

  expect(res).toBe(16).toBeA('number');
});

it('should verify first and last names are set', () => {
  var user = utils.setName({
    location: 'Sofia, Bulgaria',
    job: 'Tech Support'
  }, 'Martin Kaldramov');

  expect(user)
    .toBeA('object')
    .toInclude({
      firstName: 'Martin',
      lastName: 'Kaldramov'
  });
});
