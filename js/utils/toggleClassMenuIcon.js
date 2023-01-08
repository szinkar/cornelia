const toggleClassMenuIcon = (menuIcn) => {
  menuIcn.classList.toggle('menu__icon_active')
  menuIcn.children.item(0).classList.toggle('menu__icon-item_active')
}

export { toggleClassMenuIcon }