import { getElements } from './getElements.js'

const arrayLengthCheck = (selector) => getElements(selector).length > 0

export { arrayLengthCheck }