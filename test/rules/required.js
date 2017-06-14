import test from 'ava'
import Validator from '../../lib/validator'
import Required from '../../lib/rules/required'

test('passes when value exists', t => {
  const rule = new Required(new Validator())
  t.true(rule.validate('test'))
})

test('fails when value is missing', t => {
  const rule = new Required(new Validator())
  t.false(rule.validate())
  t.is(rule.message({label: 'Test'}), 'Test is required')
})

test('fails when value is empty', t => {
  const rule = new Required(new Validator())
  t.false(rule.validate(''))
  t.is(rule.message({label: 'Test'}), 'Test is required')
})
