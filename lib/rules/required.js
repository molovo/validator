import Rule from '../rule'

/**
 * Confirms that a value is not empty
 *
 * @type {Required}
 */
export default class Required extends Rule {
  /**
   * The rule name
   *
   * @type {string}
   */
  _name = 'required'

  /**
   * The error message template
   *
   * @type {string}
   */
  _message = '${label} is required'

  /**
   * Validate the provided value
   *
   * @param {mixed} value
   *
   * @return {boolean}
   */
  validate (value) {
    return !!value
  }
}
