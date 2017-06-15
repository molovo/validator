import Alpha from './rules/alpha'
import Regex from './rules/regex'
import Required from './rules/required'

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
  static ruleClasses = {
    'alpha': Alpha,
    'regex': Regex,
    'required': Required
  }

  /**
   * A list of error messages produced by the validator
   *
   * @type {object}
   */
  _errors = {}

  /**
   * Get the error messages for the validator
   *
   * @return {object}
   */
  get errors() {
    return this._errors
  }

  /**
   * Create the validator instance
   *
   * @param  {object} data      The data to validate
   * @param  {object} rules     An object containing a list of validation rules
   *                            mapped to field names
   * @param  {object} messages  An object containing a list of
   *                            custom error messages
   * @param  {object} labels    An object containing a list of
   *                            custom labels
   *
   * @return {Validator}
   */
  constructor (data = {}, rules = {}, messages = {}, labels = {}) {
    this.data     = data
    this.messages = messages
    this.labels   = labels

    this.rules = Object.keys(rules).map((name) => {
      return rules[name].split('|').map((rule) => this.parse(rule))
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
    let [name, args] = rule.split(':')

    if (typeof args === 'array') {
      args = args.split(',')
    }

    if (!Validator.ruleClasses[name]) {
      throw new InvalidRuleError(`Rule ${name} does not exist`)
    }

    const Rule = Validator.ruleClasses[name]
    return new Rule(this, args)
  }

  /**
   * Validate the provided data
   *
   * @return {bool}
   */
  validate () {
    let errors = {}

    Object.keys(this.data).forEach((name) => {
      for (let rule in this.rules[name]) {
        if (!rule.validate(this.data[name])) {
          if (this.messages[name]) {
            errors[name] = this.messages[name]
            break
          }

          let label = this.labels[name] || title(name)
          errors[name] = rule.message({name: name, label: label})
          break
        }
      }
    })

    this._errors = errors

    return Object.keys(errors).length === 0
  }
}
