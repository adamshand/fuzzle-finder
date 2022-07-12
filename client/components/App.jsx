import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'

import ByTag from './ByTag.jsx'
import ByGroup from './ByGroup.jsx'
import LightBox from './LightBox.jsx'
import Sort from './Sort.jsx'
import NotFound from './NotFound.jsx'

function App() {
  return (
    <main>
      <header>
        <NavLink to="/">
          <img className="logo" src="/fuzzler.png" alt="logo of paw" />
        </NavLink>
        <nav>
          <NavLink to="/group/name">names</NavLink> {' ♡ '}
          <NavLink to="/group/species">species</NavLink> {' ♡ '}
          <NavLink to="/group/with">contains</NavLink>
        </nav>
        <Sort />
      </header>
      <Routes>
        <Route path="/" element={<ByTag />} />
        <Route path="/tag/:tag" element={<ByTag />} />
        <Route path="/group/:group" element={<ByGroup />} />
        <Route path="/photo/:id" element={<LightBox />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  )
}

export default App
