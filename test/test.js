var chai = require('chai')
var expect = chai.expect
var bubbleSort = require('../index.js')

describe('bubble sort module', function() {
  it('should exist', function() {
    expect(bubbleSort).to.exist
  })

  it('should sort stuff', function() {
    var answer = bubbleSort([5, 2, 4, 3, 1])
    expect(answer).to.deep.equal([1, 2, 3, 4, 5])
  })

  it('should sort by alphabetical order', function() {
    var answer = bubbleSort(['e', 'd', 'A', 'c', 'b'])
    expect(answer).to.deep.equal(['A', 'b', 'c', 'd', 'e' ])
  })
})
