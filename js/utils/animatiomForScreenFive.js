const animatiomForScreenFive = (classOne) => {
  anime({
    targets: classOne,
    opacity: 1,
    translateY: ['370', '0'],
    delay: anime.stagger(100, { start: 500 }), // delay starts at 500ms then increase by 100ms for each elements.
  })
}

export { animatiomForScreenFive }