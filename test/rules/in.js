import test from 'ava'
import Validator from '../../lib/validator'
import In from '../../lib/rules/in'

test('passes when value is in array', t => {
  const rule = new In(new Validator(), [1, 2, 3])
  t.true(rule.validate(1))
  t.true(rule.validate(2))
  t.true(rule.validate(3))
})

test('fails when value is not in array', t => {
  const rule = new In(new Validator(), [1, 2, 3])
  t.false(rule.validate(4))
  t.is(rule.message({label: 'Test'}), 'The value for Test must be one of 1, 2, 3')
})
