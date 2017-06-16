import test from 'ava'
import Rule from '../lib/rule'
import Validator from '../lib/validator'

test('Rule class must be provided Validator instance', t => {
  const error = t.throws(() => new Rule())
  t.is(error.name, 'MissingValidatorError')
  t.is(error.message, 'You must provide a Validator instance')
})

test('Rule class must define name', t => {
  const rule = new Rule(new Validator())
  const error = t.throws(() => rule.name)
  t.is(error.name, 'InvalidRuleError')
  t.is(error.message, 'Rule must have a name')
})

test('Rule class must define validate method', t => {
  class TestRule extends Rule {
    // We create a getter for the name property so it can
    // be included in the error message
    get _name () { return 'test' }
  }

  const rule = new TestRule(new Validator())
  const error = t.throws(() => rule.validate())
  t.is(error.name, 'InvalidRuleError')
  t.is(error.message, 'Rule test must define its own validate method')
})

test('Rule class must define error message', t => {
  class TestRule extends Rule {
    // We create a getter for the name property so it can
    // be included in the error message
    get _name () { return 'test' }
  }

  const rule = new TestRule(new Validator())
  const error = t.throws(() => rule.message())
  t.is(error.name, 'InvalidRuleError')
  t.is(error.message, 'Rule test must define an error message')
})

test('Rule class templates error message', t => {
  class TestRule extends Rule {
    get _message () { return 'The name ${name} should appear here' }
  }

  const rule = new TestRule(new Validator())
  const message = rule.message({name: 'test'})
  t.is(message, 'The name test should appear here')
})
