import React from 'react'
import { PostsWrapper, PostWrapper } from './postsStyles'

const Posts = ({ displayedPosts }) => {
  return (
    <PostsWrapper>
      {displayedPosts.map((post) => (
        <PostWrapper>
          <h1>{post.title}</h1>
          <p>{post.desc}</p>
        </PostWrapper>
      ))}
    </PostsWrapper>
  )
}

export default Posts