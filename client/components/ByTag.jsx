import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import request from 'superagent'

import Thumbnail from './Thumbnail.jsx'
import FigCaption from './FigCaption.jsx'

function ByTag() {
  const { tag } = useParams()
  const [{ loading, failed, message, photos }, setPhotos] = useState({
    loading: true,
    photos: '',
  })

  const { order } = useSelector((state) => state.sort)

  let api = `/api/v1/photos?limit=50&sort=${order}`

  useEffect(() => {
    if (tag) api = `/api/v1/photos?filter=/${tag}&sort=${order}`

    return request
      .get(api)
      .then((res) => {
        setPhotos({ loading: false, photos: { [tag]: res.body } })
        console.log(photos.photos)
      })
      .catch((err) => {
        setPhotos({ failed: true, message: err.message })
      })
  }, [tag, order])

  if (loading) {
    return <p>Loading...</p>
  }

  if (failed) {
    return <p>Error ${message}</p>
  }

  return (
    <section className="byTag">
      {console.log(photos[tag])}
      {photos[tag]?.map((photo, i) => (
        <figure key={i}>
          <Thumbnail photo={photo} />
          <FigCaption currentTag={tag} tags={photo.tags} />
        </figure>
      ))}
    </section>
  )
}

export default ByTag
