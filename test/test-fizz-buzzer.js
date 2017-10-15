const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

//unit test for the fizzBuzzer function
describe('fizzBuzzer', function (){
	//test normal cases, if divisible by 3 and 5
	it('should return fizz-buzz if divisible by 3 and 5', function(){
		const assert = [15, 30, 45, 60, 75];
		for(let i=0; i < assert.length; i++){
			fizzBuzzer(assert[i]).should.equal('fizz-buzz');
		}
	});
	//test normal cases, if divisible by 5
	it('should return buzz if divisible by 5', function(){
		const assert = [5, 10, 20, 25, 35];
		for(let i=0; i < assert.length; i++){
			fizzBuzzer(assert[i]).should.equal('buzz');
		}
	});
	//test normal cases, if divisible by 3
	it('should return fizz if divisible by 3', function(){
		const assert = [3, 6, 9, 12, 18];
		for(let i=0; i < assert.length; i++){
			fizzBuzzer(assert[i]).should.equal('fizz');
		}
	});
	//test normal cases, if not divisible by 3 or 5
	it('should return the number if not divisible by 3 or 5', function(){
		const assert = [1, 2, 4, 7, 8];
		for(let i=0; i < assert.length; i++){
			fizzBuzzer(assert[i]).should.equal(assert[i]);
		}
	});
	//throw an error if input is not a number
	it('should throw an error if the input is not a number', function (){
		const assert = ['hello', [1, 'hi'], function() {}, {}, null, true, false];
		//for(let i=0; i < assert.length; i++){
		//	fizzBuzzer(assert[i]).should.throw(Error);
		//}
		assert.forEach(function(value) {
			(function() {
				fizzBuzzer(value)
			}).should.throw(Error);
		});
	});
});