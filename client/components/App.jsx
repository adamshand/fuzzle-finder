import React, { useState, useEffect } from 'react'
import request from 'superagent'
import { Routes, Route, Link } from 'react-router-dom'

import Thumbs from './Thumbs.jsx'

function App() {
  // const [items, setItems] = useState([])

  // useEffect(() => {
  //   return request
  //     .get('/api/v1/images/all')
  //     .then((res) => {
  //       setItems(res.body.slice(0, 17))
  //     })
  //     .catch((err) => console.log(err))
  // }, [])

  return (
    <>
      <header>
        <h1>
          <Link to="/">a fuzzle finder</Link>
        </h1>
        <nav>
          <Link to="/name">name</Link> &middot;
          <Link to="/species">species</Link> &middot;
          <Link to="/with">with</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Thumbs />} />
        </Routes>
      </main>
      <footer>
        ♡2022 by adam shand. sharing is an act of love, please share.
      </footer>
    </>
  )
}

export default App
