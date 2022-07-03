import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import request from 'superagent'
// import { shuffle } from 'lodash'

function App() {
  const { group } = useParams()
  const [groups, setGroups] = useState({})
  const [api, setApi] = useState()

  useEffect(() => {
    setApi(`/api/v1/group/${group}`)
    return request
      .get(api)
      .then((res) => {
        setGroups({ ...groups, [group]: res.body })
        console.log(groups)
      })
      .catch((err) => console.log(err))
  }, [api, group])

  return (
    <section>
      {/* {console.log(`useEffect group: ${group} url: ${api} groups"`, groups)} */}
      {groups[group]?.map((tag, i) => (
        <figure key={i}>
          <Link to={`/tag/${tag}`}>
            <img
              src={`/api/v1/photo/${group}/${tag}`}
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

export default App
