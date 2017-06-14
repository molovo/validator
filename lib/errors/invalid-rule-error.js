export default class InvalidRuleError extends Error {
  constructor (message) {
    super(message)
    this.name = 'InvalidRuleError'
  }
}
