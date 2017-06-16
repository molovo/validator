import Regex from './regex'

/**
 * Confirms that a value contains only letters
 *
 * @type {AlphaDash}
 */
export default class AlphaDash extends Regex {
  /**
   * The rule name
   *
   * @type {string}
   */
  _name = 'alpha_dash'

  /**
   * The error message template
   *
   * @type {string}
   */
  _message = '${label} must contain letters, numbers and dashes only'

  /**
   * A regex pattern against which the value will be compared
   *
   * @type {Regex}
   */
  _regex = /^[a-zA-Z0-9-]+$/
}
