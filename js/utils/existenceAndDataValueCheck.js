const existenceAndDataValueCheck = (link) => link.dataset.goto && document.querySelector(link.dataset.goto)

export { existenceAndDataValueCheck }