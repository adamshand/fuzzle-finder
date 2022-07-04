import React from 'react'
import { NavLink } from 'react-router-dom'

function FigCaption(props) {
  const { tags, currentTag } = props

  return (
    <figcaption>
      {tags
        .split(' ')
        .sort()
        .map((group) => group.split('/')[1])
        // .filter((tag) => tag !== currentTag)
        .map((tag, i, allTags) =>
          tag !== currentTag ? (
            <NavLink key={i} to={`/tag/${tag}`}>
              {allTags.length !== i + 1 ? <>{tag}, </> : <>{tag}</>}
            </NavLink>
          ) : (
            <span className="currentTag" key={i}>
              {allTags.length !== i + 1 ? <>{tag}, </> : <>{tag}</>}
            </span>
          )
        )}
    </figcaption>
  )
}

export default FigCaption
