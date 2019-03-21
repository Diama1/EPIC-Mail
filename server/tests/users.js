import mocha from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../app';
const should = chai.should();

chai.use(chaiHttp);

describe('Create Account', () => {
    it('it should create User account', (done) => {
        chai.request(server)
        .post('/api/v2/auth/signup')
        .send({
            name:"Diane",
            email:"dmahoro1@gmail.com",
            password: "hjhadja"
        })

        .end((err, res) => {
			res.should.have.status(201);
            res.body.should.be.an('object');
			done();
    })
})
it ('it should return 400 status when the user leaves an empty and field when the field is required ', (done) => {
  chai.request(server)
        .post('/api/v2/auth/signup')
        .send({
          email: 'dmahoro1"gmail.com',
          password: 'hjhjjajha'
        })
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.an('object');
          done();
        });



})




    // first you have to log in to get a token
    it('you should Log in to get the token ', (done) => {
      chai.request(server)
        .post('/api/v2/auth/login')
        .send({
          email: 'dmahoro1@gmail.com',
          password: 'hjhadja',
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an('object');
          done();
        });
    })

    it ('it should return 400 status when the user leaves an empty and field when the field is required ', (done) => {
      chai.request(server)
            .post('/api/v2/auth/login')
            .send({
              email: 'dmahoro1"gmail.com',
              password: 'hjhjjajha'
            })
            .end((err, res) => {
              res.should.have.status(400);
              res.body.should.be.an('object');
              done();
            });
    
    
    
    })
})

