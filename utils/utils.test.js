const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {

  it('should add two numbers', () => {
    var res = utils.add(20, 13);
  
    expect(res).toBe(33).toBeA('number');
  });
  
  it('should async add two numbers', (done) => {
    utils.asyncAdd(5, 7, (res) => {
      expect(res).toBe(12).toBeA('number');
      done();
    });
  });
  
  it('should square a number', () => {
    var res = utils.square(4);
  
    expect(res).toBe(16).toBeA('number');
  });
  
  it('should async square a number', (done) => {
    utils.asyncSquare(8, (res) => {
      expect(res).toBe(64).toBeA('number');
      done();
    });
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
});
