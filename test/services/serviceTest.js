let chai = require('chai')
let chaiHttp = require('chai-http')
let userData = require('../services/userData')
let parser = require('../services/parser')


chai.should()


describe('Services Tests', async () => {
    
    describe('get interactions', () => {
        it("It should get users interactions", (done) =>  {
            chai.request(userData)
                .getInteractions('ccaad09f-b2b7-4e37-9a24-5266aebd6082')
                .end((err, response) => {
                    response.body.should.be.a('array')
                    response.body.length.should.be.eq(3)
                done()
                })
        })
    })
    
})