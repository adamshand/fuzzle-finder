import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import request from 'superagent'

import Thumbnail from './Thumbnail.jsx'

function ByGroup() {
  const { group } = useParams()
  const [{ loading, failed, message, groups }, setGroups] = useState({
    loading: true,
    groups: {},
  })

  async function randomPhotoByGroupTag(grouptag) {
    const photo = await request.get(`/api/v1/photos?filter=${grouptag}&limit=1`)
    return photo.body[0]
  }

  useEffect(async () => {
    // const photo = await request.get(`/api/v1/photos?filter=${grouptag}&limit=1`)

    return request
      .get(`/api/v1/groups/${group}/tags`)
      .then((res) => {
        setGroups({ loading: false, groups: { [group]: res.body } })
      })
      .catch((err) => {
        setGroups({ failed: true, message: err.message })
      })
  }, [group])

  if (loading) {
    return <p>Loading...</p>
  }

  if (failed) {
    return <p>Error ${message}</p>
  }

  return (
    <section className="byGroup">
      {console.log(groups[group])}
      {groups[group]?.map((tag, i) => (
        <figure key={i}>
          {/* <Thumbnail photo={randomPhotoByGroupTag(`${group}/${tag}`)} /> */}
          <Link to={`/tag/${tag}`}>
            <img
              src={`/api/v1/random/${group}/${tag}`}
              alt={`${group}/${tag}`}
            />
          </Link>
          <figcaption>
            <Link to={`/tag/${tag}`}>{tag}</Link>
          </figcaption>
        </figure>
      ))}
    </section>
  )
}

export default ByGroup
