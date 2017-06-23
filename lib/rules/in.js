import Rule from '../rule'

/**
 * Check that a value is within an array of accepted values
 *
 * @type {In}
 */
export default class In extends Rule {
  /**
   * The rule name
   *
   * @type {string}
   */
  _name = 'in'

  /**
   * The error message template
   *
   * @type {string}
   */
  _message = 'The value for ${label} must be one of ${valid}'

  /**
   * An array of valid values
   *
   * @type {Array}
   */
  _valid = []

  /**
   * Create the rule instance
   *
   * @param  {Validator} validator
   * @param  {Array}     args
   *
   * @return {In}
   */
  constructor (validator, args = []) {
    super(validator, args)

    if (args.length > 0) {
      this._valid = args
    }
  }

  /**
   * The error message returned when this rule fails
   *
   * @param  {object} values
   *
   * @return {string}
   */
  message (values) {
    values['valid'] = this._valid.join(', ')
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
    return this._valid.indexOf(value) !== -1
  }
}
