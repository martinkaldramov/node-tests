const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

it('should return Hello world response', (done) => {
  request(app)
    .get('/')
    .expect(404)
    .expect((res) => {
      expect(res.body).toInclude({error: 'Page not found.'});      
    })
    .end(done);
});

it('should check if i exist in the users array', (done) => {
  request(app)
    .get('/users')
    .expect(200)
    .expect((res) => {
      expect(res.body).toInclude(
        {
          name: 'Martin',
          age: 25
        }
      );
    })
    .end(done);
});

