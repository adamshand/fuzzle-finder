import React from 'react'
import { Routes, Route, Link, NavLink } from 'react-router-dom'

import ByTag from './ByTag.jsx'
import ByGroup from './ByGroup.jsx'
import Photo from './Photo.jsx'

function App() {
  return (
    <main>
      <header>
        <Link to="/">
          <img style={{ width: '64px' }} src="/fuzzler.png" alt="logo of paw" />
        </Link>
        <br />
        <nav>
          <NavLink to="/group/name">name</NavLink> ♡&nbsp;
          <NavLink to="/group/species">species</NavLink> ♡&nbsp;
          <NavLink to="/group/with">with</NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<ByTag />} />
        <Route path="/tag/:tag" element={<ByTag />} />
        <Route path="/group/:group" element={<ByGroup />} />
        <Route path="/photo/:id" element={<Photo />} />
        {/* <Route component={NoMatchPage} /> */}
      </Routes>
    </main>
  )
}

export default App
