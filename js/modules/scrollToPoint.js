import { arrayLengthCheck } from '../utils/arrayLengthCheck.js'
import { executionGoTo } from '../utils/executionGoTo.js'

const scrollToPoint = (classNameOne, selectorOne, classNameTwo, selectorTwo) => {
  if (arrayLengthCheck(classNameOne)) {
    executionGoTo(classNameOne, selectorOne, classNameTwo, selectorTwo)
  }
}

export { scrollToPoint }