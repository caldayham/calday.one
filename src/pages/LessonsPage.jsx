import React, { useState } from 'react'
import Posts from '../components/Posts/Posts';
import { ContentWrapper } from '../elements/containers'
import { lessonsPostsData } from '../data/lessons-posts-data';

const LessonsPage = () => {

  const [tags, setTags] = useState('');
  const [displayedPosts, setDisplayedPosts] = useState(lessonsPostsData);

  return (
    <ContentWrapper>
      <Posts displayedPosts={displayedPosts}></Posts>
    </ContentWrapper>
  )
}

export default LessonsPage