let chai = require('chai')
let chaiHttp = require('chai-http')
let app = require ('../../app')

chai.should()

chai.use(chaiHttp)

describe('API Tests', async () => {
    describe('get cryptos', () => {
        it("It should get Crypto values of Tokens", (done) =>  {
            chai.request(app)
                .get('api/tegger/ccaad09f-b2b7-4e37-9a24-5266aebd6082')
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('object')
                    response.body.length.should.be.eq(3)
                done()
                })
        })
    })    
})