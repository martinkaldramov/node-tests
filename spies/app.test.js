const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app.js');

describe('App', () => {

  var db = {
    saveUser: expect.createSpy()
  }
  app.__set__('db', db);

  it('should call the spy correctly', () => {
    var spy = expect.createSpy();
    spy();
    expect(spy).toHaveBeenCalled();
  });

  it('Should call saveuser with an object', () => {
    var email = 'martinkaldramov@example.com';
    var password = 'abcdEFG';

    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({email, password});
  });

});
