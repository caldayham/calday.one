import React from 'react'
import { ContentWrapper, ImgDeck, ImgWrapper } from '../elements/containers'
import { MainImg } from '../elements/images'

const HomePage = () => {
    return (
        <ContentWrapper>
            <p>
                People who are effective and interested, affect and advance. Be antifragile.
                <br />
                Find a purpose and take action toward it.
            </p>
            <br />
            <p>
                Hello, welcome to my public web ui. I am <a href="/home">Cal Day</a>, a 21 year old male from Canada
                and the USA. I enjoy effective problem finding and solving (aka solution derivation), solution simplification, and systematization -
                currently within the domains of manufacturing, software, business, finance, and health. I'm an optimist,
                especially towards radical self-growth. I also enjoy sharing time with family and friends, spirited debate and riffing, and the occasional trip.
            </p>
            <br />
            <p>
                My goal character traits:
                <br />
                interested, active, effective, prolific, antifragile, integrous, optimistic, autonomous, logical,
                radically volatile.
            </p>
            <br />
            <ImgDeck>
                <ImgWrapper>
                    <MainImg src="/images/baby-chick.jpg" alt="baby-chick" />
                </ImgWrapper>
                <ImgWrapper>
                    <MainImg src="/images/cal-felix.jpg" alt="cal-felix" />
                </ImgWrapper>
                <ImgWrapper>
                    <MainImg src="/images/cal-fynn.jpg" alt="cal-fynn" />
                </ImgWrapper>
                <ImgWrapper>
                    <MainImg src="/images/cal-rattlesnake-cooper.jpg" alt="cal-rattlesnake-cooper" />
                </ImgWrapper>
                <ImgWrapper>
                    <MainImg src="/images/mum-dad-cal.jpg" alt="mum-dad-cal" />
                </ImgWrapper>
                <ImgWrapper>
                    <MainImg src="/images/dad-cal.jpg" alt="dad-cal" />
                </ImgWrapper>
                <ImgWrapper>
                    <MainImg src="/images/fam-at-beach.jpg" alt="fam-at-beach" />
                </ImgWrapper>
            </ImgDeck>
        </ContentWrapper>
    )
}

export default HomePage