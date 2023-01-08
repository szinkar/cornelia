import { bodyLock } from '../utils/bodyLock.js'
import { toggleClassMenu } from '../utils/toggleClassMenu.js'
import { toggleClassMenuIcon } from '../utils/toggleClassMenuIcon.js'

const mobileMenuMenegment = (menuIcn, menuList) => {
  if (menuIcn) {
    toggleClassMenu(menuList)
    toggleClassMenuIcon(menuIcn)
    bodyLock()
  }
}

export { mobileMenuMenegment }