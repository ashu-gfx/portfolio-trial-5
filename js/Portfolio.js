const portfolioItems = [
  {
    id: 'p1',
    title: 'HEED',
    category: 'UI UX Case Study',
    imageUrl: 'images/portfolio images/p1.png',
    wistiaId: '3u7jmeqyc0',
    tags: ['Figma', 'Photoshop', 'Illustrator']
  },
  {
    id: 'p2',
    title: 'Fly way',
    category: 'Travel Agency Website Design',
    imageUrl: 'images/portfolio images/p2.png',
    wistiaId: 'kf09hwi5fw',
    tags: ['Figma']
  },
  {
    id: 'p3',
    title: 'HEED',
    category: 'UI UX Case Study',
    imageUrl: 'images/portfolio images/p3.png',
    wistiaId: 'e2j5848cmo',
    tags: ['Figma', 'Photoshop', 'Illustrator']
  },
  {
    id: 'p4',
    title: 'Fly way',
    category: 'Travel Agency Website Design',
    imageUrl: 'images/portfolio images/p4.png',
    wistiaId: '9rkoc4iwzo',
    tags: ['Figma']
  },
  {
    id: 'p5',
    title: 'HEED',
    category: 'UI UX Case Study',
    imageUrl: 'images/portfolio images/p5.png',
    wistiaId: '600y89ee52',
    tags: ['Figma', 'Photoshop', 'Illustrator']
  },
  {
    id: 'p6',
    title: 'Fly way',
    category: 'Travel Agency Website Design',
    imageUrl: 'images/portfolio images/p6.png',
    wistiaId: 'dou092fohq',
    tags: ['Figma']
  }
  // Add more items here...
]

const grid = document.getElementById('portfolioGrid')

portfolioItems.forEach(item => {
  const div = document.createElement('div')
  div.className = 'portfolio-item'

  div.innerHTML = `
      <div class="portfolio-image-box" style="position: relative; width: 100%; height: 300px; overflow: hidden; background: #000;">
        <div class="wistia_embed wistia_async_${item.wistiaId} videoFoam=true" 
             style="height:100%; width:100%; position:absolute; top:0; left:0; opacity:0; transition: opacity 0.4s ease; z-index: 2;">
          &nbsp;
        </div>
        
        <img src="${item.imageUrl}" 
             alt="${item.title}" 
             class="portfolio-img" 
             style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: 1;" />

        <div class="tag-container" style="z-index: 3; position: absolute; bottom: 10px; left: 10px;">
          ${item.tags.map(tag => `<span class="badge2">${tag}</span>`).join('')}
        </div>
      </div>

      <div class="portfolio-info">
        <div>
          <h3 class="item-title">${item.title}</h3>
          <p class="item-category">${item.category}</p>
        </div>
        <div class="arrow-btn">
          <svg class="arrow-icon" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    `

  const wistiaContainer = div.querySelector(`.wistia_async_${item.wistiaId}`)

  div.addEventListener('mouseenter', () => {
    window._wq = window._wq || []
    _wq.push({
      id: item.wistiaId,
      onReady: video => {
        wistiaContainer.style.opacity = '1'
        video.unmute()
        video.play()
        // Force the video player to fill the container dimensions
        // video.height( { constrained: true })
      }
    })
  })

  div.addEventListener('mouseleave', () => {
    window._wq = window._wq || []
    _wq.push({
      id: item.wistiaId,
      onReady: video => {
        wistiaContainer.style.opacity = '0'
        video.pause()
        video.time(0)
      }
    })
  })

  grid.appendChild(div)
})
