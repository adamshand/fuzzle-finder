import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import request from 'superagent'

function Edit() {
  const { id } = useParams()
  const [{ loading, photo }, setPhoto] = useState({
    loading: true,
    photos: {},
  })

  function handleChange(e) {}

  useEffect(() => {
    setPhoto({ loading: true })
    return request
      .get(`/api/v1/photos/${id}`)
      .then((res) => {
        setPhoto({ loading: false, photo: res.body })
      })
      .catch((err) => {
        setPhoto({ failed: true, message: err.message })
      })
  }, [id])

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <section className="edit">
      <figure>
        <img src={`/images/${photo.id}.jpeg`} alt={photo.title} />
      </figure>

      {/* https://react-hook-form.com/get-started */}

      <form>
        <h2>Edit Details</h2>
        <input onChange={handleChange} type="date" value={photo.date} />
        <textarea
          onChange={handleChange}
          rows="3"
          columns="50"
          value={photo.title}
        />
        <h2>Add Tags</h2>
        <div className="selects">
          <select onChange={handleChange} value="name">
            <option value="name/adam">name/adam</option>
            <option value="name/adam">name/tink</option>
          </select>
          <select onChange={handleChange} value="species">
            <option value="name/adam">species/cat</option>
            <option value="name/adam">species/dog</option>
          </select>
          <select onChange={handleChange} value="contains">
            <option value="">with/beach</option>
            <option value="">with/teeth</option>
          </select>
        </div>
        <h2>Delete Tags</h2>
        <p>
          {photo.tags.split(' ').map((tag, i) => (
            <button key={i}>
              {tag}{' '}
              <img
                style={{ width: '16px', height: '16px' }}
                alt="delete icon"
                src="/icon-delete.png"
              />
            </button>
          ))}
        </p>
        <button>Update database</button>
      </form>
    </section>
  )
}

export default Edit
