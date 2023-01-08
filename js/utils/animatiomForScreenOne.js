const animatiomForScreenOne = (classOne, classTwo, classThree) => {
  const tl = anime.timeline({
    easing: 'easeOutExpo',
    duration: 750,
  })

  tl.add({
    targets: classOne,
    translateX: ['-122%', '0'],
    opacity: 1,
    rotate: 360,
    duration: 800,
    scale: ['0', '1'],
  })
    .add({
      targets: classTwo,
      translateX: ['-122%', '0'],
      opacity: 1,
      rotate: 360,
      duration: 800,
      scale: ['0', '1'],
    })
    .add({
      targets: classThree,
      bottom: '-4px',
      duration: 800,
      easing: 'easeOutInSine',
    })
}

export { animatiomForScreenOne }