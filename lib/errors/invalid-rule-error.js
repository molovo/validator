class InvalidRuleError extends Error {
  constructor (message) {
    super(message)
    this.name = 'InvalidRuleError'
  }
}

export default InvalidRuleError
