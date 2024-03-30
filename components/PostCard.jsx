import React from 'react'

const PostCard = ({ article }) => {
  return (
    <div>
        {article.title}
        {article.author}
    </div>
  )
}

export default PostCard