import Rule from '../rule'
import 'babel-polyfill'
import fetch, {FetchError} from 'node-fetch'

/**
 * Performs a DNS lookup on the value to ensure that it is an active URL
 */
export default class ActiveURL extends Rule {
  /**
   * The rule name
   *
   * @type {string}
   */
  _name = 'active_url'

  /**
   * The error message template
   *
   * @type {string}
   */
  _message = '${label} must be an active URL'

  /**
   * Validate the provided value
   *
   * @param {mixed} value
   *
   * @return {boolean}
   */
  validate (value) {
    try {
      fetch(value, {method: 'HEAD'})
    } catch (err) {
      if (!(err instanceof FetchError)) {
        throw err
      }

      return false
    }

    return true
  }
}
