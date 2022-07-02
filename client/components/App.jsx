import React from 'react'
import { Routes, Route, Link, NavLink } from 'react-router-dom'

import Thumbs from './Thumbs.jsx'
import TagGroups from './TagGroups.jsx'

function App() {
  return (
    <>
      <header>
        <Link to="/">the fuzzler</Link>
        <nav>
          <NavLink to="/group/name">name</NavLink> &middot;&nbsp;
          <NavLink to="/group/species">species</NavLink> &middot;&nbsp;
          <NavLink to="/group/with">with</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Thumbs />} />
          <Route path="/tag/:tag" element={<Thumbs />} />
          <Route path="/group/:group" element={<TagGroups />} />
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
