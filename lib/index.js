import Alpha from './rules/alpha'
import Regex from './rules/regex'
import Required from './rules/required'
import {mapValues} from 'lodash/object'

/**
 * A data validator
 *
 * @type {Validator}
 */
export default class Validator {
  /**
   * A list of Validation rule classes mapped to the names they are used by
   *
   * @type {object}
   */
  static RuleClasses = {
    'alpha': Alpha,
    'regex': Regex,
    'required': Required
  }

  /**
   * Create the validator instance
   *
   * @param  {object} data  Data to validate
   * @param  {object} rules An object containing a list of validation rules
   *                        mapped to field names
   *
   * @return {Validator}
   */
  constructor (data = {}, rules = {}) {
    this.data = data
    this.rules = Object.keys(rules).map((name) => {
      return rules[name].split('|').map(this.parse)
    })
  }

  /**
   * Parse a rule string and create the corresponding Rule object
   *
   * @param  {string} rule The rule defenition
   *
   * @return {Rule}
   */
  parse (rule) {
    console.log(rule)
    [name, args] = rule.split(':')
    args = args.split(',')

    if (!this.RuleClasses.hasOwnProperty(name)) {
      throw new InvalidRuleError(`Rule ${name} does not exist`)
    }

    Rule = this.RuleClasses[name]

    return new Rule(this, args)
  }

  /**
   * Validate the provided data
   *
   * @return {bool}
   */
  validate () {
    let invalid = Object.keys(this.data).reduce((invalid, name) => {
      this.rules[name].forEach((rule) => {
        if (!rule.validate(this.data[name])) {
          invalid++
        }
      })
    })

    return invalid > 0
  }
}
