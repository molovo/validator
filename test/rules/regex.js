import test from 'ava'
import Validator from '../../lib/validator'
import Regex from '../../lib/rules/regex'

test('passes value with letters only', t => {
  const rule = new Regex(new Validator(), ['^[a-z]+$'])
  t.true(rule.validate('test'))
})

test('fails value containing non-letter characters', t => {
  const rule = new Regex(new Validator(), ['^[a-z]+$'])
  t.false(rule.validate('test123'))
})

test('prints error message', t => {
  const rule = new Regex(new Validator(), ['^[a-z]+$'])
  t.is(rule.message({name: 'test', label: 'Test'}), 'The value for Test failed to match the regex /^[a-z]+$/')
})

test('throws error if no regex is passed', t => {
  const rule = new Regex(new Validator(), [])
  const error = t.throws(() => rule.validate('test'))
  t.is(error.name, 'InvalidRuleError')
  t.is(error.message, 'You must provide a regular expression to compare against')
})
