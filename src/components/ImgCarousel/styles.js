import styled from 'styled-components';

const OuterWrapper = styled.div`
    width: 100%;
    height: 500px;
    margin: 0 auto;
    overflow: hidden;
`;

const InnerWrapper = styled.div`
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

const SideSlide = styled.div`
    flex: 1;
    height: 100%;
    border-radius: 10px;
    background-image: ${props => `url(${props.slideData.path})`};
    background-size: contain;
    border: 1px solid ${props => props.theme.text};
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CurrentSlide = styled.div`
        flex: 3;
        height: 100%;
        border-radius: 10px;
        background-size: cover;
        background-image: ${props => `url(${props.slideData.path})`};
        background-size: contain;
        border: 1px solid ${props => props.theme.text};
        display: flex;
        justify-content: center;
        align-items: end;
`;

const MainSlideText = styled.h1`
    color: white;
    font-size: 52px;
    vertical-align: bottom;
    height: 40px;
`;

const ScrollButton = styled.button`
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 10px;
    background: rgb(255,255,255,0.4);
    font-size: 52px;
    font-weight: 600;
    color: white;
`;

export {
    InnerWrapper,
    OuterWrapper,
    SideSlide,
    CurrentSlide,
    MainSlideText,
    ScrollButton,
};