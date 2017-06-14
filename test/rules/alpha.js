import test from 'ava'
import Validator from '../../lib/validator'
import Alpha from '../../lib/rules/alpha'

test('passes value with letters only', t => {
  const rule = new Alpha(new Validator())
  t.true(rule.validate('test'))
})

test('fails value containing non-letter characters', t => {
  const rule = new Alpha(new Validator())
  t.false(rule.validate('test123'))
  t.is(rule.message({label: 'Test'}), 'Test must contain letters only')
})
