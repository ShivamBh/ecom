import gsap from 'gsap'

// hidden object animation

export function animateObjects() {
  var tl = gsap.timeline()
  tl.to('ul.transition li', {
    duration: 0.5,
    scaleY: 1,
    transformOrigin: 'bottom left',
    stagger: 0.2,
  })
  tl.to('ul.transition li', {
    duration: 0.5,
    scaleY: 0,
    transformOrigin: 'bottom left',
    stagger: 0.1,
    delay: 0.1,
  })
}

// new content to be faded in after animation
export function newContent(node) {
  return gsap.from(node.querySelectorAll('main'), {
    opacity: 0,
    delay: 1,
    duration: 2,
    stagger: 0.08,
  })
}


