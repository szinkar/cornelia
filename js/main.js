import { mobileMenuMenegment } from './modules/mobileMenuMenegment.js'
import { scrollToPoint } from './modules/scrollToPoint.js'
import { animatiomForScreenOne } from './utils/animatiomForScreenOne.js'
import { animatiomForScreenTwo } from './utils/animatiomForScreenTwo.js'
import { animatiomForScreenThree } from './utils/animatiomForScreenThree.js'
import { animatiomForScreenFour } from './utils/animatiomForScreenFour.js'
import { animatiomForScreenFive } from './utils/animatiomForScreenFive.js'
import { animationForScreenSix } from './utils/animationForScreenSix.js'
import { executionOnScroll } from './modules/executionOnScroll.js'

const menuIcon = document.querySelector('.menu__icon')
const menuNav = document.querySelector('.menu__body')


// const bodyLock = () => document.body.classList.toggle('body_lock')
// const toggleClassMenu = (menuList) => menuList.classList.toggle('menu__body_active')
// const toggleClassMenuIcon = (menuIcn) => {
//   menuIcn.classList.toggle('menu__icon_active')
//   menuIcn.children.item(0).classList.toggle('menu__icon-item_active')
// } 


// const mobileMenuMenegment = (menuIcn, menuList) => {
//   if (menuIcn) {
//     toggleClassMenu(menuList)
//     toggleClassMenuIcon(menuIcn)
//     bodyLock()
//   }
// }


// menuIcon.addEventListener('click', () => mobileMenuMenegment(menuIcon, menuNav))


// const animatiomForScreenOne = (classOne, classTwo, classThree) => {

//   const tl = anime.timeline({
//     easing: 'easeOutExpo',
//     duration: 750,
//   })

//   tl.add({
//     targets: classOne,
//     translateX: ['-122%', '0'],
//     opacity: 1,
//     rotate: 360,
//     duration: 800,
//     scale: ['0', '1'],
//   })
//     .add({
//       targets: classTwo,
//       translateX: ['-122%', '0'],
//       opacity: 1,
//       rotate: 360,
//       duration: 800,
//       scale: ['0', '1'],
//     })
//     .add({
//       targets: classThree,
//       bottom: '-4px',
//       duration: 800,
//       easing: 'easeOutInSine',
//     })
// }


// const animatiomForScreenTwo = (classOne) => {
//   anime({
//     targets: classOne,
//     translateY: ['100%', '0'],
//     opacity: 1,
//     duration: 800,
//     easing: 'easeInOutQuart',
//     delay: 100,
//   })
// }


// const animatiomForScreenThree = (classOne) => {
//   const tl = anime.timeline({
//     targets: classOne,
//     easing: 'spring',
//     translateY: ['100%', '0'],
//     duration: 800,
//     delay: 400,
//   })


//   tl.add({
//     opacity: 1,
//   }).add({
//     scale: 1,
//   })
// }


// const animatiomForScreenFour = (classOne) => {
//   const tl = anime.timeline({
//     targets: classOne,
//     easing: 'spring',
//     translateY: ['100%', '0'],
//     duration: 800,
//     delay: 400,
//   })

//   tl.add({
//     opacity: 1,
//   }).add({
//     scale: 1,
//   })
// }


// const animatiomForScreenFive = classOne => {
//   anime({
//     targets: classOne,
//     opacity: 1,
//     translateY: ['370', '0'],
//     delay: anime.stagger(100, { start: 500 }), // delay starts at 500ms then increase by 100ms for each elements.
//   })
// }



// const animationForScreenSix = classOne => {

//   const slideUp = {
//     distance: '150%',
//     origin: 'bottom',
//   }

//   ScrollReveal().reveal(classOne, slideUp)
// }


// const executionOnScroll = (className, func) => {
//   ScrollReveal().reveal(className, {
//     afterReveal: function () {
//       func(className)
//     },
//   })
// }

// implementation Scroll
// const getElements = selector => document.querySelectorAll(selector)


// const getDataValue = selector => document.querySelector(selector.dataset.goto)


// const arrayLengthCheck = selector => getElements(selector).length > 0


// const existenceAndDataValueCheck = link => link.dataset.goto && document.querySelector(link.dataset.goto)


// const classExistenceCheck = (iconSelector, className) => iconSelector.classList.contains(className)


// const goTo = (e, selectorOne, classNameOne, selectorTwo) => {
//   e.preventDefault()
//   const menuLink = e.target
//   if (existenceAndDataValueCheck(menuLink)) {
//     const goToBlock = getDataValue(menuLink)
//     const goToBlockValue = goToBlock.getBoundingClientRect().top + scrollY

//     // console.log(classExistenceCheck(menuIcon, 'menu__icon_active'))
//     if (classExistenceCheck(selectorOne, classNameOne)) {
//       toggleClassMenu(selectorTwo)
//       toggleClassMenuIcon(selectorOne)
//       bodyLock()
//     }

//     window.scrollTo({
//       top: goToBlockValue,
//       behavior: 'smooth',
//     })
//   }
// }


// const executionGoTo = (selectorOne, selectorTwo, classNameOne, selectorThree) => {
//   getElements(selectorOne).forEach((menuLink) => {
//     menuLink.addEventListener('click', (e) => goTo(e, selectorTwo, classNameOne, selectorThree))
//   })
// }


// const scrollToPoint = (classNameOne, selectorOne, classNameTwo, selectorTwo) => {
//   if (arrayLengthCheck(classNameOne)) {
//     executionGoTo(classNameOne, selectorOne, classNameTwo, selectorTwo)
//   }
// }

menuIcon.addEventListener('click', () => mobileMenuMenegment(menuIcon, menuNav))
scrollToPoint('.menu__list-href[data-goto]', menuIcon, 'menu__icon_active', menuNav)


ScrollReveal().reveal('.main__header', {
  afterReveal: function () {animatiomForScreenOne('.main__header-title', '.main__header-particle', '.main__img')},
})


executionOnScroll('.learn__unicorn', animatiomForScreenTwo)
executionOnScroll('.why__unicorn-top', animatiomForScreenThree)
executionOnScroll('.why__unicorn-bottom', animatiomForScreenFour)
executionOnScroll('.magic__block-unicorn', animatiomForScreenFive)
animationForScreenSix('.reviews__item')
executionOnScroll('.app__unicorn', animatiomForScreenTwo)




