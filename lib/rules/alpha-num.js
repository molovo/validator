import Regex from './regex'

/**
 * Confirms that a value contains only letters
 *
 * @type {AlphaNum}
 */
export default class AlphaNum extends Regex {
  /**
   * The rule name
   *
   * @type {string}
   */
  _name = 'alpha_num'

  /**
   * The error message template
   *
   * @type {string}
   */
  _message = '${label} must contain letters and numbers only'

  /**
   * A regex pattern against which the value will be compared
   *
   * @type {Regex}
   */
  _regex = /^[a-zA-Z0-9]+$/
}
