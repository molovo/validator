import MissingValidatorError from './errors/missing-validator-error'
import InvalidRuleError from './errors/invalid-rule-error'
import template from 'lodash/string'

/**
 * The base class which all validation rules inherit
 *
 * @type {Rule}
 */
export default class Rule {
  /**
   * Create the rule instance
   *
   * @param  {Validator} validator
   * @param  {Array}     args
   *
   * @return {Rule}
   */
  constructor (validator, args = []) {
    if (typeof validator === 'undefined') {
      throw new MissingValidatorError('You must provide a Validator instance')
    }

    this.validator = validator
    this.args = args
  }

  /**
   * The rule's name
   *
   * @return {string}
   */
  get name () {
    throw new InvalidRuleError('Rule must have a name')
  }

  /**
   * The error message template for when this rule fails
   *
   * @param  {object} values
   *
   * @return {string}
   */
  message (values) {
    if (typeof this._message === 'undefined') {
      throw new InvalidRuleError(`Rule ${this.name} must define an error message`)
    }

    return template(this._message)(values)
  }

  /**
   * Validate the value
   *
   * @return {bool}
   */
  validate () {
    throw new InvalidRuleError(`Rule ${this.name} must define its own validate method`)
  }
}
