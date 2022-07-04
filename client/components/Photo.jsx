import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import request from 'superagent'

import FigCaption from './FigCaption.jsx'

function Photo() {
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
      <FigCaption tags={photo.tags} />
    </figure>
  )
}

export default Photo
