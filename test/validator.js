import test from 'ava'
import Validator from '../lib/validator'

test('is valid without data', t => {
  const validator = new Validator()
  t.true(validator.validate())
})

test('is valid without rules', t => {
  const validator = new Validator({name: 'value'})
  t.true(validator.validate())
})

test('parses rule arguments', t => {
  const validator = new Validator({name: 'value'}, {name: 'required:1,2,3'})
  t.deepEqual(validator.rules.name[0].args, ['1', '2', '3'])
})

test('throws error for invalid rule', t => {
  const error = t.throws(() => new Validator({}, {name: 'not-a-rule'}))
  t.is(error.name, 'InvalidRuleError')
  t.is(error.message, 'Rule not-a-rule does not exist')
})

test('is valid when rules pass', t => {
  const validator = new Validator({name: 'value'}, {name: 'required'})
  t.true(validator.validate())
})

test('stores error messages for failures', t => {
  const validator = new Validator({name: ''}, {name: 'required'})
  t.false(validator.validate())
  t.deepEqual(validator.errors, {name: 'Name is required'})
})

test('reports custom error message', t => {
  const validator = new Validator({name: ''}, {name: 'required'}, {name: 'This is a custom error message'})
  t.false(validator.validate())
  t.deepEqual(validator.errors, {name: 'This is a custom error message'})
})
