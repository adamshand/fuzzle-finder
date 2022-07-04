import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import request from 'superagent'

function App() {
  const { id } = useParams()
  const [{ loading, failed, message, photo }, setPhoto] = useState({
    loading: true,
  })
  useEffect(() => {
    setPhoto({ loading: true })
    return request
      .get(`/api/v1/photo/${id}`)
      .then((res) => {
        setPhoto({ loading: false, photo: res.body })
      })
      .catch((err) => {
        setPhoto({ failed: true, message: err.message })
      })
  }, [id])

  if (loading) {
    return <p>Loading...</p>
  }

  if (failed) {
    return <p>Error ${message}</p>
  }

  return (
    <figure>
      <img src={'/images/' + photo.filename} alt={photo.title} />
      <figcaption>
        {photo.tags
          .split(' ')
          .sort()
          .map((group) => group.split('/')[1])
          .map((tag, i) => (
            <Link key={i} to={`/tag/${tag}`}>
              {i + 1 != photo.tags.split(' ').length ? `${tag}, ` : `${tag}`}
            </Link>
          ))}
      </figcaption>
    </figure>
  )
}

export default App
