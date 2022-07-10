import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import request from 'superagent'

import FigCaption from './FigCaption.jsx'

function ByTag() {
  const { tag } = useParams()
  const [{ loading, failed, message, photos }, setPhotos] = useState({
    loading: true,
    photos: {},
  })

  const { order } = useSelector((state) => state.sort)

  let api = `/api/v1/photos?limit=50&sort=${order}`

  useEffect(() => {
    if (tag) api = `/api/v1/tags/${tag}/photos?limit=50&sort=${order}`

    return request
      .get(api)
      .then((res) => {
        setPhotos({ loading: false, photos: { [tag]: res.body } })
      })
      .catch((err) => {
        setPhotos({ failed: true, message: err.message })
      })
  }, [tag, order])

  if (loading) {
    return <p>Loading...</p>
  }

  if (failed) {
    return <p>Error ${message}</p>
  }

  return (
    <section className="byTag">
      {photos[tag]?.map((photo, i) => (
        <figure key={i}>
          <Link to={`/photo/${photo.id}`}>
            <img
              src={'/images/' + photo.filename}
              alt={photo.title}
              title={photo.title}
            />
          </Link>
          <FigCaption currentTag={tag} tags={photo.tags} />
        </figure>
      ))}
    </section>
  )
}

export default ByTag

// import Masonry from 'react-masonry-css'
//
// return (
//   <div className="masonary-grid">
//     <Masonry
//       breakpointCols={3}
//       className="masonry-grid"
//       columnClassName="masonry-column"
//     >
//       {photos?.map((photo) => (
//         <div key={photo.id} className="masonry-column">
//           <figure>
//             <img
//               className="masonry"
//               src={'/images/' + photo.filename}
//               alt={photo.title}
//             />
//             <figcaption className="masonry">
//               {photo.tags
//                 .split(' ')
//                 .sort()
//                 .map((group) => group.split('/')[1])
//                 .map((tag, i) => (
//                   <Link key={i} to={`/tag/${tag}`}>
//                     {i + 1 != photo.tags.split(' ').length
//                       ? `${tag}, `
//                       : `${tag}`}
//                   </Link>
//                 ))}
//             </figcaption>
//           </figure>
//         </div>
//       ))}
//     </Masonry>
//   </div>
// )
// }
