import React from 'react'
import { useState } from 'react'
import Posts from '../components/Posts/Posts'
import { ContentWrapper } from '../elements/containers'

const ThoughtsPage = () => {

  const [tags, setTags] = useState('');

  return (
    <ContentWrapper>
      <Posts tags={tags}></Posts>
    </ContentWrapper>
  )
}

export default ThoughtsPage