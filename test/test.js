
const chai = require('chai')
const expect = chai.expect

const problemone = require('../src/problemone');
const problemsix = require('../src/problemsix');

describe('Test', () => {
	describe('Problem1', () => {
		it('When n is equal to 0, the sum is 0.', () => {
			expect(problemone.multiples(0)).to.equal(0);
		})
		it('When n is equal to 10, the sum is 23.', () => {
			expect(problemone.multiples(10)).to.equal(23);
		})
		it('When n is equal to 1000, the sum is 233168.', () => {
			expect(problemone.multiples(1000)).to.equal(233168);
		})
	})

	describe('Problem6', ()=>{
		it('When n is equal to 0, the result is 0',() =>{
			expect(problemsix.sumDifference(0)).to. equal(0);
		})
		it('When n is equal to 1, the result is 0',() =>{
			expect(problemsix.sumDifference(1)).to. equal(0);
		})
		it('When n is equal to 10, the result is 2640',() =>{
			expect(problemsix.sumDifference(10)).to. equal(2640);
		})
	})
})