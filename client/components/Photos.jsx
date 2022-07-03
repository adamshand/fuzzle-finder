import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import request from 'superagent'

function App() {
  const { tag } = useParams()
  const [photos, setPhotos] = useState([])
  const [api, setApi] = useState()

  useEffect(() => {
    if (tag) {
      setApi(`/api/v1/photos/tag/${tag}?limit=20`)
    } else {
      setApi(`/api/v1/photos?limit=20`)
    }
    console.log(`useEffect tag: ${tag} api: ${api}`)
    return request
      .get(api)
      .then((res) => {
        setPhotos(res.body)
      })
      .catch((err) => console.log(err))
  }, [api, tag])

  return (
    <section className="photos">
      {console.log(`tag: ${tag} api: ${api} photos:`, photos)}
      {photos?.map((image, i) => (
        <figure key={i} className="photos">
          <img
            className="photos"
            src={'/images/' + image.filename}
            alt={image.title}
          />
          <figcaption className="photos">
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
      ))}
    </section>
  )
}

export default App
