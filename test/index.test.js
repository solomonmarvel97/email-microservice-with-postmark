const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');

chai.use(chaiHttp);
const expect = chai.expect;

describe('POST /email', () => {
  it('should send an email and return a successful response', (done) => {
    chai
      .request(app)
      .post('/email')
      .send({
      "recipient": "marvelousakporowho@gmail.com",
      "subject": "Hello World!",
      "message": "The world is changing fast"
      })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('Received response');
        // Add more assertions if needed
        done();
      });
  });

  it('should return an error response if the request body is invalid', (done) => {
    chai
      .request(app)
      .post('/email')
      .send({
      "recipient": "marvelousakporowho@gmail.com",
      "subject": "Hello World!"
      })
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body).to.have.property('message');
        // Add more assertions if needed
        done();
      });
  });
});
