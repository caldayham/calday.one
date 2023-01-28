import React, { useState } from 'react'
import Posts from '../components/Posts/Posts';
import { ContentWrapper } from '../elements/containers'

const LessonsPage = () => {

  const [tags, setTags] = useState('');

  return (
    <ContentWrapper>
      <Posts tags={tags}></Posts>
    </ContentWrapper>
  )
}

export default LessonsPage