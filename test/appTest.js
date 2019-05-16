const app = require('../app');
const assert = require('chai').assert;

describe('adder', ()=>{
    it('adderFunction must equal 5', ()=>{
        assert.equal(app.adderFunction(2,3),5)
    })
    it('adderFunction must return a number', ()=>{
        assert.typeOf(app.adderFunction(2,3),'number')
    })

})

describe('hello', ()=>{
    it('helloFunction must equal "Hello"', ()=>{
        assert.equal(app.helloFunction(),'Hello')
    })
    it('adderFunction must have 5 chars', ()=>{
        assert.equal(app.helloFunction().length,5)
    })

})
