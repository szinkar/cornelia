
import { existenceAndDataValueCheck } from './existenceAndDataValueCheck.js'
import { getDataValue } from './getDataValue.js'
import { classExistenceCheck } from './classExistenceCheck.js'
import { toggleClassMenu } from './toggleClassMenu.js'
import { toggleClassMenuIcon } from './toggleClassMenuIcon.js'
import { bodyLock } from './bodyLock.js'

const goTo = (e, selectorOne, classNameOne, selectorTwo) => {
  e.preventDefault()
  const menuLink = e.target
  if (existenceAndDataValueCheck(menuLink)) {
    const goToBlock = getDataValue(menuLink)
    const goToBlockValue = goToBlock.getBoundingClientRect().top + scrollY

    // console.log(classExistenceCheck(menuIcon, 'menu__icon_active'))
    if (classExistenceCheck(selectorOne, classNameOne)) {
      toggleClassMenu(selectorTwo)
      toggleClassMenuIcon(selectorOne)
      bodyLock()
    }

    window.scrollTo({
      top: goToBlockValue,
      behavior: 'smooth',
    })
  }
}


export { goTo }