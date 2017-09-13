const utils = require('./utils');

it('should add two numbers', () => {
  var res = utils.add(20, 13);
});

it('should square a number', () => {
  var res = utils.square(4);

  if(res !== 16)
    throw new Error(`Expected 16, instead got ${res}`);
});
