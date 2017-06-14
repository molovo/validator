export default class MissingValidatorError extends Error {
  constructor (message) {
    super(message)
    this.name = 'MissingValidatorError'
  }
}
