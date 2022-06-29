import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import request from 'superagent'
import Masonry from 'react-masonry-css'

function App() {
  const [items, setItems] = useState([])

  useEffect(() => {
    return request
      .get('/api/v1/thumbs/all')
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
              <figcaption>
                {image.tags
                  .split(' ')
                  .sort()
                  .map((tag) => tag.split('/')[1])
                  .map((tag, i) => (
                    <Link key={i} to={`/tag/${tag}`}>
                      {`${tag}, `}
                    </Link>
                  ))}
              </figcaption>
            </figure>
          </div>
        ))}
      </Masonry>
    </div>
  )
}

export default App

{
  // `<Link to=${x.split('/')[1]}>${x.split('/')[1]}</Link>`
  /* <Link to={`/tag/${tag}`}>{tag}</Link> */
}
