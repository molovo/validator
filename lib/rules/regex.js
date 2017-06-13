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
  name = 'required'

  /**
   * The error message template
   *
   * @type {string}
   */
  _message = 'The value for ${this.label || this.name} failed to match the regex /${this._regex.toString()}/'

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
   * Validate the provided value
   *
   * @return {boolean}
   */
  validate() {
    if (typeof this._regex === 'undefined') {
      throw new InvalidRuleError('')
    }

    return this.value.match(this._regex)
  }
}
