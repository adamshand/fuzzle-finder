import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import request from 'superagent'

function App() {
  const { group } = useParams()
  const [groups, setGroups] = useState([])
  const [api, setApi] = useState()

  useEffect(() => {
    setApi(`/api/v1/group/${group}`)
    return request
      .get(api)
      .then((res) => {
        setGroups(res.body)
      })
      .catch((err) => console.log(err))
  }, [api, group])

  return (
    <section className="group">
      {console.log(`useEffect group: ${group} url: ${api} groups"`, groups)}
      {groups?.map((tag, i) => (
        <figure key={i} className="group">
          <Link to={`/tag/${tag}`}>
            <img
              className="group"
              src={`/api/v1/photo/${group}/${tag}`}
              alt={`${group}/${tag}`}
            />
          </Link>
          <figcaption className="group">
            <Link to={`/tag/${tag}`}>{tag}</Link>
          </figcaption>
        </figure>
      ))}
    </section>
  )
}

function shuffleArray(array) {
  let curId = array.length
  while (0 !== curId) {
    let randId = Math.floor(Math.random() * curId)
    curId -= 1
    let tmp = array[curId]
    array[curId] = array[randId]
    array[randId] = tmp
  }
  return array
}

export default App
