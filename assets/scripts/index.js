const scrollList = document.querySelector('.scroll-list')
const items = Array.from(scrollList.children)

window.addEventListener('load', () => {
   items.forEach((item) => {
      const clone = item.cloneNode(true)
      clone.setAttribute('aria-hidden', 'true')
      scrollList.appendChild(clone)
   })
})
