import React from 'react'
import { Link } from 'react-router-dom'

function FigCaption(props) {
  const { tags, currentTag } = props

  return (
    <figcaption>
      {tags
        .split(' ')
        .sort()
        .map((group) => group.split('/')[1])
        .filter((tag) => tag !== currentTag)
        .map((tag, i) => (
          <Link key={i} to={`/tag/${tag}`}>
            {i + 2 != tags.split(' ').length ? `${tag}, ` : `${tag}`}
          </Link>
        ))}
    </figcaption>
  )
}

export default FigCaption

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
