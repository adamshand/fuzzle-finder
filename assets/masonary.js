const gallery = document.querySelector('#gallery')

const getVal = (elem, style) =>
  parseInt(window.getComputedStyle(elem).getPropertyValue(style))

const getHeight = (item) =>
  item.querySelector('.content').getBoundingClientRect().height

const resizeAll = () => {
  const altura = getVal(gallery, 'grid-auto-rows')
  const gap = getVal(gallery, 'grid-row-gap')
  gallery.querySelectorAll('.gallery-item').forEach((item) => {
    // var e = item
    item.style.gridRowEnd =
      'span ' + Math.ceil((getHeight(item) + gap) / (altura + gap))
  })
}

gallery.querySelectorAll('img').forEach((item) => {
  item.classList.add('byebye')
  if (item.complete) {
    console.log(item.src)
  } else {
    item.addEventListener('load', () => {
      const altura = getVal(gallery, 'grid-auto-rows')
      const gap = getVal(gallery, 'grid-row-gap')
      const gitem = item.parentElement.parentElement
      gitem.style.gridRowEnd =
        'span ' + Math.ceil((getHeight(gitem) + gap) / (altura + gap))
      item.classList.remove('byebye')
    })
  }
})

window.addEventListener('resize', resizeAll)
gallery.querySelectorAll('.gallery-item').forEach((item) => {
  item.addEventListener('click', function () {
    item.classList.toggle('full')
  })
})
