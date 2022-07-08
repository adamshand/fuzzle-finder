import React from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { changeOrder } from '../reducers/sortSlice'

function Sort() {
  const { pathname } = useLocation()
  const { order } = useSelector((state) => state.sort)
  const dispatch = useDispatch()

  function handleChange(e) {
    e.preventDefault()
    dispatch(changeOrder(e.target.value))
  }

  return (
    <div className="sort">
      {['', 'tag'].includes(pathname.split('/')[1]) && (
        <select name="sort" defaultValue={order} onChange={handleChange}>
          <option value="random">random</option>
          <option value="views">views ⬇️</option>
          <option value="rdate">date ⬆️</option>
          <option value="date">date ⬇️</option>
        </select>
      )}
    </div>
  )
}

export default Sort
