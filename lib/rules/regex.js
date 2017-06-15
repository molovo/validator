import InvalidRuleError from '../errors/invalid-rule-error'
import Rule from '../rule'

/**
 * Compares a value against a regular expression
 *
 * @type {Regex}
 */
export default class Regex extends Rule {
  /**
   * The rule name
   *
   * @type {string}
   */
  _name = 'regex'

  /**
   * The error message template
   *
   * @type {string}
   */
  _message = 'The value for ${label} failed to match the regex ${regex}'

  /**
   * Create the rule instance
   *
   * @param  {Validator} validator
   * @param  {Array}     args
   *
   * @return {Regex}
   */
  constructor(validator, args = []) {
    super(validator, args)

    if (args.length === 1) {
      this._regex = new RegExp(this.args[0])
    }
  }

  /**
   * The error message template for when this rule fails
   *
   * @param  {object} values
   *
   * @return {string}
   */
  message(values) {
    values['regex'] = this._regex
    return super.message(values)
  }

  /**
   * Validate the provided value
   *
   * @param {mixed} value
   *
   * @return {boolean}
   */
  validate(value) {
    if (typeof this._regex === 'undefined') {
      throw new InvalidRuleError('You must provide a regular expression to compare against')
    }

    return !!value.match(this._regex)
  }
}
