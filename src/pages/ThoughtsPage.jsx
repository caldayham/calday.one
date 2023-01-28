import React from 'react'
import { useState } from 'react'
import Posts from '../components/Posts/Posts'
import { ContentWrapper } from '../elements/containers'
import { thoughtsPostsData } from '../data/thoughts-posts-data'

const ThoughtsPage = () => {

  const [tags, setTags] = useState('');
  const [displayedPosts, setDisplayedPosts] = useState(thoughtsPostsData);

  return (
    <ContentWrapper>
      <Posts displayedPosts={displayedPosts}></Posts>
    </ContentWrapper>
  )
}

export default ThoughtsPage