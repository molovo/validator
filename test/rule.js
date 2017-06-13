import test from 'ava'
import Rule from '../lib/rule'
import Validator from '../lib'
import InvalidRuleError from '../lib/errors/invalid-rule-error'

test('Rule class must define name', t => {
  const rule = new Rule(new Validator())
  const error = t.throws(() => rule.name, InvalidRuleError)
  t.is(error.message, 'Rule must have a name')
})

test('Rule class must define validate method', t => {
  class TestRule extends Rule {
    // We create a getter for the name property so it can
    // be included in the error message
    get name () { return 'test' }
  }

  const rule = new TestRule(new Validator())
  const error = t.throws(() => rule.validate(), InvalidRuleError)
  t.is(error.message, 'Rule test must define its own validate method')
})
