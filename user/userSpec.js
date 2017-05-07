const chai = require('chai');
const expect = require('chai').expect;

const user = require('./user');

describe('Example using mocha for unit test: ', function(){

    // using hooks "beforeEach" also can use
    // "before", which runs only once
    //
    beforeEach(function(){
        console.log('beforeEach');
    });

    // using "afteEach"
    // also you can use "after" -- runs only once

    afterEach(function(){
        console.log('afterEach');
    })



    const something = 'Hello You';
    const expectedOutput = user.sanitize(something);


    it('1st test: expect', function(){
        expect(expectedOutput).to.equal('hello you');
        expect(expectedOutput).to.not.equal('fooo');
        expect(expectedOutput).to.be.a('string');
        expect(expectedOutput).to.not.be.a('number');
        expect(expectedOutput).to.contain('you');
    });



    it('2nd test', function(){
        const something = 'Hello-You';
        const expectedOutput = user.sanitize(something);

        expect(expectedOutput).to.equal('hello you');
    });

    // can use "only" and "skip" once you run only once or
    // skip a test once
    it.skip('3rd test', function(){
        console.log('this test should not run -- therefore not printed!')
    })
})
