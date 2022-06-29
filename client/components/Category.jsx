import React, { useState, useEffect } from 'react'
import request from 'superagent'
import Masonry from 'react-masonry-css'

function App() {
  const [items, setItems] = useState([])

  useEffect(() => {
    return request
      .get('/api/v1/images/all')
      .then((res) => {
        setItems(res.body.slice(0, 17))
      })
      .catch((err) => console.log(err))
  }, [])

  return (
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
              {/* split tag on / and link to different things */}
            </figure>
          </div>
        ))}
      </Masonry>
    </div>
  )
}

export default App
