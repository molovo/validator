import test from 'ava'
import Validator from '../../lib/validator'
import NotIn from '../../lib/rules/not-in'

test('fails when value is in array', t => {
  const rule = new NotIn(new Validator(), [1, 2, 3])
  t.false(rule.validate(1))
  t.false(rule.validate(2))
  t.false(rule.validate(3))
  t.is(rule.message({label: 'Test'}), 'The value for Test must not be one of 1, 2, 3')
})

test('passes when value is not in array', t => {
  const rule = new NotIn(new Validator(), [1, 2, 3])
  t.true(rule.validate(4))
})
