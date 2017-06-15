import {lowerCase, startCase} from 'lodash/string'

/**
 * Convert a string to title case
 *
 * @param  {string} string
 *
 * @return {string}
 */
export function title (string) {
  return startCase(lowerCase(string))
}
