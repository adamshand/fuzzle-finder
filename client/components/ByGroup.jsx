import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import request from 'superagent'

function ByGroup() {
  const { group } = useParams()
  const [{ loading, failed, message, groups }, setGroups] = useState({
    loading: true,
    groups: {},
  })

  useEffect(() => {
    return request
      .get(`/api/v1/groups/${group}/tags`)
      .then((res) => {
        setGroups({ loading: false, groups: { [group]: res.body } })
      })
      .catch((err) => {
        setGroups({ failed: true, message: err.message })
      })
      .catch((err) => console.log(err))
  }, [group])

  if (loading) {
    return <p>Loading...</p>
  }

  if (failed) {
    return <p>Error ${message}</p>
  }

  return (
    <section>
      {groups[group]?.map((tag, i) => (
        <figure className="byGroup" key={i}>
          <Link to={`/tag/${tag}`}>
            <img
              src={`/api/v1/photos/random/${group}/${tag}`}
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
