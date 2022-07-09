import React from 'react'
import { Link } from 'react-router-dom'

function FigCaption(props) {
  const { tags, currentTag } = props

  const printTags = (i, tag, allTags) =>
    allTags.length !== i + 1 ? <>{tag}, </> : <>{tag}</>

  return (
    <figcaption>
      {tags
        .split(' ')
        .sort()
        .map((group) => group.split('/')[1])
        .map((tag, i, allTags) =>
          tag !== currentTag ? (
            <Link key={i} to={`/tag/${tag}`}>
              {printTags(i, tag, allTags)}
            </Link>
          ) : (
            <span key={i} className="currentTag">
              {printTags(i, tag, allTags)}
            </span>
          )
        )}
    </figcaption>
  )
}

export default FigCaption
