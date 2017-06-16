import test from 'ava'
import Validator from '../../lib/validator'
import AlphaDash from '../../lib/rules/alpha-dash'

test('passes value with letters only', t => {
  const rule = new AlphaDash(new Validator())
  t.true(rule.validate('test'))
})

test('passes value with letters, numbers and dashes', t => {
  const rule = new AlphaDash(new Validator())
  t.true(rule.validate('test-1-2-3'))
})

test('passes value with numbers only', t => {
  const rule = new AlphaDash(new Validator())
  t.true(rule.validate('123'))
})

test('fails value containing non-alphadash characters', t => {
  const rule = new AlphaDash(new Validator())
  t.false(rule.validate('test-1-2-3!'))
  t.is(rule.message({label: 'Test'}), 'Test must contain letters, numbers and dashes only')
})
