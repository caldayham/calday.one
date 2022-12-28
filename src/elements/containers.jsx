import styled from "styled-components";

const BodyContainer = styled.div`

`;

const ContentWrapper = styled.div`
    padding: 0px 10px;
    min-height: calc(100vh);
`;

const ImgDeck = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
`;

const ImgWrapper = styled.div`
    max-width: 131px;
`;

export {
    ImgWrapper,
    BodyContainer,
    ContentWrapper,
    ImgDeck
};