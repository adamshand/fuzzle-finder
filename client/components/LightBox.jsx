import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import request from 'superagent'

import FigCaption from './FigCaption.jsx'

function Photo() {
  const { id } = useParams()
  const [{ loading, failed, message, photo }, setPhoto] = useState({
    loading: true,
    photos: {},
  })
  useEffect(() => {
    setPhoto({ loading: true })
    return request
      .get(`/api/v1/photos/${id}`)
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
    <figure className="photo">
      <img src={`/images/${photo.id}.jpeg`} alt={photo.title} />
      <FigCaption tags={photo.tags} />
    </figure>
  )
}

export default Photo
