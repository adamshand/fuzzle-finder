import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import request from 'superagent'
// import { shuffle } from 'lodash'

function App() {
  const { group } = useParams()
  const [{ loading, failed, message, groups }, setGroups] = useState({
    loading: true,
  })

  useEffect(() => {
    return request
      .get(`/api/v1/group/${group}`)
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
        <figure key={i}>
          {/* <Link to={`/tag/${tag}`}> */}
          <img src={`/api/v1/photo/${group}/${tag}`} alt={`${group}/${tag}`} />
          {/* </Link> */}
          <figcaption>
            <Link to={`/tag/${tag}`}>{tag}</Link>
          </figcaption>
        </figure>
      ))}
    </section>
  )
}

export default App
