var chai = require('chai');
var expect = chai.expect;

describe('Calculator', function() {
  it('add(1, 1) should return 2', function() {
    let add = 1 + 1
    expect(add).to.equal(2);
  });
});