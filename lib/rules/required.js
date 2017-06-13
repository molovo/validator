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
  name = 'required'

  /**
   * The error message template
   *
   * @type {string}
   */
  _message = '${label} is required'

  /**
   * Validate the provided value
   *
   * @return {boolean}
   */
  validate(value) {
    return value != null
  }
}
