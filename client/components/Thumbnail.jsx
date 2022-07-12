import React from 'react'
import { useParams, Link } from 'react-router-dom'

function Thumbnail(props) {
  // TODO i'd like ByGroup.jsx to use this as well, but tricky
  const { photo } = props

  return (
    <Link to={`/photo/${photo.id}`}>
      <img
        src={`/images/${photo.id}.jpeg`}
        alt={photo.title}
        title={photo.title}
      />
    </Link>
  )
}

export default Thumbnail
