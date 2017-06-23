import In from './in'

/**
 * Check that a value is NOT within an array of values
 *
 * @type {NotIn}
 */
export default class NotIn extends In {
  /**
   * The rule name
   *
   * @type {string}
   */
  _name = 'not-in'

  /**
   * The error message template
   *
   * @type {string}
   */
  _message = 'The value for ${label} must not be one of ${valid}'

  /**
   * Validate the provided value
   *
   * @param {mixed} value
   *
   * @return {boolean}
   */
  validate (value) {
    return !super.validate(value)
  }
}
