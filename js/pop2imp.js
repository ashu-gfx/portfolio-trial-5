const heroText = document.querySelector('.hero-big-name')

const throttleFunction = (func, delay) => {
  let prev = 0
  return (...args) => {
    let now = new Date().getTime()
    if (now - prev > delay) {
      prev = now
      return func(...args)
    }
  }
}

const images5 = [
  'https://images.unsplash.com/photo-1578632292335-df3abbb0d586?q=80&w=687&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1575818184258-1ceb64f40ff8?q=80&w=687&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1549570652-97324981a6fd?q=80&w=685&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1546536133-d1b07a9c768e?q=80&w=686&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1560727749-cc261b23794c?q=80&w=687&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1512101903502-7eb0c9022c74?q=80&w=687&auto=format&fit=crop'
]

heroText.addEventListener(
  'mousemove',
  throttleFunction(dets => {
    // Get the bounding box of the text element
    const rect5 = heroText.getBoundingClientRect()

    // Calculate the "Dead Zone": Top of the text + 20% of its height
    const threshold5 = rect5.top + rect5.height * 0.2

    // Only trigger if mouse is below the 20% mark of the text element
    if (dets.clientY > threshold5) {
      // 1. Create container
      const div5 = document.createElement('div')
      div5.classList.add('imagediv')
      div5.style.left = dets.clientX + 'px'
      div5.style.top = dets.clientY + 'px'

      // 2. Create image
      const img5 = document.createElement('img')
      const randomIndex5 = Math.floor(Math.random() * images5.length)
      img5.setAttribute('src', images5[randomIndex5])

      div5.appendChild(img5)
      document.body.appendChild(div5)

      // 3. GSAP Animation Logic
      const randomRotation5 = Math.floor(Math.random() * 40) - 20
      gsap.set(div5, { rotate: randomRotation5 })

      const tl5 = gsap.timeline()
      tl5
        .to(img5, {
          y: '0%',
          duration: 0.5,
          ease: 'power2.out'
        })
        .to(img5, {
          y: '120%',
          duration: 0.6,
          ease: 'power2.in',
          delay: 0.2,
          onComplete: () => div5.remove() // Clean DOM
        })
    }
  }, 100)
)
