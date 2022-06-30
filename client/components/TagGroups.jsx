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
    <>
      {items.map((group, i) => (
        <figure key={i}>
          <img style={{ width: '250px', height: '250px' }} src="" alt="" />
          <figcaption>{group}</figcaption>
        </figure>
      ))}
    </>
  )
}

export default App
