import React from 'react'
import { Routes, Route, Link, NavLink } from 'react-router-dom'

import Thumbs from './Thumbs.jsx'

function App() {
  return (
    <>
      <header>
        <h1>
          <Link to="/">the fuzzler</Link>
        </h1>
        <nav>
          <NavLink to="/name">name</NavLink> &middot;
          <NavLink to="/species">species</NavLink> &middot;
          <NavLink to="/with">with</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Thumbs />} />
          <Route path="/tag/:tag" element={<Thumbs />} />
          {/* <Route component={NoMatchPage} /> */}
        </Routes>
      </main>
      <footer>
        ♡2022 by adam shand. sharing is an act of love, please share.
      </footer>
    </>
  )
}

export default App
