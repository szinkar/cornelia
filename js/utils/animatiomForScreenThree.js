const animatiomForScreenThree = (classOne) => {
  const tl = anime.timeline({
    targets: classOne,
    easing: 'spring',
    translateY: ['100%', '0'],
    duration: 800,
    delay: 400,
  })

  tl.add({
    opacity: 1,
  }).add({
    scale: 1,
  })
}

export { animatiomForScreenThree }