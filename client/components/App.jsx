import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'

import ByTag from './ByTag.jsx'
import ByGroup from './ByGroup.jsx'
import Photo from './Photo.jsx'

function App() {
  return (
    <main>
      <header>
        <NavLink to="/">
          <img className="logo" src="/fuzzler.png" alt="logo of paw" />
        </NavLink>
        <br />
        <nav>
          <NavLink to="/group/name">names</NavLink> {' ♡ '}
          <NavLink to="/group/species">species</NavLink> {' ♡ '}
          <NavLink to="/group/with">contains</NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<ByTag />} />
        <Route path="/tag/:tag" element={<ByTag />} />
        <Route path="/group/:group" element={<ByGroup />} />
        <Route path="/photo/:id" element={<Photo />} />
        {/* <Route component={NotFound} /> */}
      </Routes>
    </main>
  )
}

export default App
