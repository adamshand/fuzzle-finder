const gallery = document.querySelector('#gallery')

const getVal = (elem, style) =>
  parseInt(window.getComputedStyle(elem).getPropertyValue(style))

const getHeight = (item) =>
  item.querySelector('.content').getBoundingClientRect().height

const resizeAll = () => {
  let altura = getVal(gallery, 'grid-auto-rows')
  let gap = getVal(gallery, 'grid-row-gap')
  gallery.querySelectorAll('.gallery-item').forEach((item) => {
    item.style.gridRowEnd =
      'span ' + Math.ceil((getHeight(item) + gap) / (altura + gap))
  })
}

gallery.querySelectorAll('img').forEach((x) => {
  x.addEventListener('load', () => {
    let altura = getVal(gallery, 'grid-auto-rows')
    let gap = getVal(gallery, 'grid-row-gap')
    const gitem = x.parentElement.parentElement
    gitem.style.gridRowEnd =
      'span ' + Math.ceil((getHeight(gitem) + gap) / (altura + gap))
  })
})

window.addEventListener('resize', resizeAll)
gallery.querySelectorAll('.gallery-item').forEach((x) => {
  x.addEventListener('click', () => {
    x.classList.toggle('full')
  })
})
