import test from 'ava'
import Validator from '../../lib/validator'
import ActiveURL from '../../lib/rules/active-url'

test('passes with valid URL', t => {
  const rule = new ActiveURL(new Validator())
  t.true(rule.validate('https://google.com'))
})

test('fails with invalid URL', t => {
  const rule = new ActiveURL(new Validator())
  t.false(rule.validate('http://not.a.url'))
  t.is(rule.message({label: 'URL'}), 'URL must be a active URL')
})
