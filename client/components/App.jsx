import React from 'react'
import { Routes, Route, Link, NavLink } from 'react-router-dom'

import Tags from './Tags.jsx'
import Groups from './Groups.jsx'

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
        <Route path="/" element={<Tags />} />
        <Route path="/tag/:tag" element={<Tags />} />
        <Route path="/group/:group" element={<Groups />} />
        {/* <Route component={NoMatchPage} /> */}
      </Routes>
      {/* <footer>
        <a href="https://copyheart.org/">
          ♡ 2022 (like cuddles) copying is an act of love. please share.
        </a>
      </footer> */}
    </main>
  )
}

export default App
