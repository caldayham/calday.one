import React, { useState } from 'react'
import Posts from '../components/Posts/Posts'
import { ContentWrapper } from '../elements/containers'
import { projectsPostsData } from '../data/projects-posts-data'

const ProjectsPage = () => {

  const [tags, setTags] = useState('');
  const [displayedPosts, setDisplayedPosts] = useState(projectsPostsData);

  return (
    <ContentWrapper>
      <Posts displayedPosts={displayedPosts}></Posts>
    </ContentWrapper>
  )
}

export default ProjectsPage