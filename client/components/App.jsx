import React from 'react'
import { Routes, Route, Link, NavLink } from 'react-router-dom'

import Photos from './Photos.jsx'
import Groups from './Groups.jsx'

function App() {
  return (
    <>
      <header>
        <Link to="/">the fuzzler</Link>
        <nav>
          <NavLink to="/group/name">name</NavLink> ♡&nbsp;
          <NavLink to="/group/species">species</NavLink> ♡&nbsp;
          <NavLink to="/group/with">with</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Photos />} />
          <Route path="/tag/:tag" element={<Photos />} />
          <Route path="/group/:group" element={<Groups />} />
          {/* <Route component={NoMatchPage} /> */}
        </Routes>
      </main>
      <footer>
        <a href="https://copyheart.org/">
          ♡ copying is an act of love (just like cuddles).
        </a>
      </footer>
    </>
  )
}

export default App
