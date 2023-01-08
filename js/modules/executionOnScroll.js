
const executionOnScroll = (className, func) => {
  ScrollReveal().reveal(className, {
    afterReveal: function () {
      func(className)
    },
  })
}

export { executionOnScroll }