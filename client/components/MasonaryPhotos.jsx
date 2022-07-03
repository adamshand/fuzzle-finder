import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import request from 'superagent'
import Masonry from 'react-masonry-css'

function App() {
  const { tag } = useParams()
  const [items, setItems] = useState([])
  const [url, setUrl] = useState('/api/v1/thumbs')

  useEffect(() => {
    if (tag) setUrl(`/api/v1/thumbs/tag/${tag}`)
    console.log({ url })
    return request
      .get(url)
      .then((res) => {
        setItems(res.body)
      })
      .catch((err) => console.log(err))
  }, [url, tag])

  return (
    <div className="masonary-grid">
      <Masonry
        breakpointCols={3}
        className="masonry-grid"
        columnClassName="masonry-column"
      >
        {items.map((image) => (
          <div key={image.id} className="masonry-column">
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
                  .map((taggroup) => taggroup.split('/')[1])
                  .map((tag, i) => (
                    <Link key={i} to={`/tag/${tag}`}>
                      {i + 1 != image.tags.split(' ').length
                        ? `${tag}, `
                        : `${tag}`}
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
