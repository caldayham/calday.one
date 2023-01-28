import styled from "styled-components";

const PostsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 10px;
    `;

const PostWrapper = styled.div`
    padding: 10px;
    border: 1px solid ${props => props.theme.text};
    border-radius: 10px;
`;

export {
    PostWrapper,
    PostsWrapper
};