import test from 'ava'
import Validator from '../../lib/validator'
import Accepted from '../../lib/rules/accepted'

test('passes when value is in array', t => {
  const rule = new Accepted(new Validator())
  t.true(rule.validate('yes'))
  t.true(rule.validate('on'))
  t.true(rule.validate(1))
  t.true(rule.validate(true))
})

test('fails when value is not in array', t => {
  const rule = new Accepted(new Validator())
  t.false(rule.validate('wrong'))
  t.is(rule.message({label: 'Test'}), 'You must accept Test')
})
