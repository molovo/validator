import In from './in'

/**
 * Checks that the passed value is truthy
 *
 * @type {Accepted}
 */
export default class Accepted extends In {
  /**
   * The rule name
   *
   * @type {string}
   */
  _name = 'accepted'

  /**
   * The error message template
   *
   * @type {string}
   */
  _message = 'You must accept ${label}'

  /**
   * An array of valid values
   *
   * @type {Array}
   */
  _valid = ['yes', 'on', 1, true]
}
