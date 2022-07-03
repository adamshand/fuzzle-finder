import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import request from 'superagent'

function App() {
  const { tag } = useParams()
  const [photos, setPhotos] = useState({})
  const [api, setApi] = useState(`/api/v1/photos?limit=50`)

  useEffect(() => {
    if (tag) setApi(`/api/v1/photos/tag/${tag}?limit=50`)
    // console.log(`useEffect tag: ${tag} api: ${api}`)
    return request
      .get(api)
      .then((res) => {
        // setPhotos(res.body)
        setPhotos({ ...photos, [tag]: res.body })
      })
      .catch((err) => console.log(err))
  }, [tag, api])

  return (
    <section>
      {/* {console.log(`tag: ${tag} api: ${api} photos:`, photos)} */}
      {photos[tag]?.map((photo, i) => (
        <figure key={i}>
          {console.log(photo)}
          <img src={'/images/' + photo.filename} alt={photo.title} />
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
