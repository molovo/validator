import Regex from './regex'

/**
 * Confirms that a value contains only letters, numbers, dashes and spaces
 *
 * @type {AlphaDash}
 */
export default class AlphaSpace extends Regex {
  /**
   * The rule name
   *
   * @type {string}
   */
  _name = 'alpha_space'

  /**
   * The error message template
   *
   * @type {string}
   */
  _message = '${label} must contain letters, numbers, dashes and spaces only'

  /**
   * A regex pattern against which the value will be compared
   *
   * @type {Regex}
   */
  _regex = /^[a-zA-Z0-9- ]+$/
}
