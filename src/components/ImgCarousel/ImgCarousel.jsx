import React, { useState } from 'react'
import { OuterWrapper, InnerWrapper, CurrentSlide, SideSlide, MainSlideText, ScrollButton } from './styles'

const ImgCarousel = ({ slides }) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const HandleScrollClick = (direction) => {

        let deckLength = slides.length;

        if (direction === 'prev') {
            setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : deckLength - 1);
        } else if (direction === 'next') {
            setCurrentIndex(currentIndex < deckLength - 1 ? currentIndex + 1 : 0);
        } else {
            console.log('big whoops');
        }
    };

    return (
        <div>
            <p>
                We are visual creatures, here are some pictures of myself throughout the years.
            </p>
            <OuterWrapper>
                <InnerWrapper>
                    <SideSlide slideData={slides[currentIndex - 1] ? slides[currentIndex - 1] : slides[slides.length - 1]}>
                        <ScrollButton onClick={() => HandleScrollClick('prev')} side='left '>↶</ScrollButton>
                    </SideSlide>
                    <CurrentSlide slideData={slides[currentIndex]}>
                        <MainSlideText>{slides[currentIndex].date}</MainSlideText>
                    </CurrentSlide>
                    <SideSlide slideData={slides[currentIndex + 1] ? slides[currentIndex + 1] : slides[0]}>
                        <ScrollButton onClick={() => HandleScrollClick('next')} side='right'>↷</ScrollButton>
                    </SideSlide>
                </InnerWrapper>
            </OuterWrapper>
            <p>
                {slides[currentIndex].desc}
            </p>
        </div>
    )
}

export default ImgCarousel