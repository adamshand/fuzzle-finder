import React, { useState, useEffect } from 'react'
import request from 'superagent'
import Masonry from 'react-masonry-css'

function App() {
  const [items, setItems] = useState([])

  useEffect(() => {
    return request
      .get('/v1/images/all/random')
      .then((res) => {
        setItems(res.body.slice(0, 17))
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <>
      <header>
        <h1>a fuzzle finder</h1>
        <nav>name &middot; species &middot; with</nav>
      </header>
      <main>
        <div className="masonary-grid">
          <Masonry
            breakpointCols={3}
            className="masonry-grid"
            columnClassName="masonry-column"
          >
            {items.map((image) => (
              <div key={image.id} className="my-masonry-column">
                <figure>
                  <img
                    className="fuzzle"
                    src={'/images/' + image.filename}
                    alt={image.title}
                  />
                  <figcaption>{image.tags}</figcaption>
                </figure>
              </div>
            ))}
          </Masonry>
        </div>
      </main>
      <footer>
        ♡2022 by adam shand. sharing is an act of love, please share.
      </footer>
    </>
  )
}

export default App
