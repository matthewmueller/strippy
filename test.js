'use strict'

/**
 * Module Dependencies
 */

let assert = require('assert')
let s = require('./')

/**
 * Tests
 */

describe('strippy(str)', function() {
  it('should support basic newlines and breaks', function() {
    let str = `
      a
      b
      c
          d

      e
    `
    assert.equal(s(str), 'a b c     d\n\ne')
  })

  it('should work with the example', function() {
    let str = s(`
      this
      is a
      multiline

      with
      double
      breaks
      preserved.
    `)
    assert.equal(str, 'this is a multiline\n\nwith double breaks preserved.')
  })
})
