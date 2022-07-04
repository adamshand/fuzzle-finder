import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import request from 'superagent'

function App() {
  const { tag } = useParams()
  const [{ loading, failed, message, photos }, setPhotos] = useState({
    loading: true,
  })
  let api = `/api/v1/photos?limit=50`

  useEffect(() => {
    if (tag) api = `/api/v1/photos/tag/${tag}?limit=50`

    return request
      .get(api)
      .then((res) => {
        setPhotos({ loading: false, photos: res.body })
      })
      .catch((err) => {
        setPhotos({ failed: true, message: err.message })
      })
  }, [tag])

  if (loading) {
    return <p>Loading...</p>
  }

  if (failed) {
    return <p>Error ${message}</p>
  }

  return (
    <section>
      {photos?.map((photo, i) => (
        <figure key={i}>
          <Link to={`/photo/${photo.id}`}>
            <img src={'/images/' + photo.filename} alt={photo.title} />
          </Link>
          <figcaption>
            {photo.tags
              .split(' ')
              .sort()
              .map((taggroup) => taggroup.split('/')[1])
              .map((tag, i) => (
                <Link key={i} to={`/tag/${tag}`}>
                  {i + 1 != photo.tags.split(' ').length
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
