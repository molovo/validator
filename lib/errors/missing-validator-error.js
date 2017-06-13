class MissingValidatorError extends Error {
  constructor (message) {
    super(message)
    this.name = 'MissingValidatorError'
  }
}

export default MissingValidatorError
