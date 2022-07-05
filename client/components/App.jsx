import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { changeOrder } from '../reducers/sortSlice'

import ByTag from './ByTag.jsx'
import ByGroup from './ByGroup.jsx'
import Photo from './Photo.jsx'

function App() {
  const { order } = useSelector((state) => state.sort)
  const dispatch = useDispatch()

  function handleChange(e) {
    e.preventDefault()
    dispatch(changeOrder(e.target.value))
  }

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
          <div className="sort">
            {/* <label htmlFor="sort">Sort by</label> */}
            <select name="sort" defaultValue={order} onChange={handleChange}>
              <option value="random">sort by: random</option>
              <option value="date">sort by: date</option>
              <option value="rdate">sort by: date (reverse)</option>
              <option value="views">sort by: popularity</option>
            </select>
          </div>
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
