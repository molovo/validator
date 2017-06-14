import test from 'ava'
import Validator from '../lib/validator'

test('is valid without data', t => {
  const validator = new Validator()
  t.true(validator.validate())
})

test('is valid without rules', t => {
  const validator = new Validator({key: 'value'})
  t.true(validator.validate())
})

test('is valid when rules pass', t => {
  const validator = new Validator({key: 'value'}, {key: 'required'})
  t.true(validator.validate())
})

test('stores error messages for failures', t => {
  const validator = new Validator({key: null}, {key: 'required'})
  t.false(validator.validate())
  t.deepEqual(validator.errors, {key: 'Key is required'})
})
