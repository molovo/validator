import Regex from './regex'

/**
 * Confirms that a value contains only letters
 *
 * @type {Alpha}
 */
export default class Alpha extends Regex {
  /**
   * The rule name
   *
   * @type {string}
   */
  _name = 'alpha'

  /**
   * The error message template
   *
   * @type {string}
   */
  _message = '${label} must contain letters only'

  /**
   * A regex pattern against which the value will be compared
   *
   * @type {Regex}
   */
  _regex = /^[a-zA-Z]+$/
}
