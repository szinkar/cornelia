const animatiomForScreenTwo = (classOne) => {
  anime({
    targets: classOne,
    translateY: ['100%', '0'],
    opacity: 1,
    duration: 800,
    easing: 'easeInOutQuart',
    delay: 100,
  })
}

export { animatiomForScreenTwo }