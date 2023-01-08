const animationForScreenSix = (classOne) => {
  const slideUp = {
    distance: '150%',
    origin: 'bottom',
  }

  ScrollReveal().reveal(classOne, slideUp)
}

export { animationForScreenSix }