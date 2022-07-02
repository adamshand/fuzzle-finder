import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import request from 'superagent'

function App() {
  const { group } = useParams()
  const [items, setItems] = useState([''])
  const [url, setUrl] = useState(['/api/v1/group/species'])

  useEffect(() => {
    if (group) setUrl(`/api/v1/group/${group}`)
    console.log('TagGroup', { url })
    return request
      .get(url)
      .then((res) => {
        setItems(res.body)
      })
      .catch((err) => console.log(err))
  }, [url, group])

  return (
    <section className="group">
      {items.map((tag, i) => (
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

export default App
