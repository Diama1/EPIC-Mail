import mocha from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../app';
const should = chai.should();

chai.use(chaiHttp);

describe('/POST message', () => {
    it('it should create message', (done) => {
        chai.request(server)
        .post('/api/v2/messages')
        .send({
            subject:"Testing",
	        message:"Hello world!",
	        status:"status"
        })

        .end((err, res) => {
			res.should.have.status(201);
            res.body.should.be.an('object');
            done();
        })
    })
})

describe('/GET all Messages', () => {
    it('it should Fetch all messages', (done) => {
        chai.request(server)
        .get('/api/v2/messages')

        .end((err, res) => {
			res.should.have.status(200);
            res.body.should.be.an('object');
            done();
        })
    })
})

describe('/GET a specific message', () => {
    it('it should Fetch a specific message', (done) => {
        chai.request(server)
        .get('/api/v2/messages/:1')
        

        .end((err, res) => {
			res.should.have.status(200);
            res.body.should.be.an('object');
            done();
        })
    })
})

describe('/DELETE a specific message', () => {
    it('it should delete a specific message', (done) => {
        chai.request(server)
        .delete('/api/v2/messages/1')
        

        .end((err, res) => {
			res.should.have.status(200);
            res.body.should.be.an('object');
            done();
        })
    })
    
})

describe('Get message By status', () => {
    it('it should fetch all message with status unread ', (done) => {
        chai.request(server)
        .get('/api/v2/messages/status/unread')

        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.an('object');
            done();
        })
    })
    it('it should fetch all message with status sent ', (done) => {
        chai.request(server)
        .get('/api/v1/messages/status/sent')

        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.an('object');
            done();
        })
    })


})
