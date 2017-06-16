import test from 'ava'
import Validator from '../../lib/validator'
import AlphaNum from '../../lib/rules/alpha-num'

test('passes value with letters only', t => {
  const rule = new AlphaNum(new Validator())
  t.true(rule.validate('test'))
})

test('passes value with letters and numbers', t => {
  const rule = new AlphaNum(new Validator())
  t.true(rule.validate('test123'))
})

test('passes value with numbers only', t => {
  const rule = new AlphaNum(new Validator())
  t.true(rule.validate('123'))
})

test('fails value containing non-alphanumeric characters', t => {
  const rule = new AlphaNum(new Validator())
  t.false(rule.validate('test123!'))
  t.is(rule.message({label: 'Test'}), 'Test must contain letters and numbers only')
})
