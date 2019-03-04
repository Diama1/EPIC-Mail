import mocha from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../app';
const should = chai.should();

chai.use(chaiHttp);

describe('Create Account', () => {
    it('it should create User account', (done) => {
        chai.request(server)
        .post('/api/v1/create_account')
        .send({
            name:"Diane",
            email:"dmahoro@gmail.com",
            password: "sddsd"
        })

        .end((err, res) => {
			res.should.have.status(201);
            res.body.should.be.an('object');
			done();
    })
})

})

