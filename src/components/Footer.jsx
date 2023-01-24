import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.div`
    border-top: 1px solid ${props => props.theme.lines};
    padding: 20px 10px;
    margin-top: 80px;
`;

const Footer = () => {
  return (
    <FooterWrapper>
    <p>
        © Copyright 2023 <a href="/home">Cal Day</a>. All rights reserved.
    </p>
</FooterWrapper>
  )
}

export default Footer