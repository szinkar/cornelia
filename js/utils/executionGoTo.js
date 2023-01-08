import { getElements } from './getElements.js'
import { goTo } from './goTo.js'

const executionGoTo = (selectorOne, selectorTwo, classNameOne, selectorThree) => {
  getElements(selectorOne).forEach((menuLink) => {
    menuLink.addEventListener('click', (e) => goTo(e, selectorTwo, classNameOne, selectorThree))
  })
}

export { executionGoTo }