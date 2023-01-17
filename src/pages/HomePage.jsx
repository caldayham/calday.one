import React from 'react'
import { ContentWrapper, ImgDeck, ImgWrapper } from '../elements/containers'
import { MainImg } from '../elements/images'

const HomePage = () => {
    return (
        <ContentWrapper>
            <p>
                <h3>TLDR</h3>
                People who are effective and interested, affect and advance. Be <a href='https://en.wikipedia.org/wiki/Antifragile' target='_blank' rel="noreferrer">antifragile</a>.
                <br />
                Find purpose and take action towards it.
            </p>
            <br />
            <p>
                <h3>Quick Intro</h3>
                Hello! welcome to my public wiki.
                <br />
                I am <a href="/connect">Cal Day</a>, a 21 year old male from Canada
                and the USA. I enjoy effective problem finding and solving, aka solution derivation - solution simplification - and systematization.
                I currently do that within the domains of manufacturing, software, business, finance, and personal health and longevity. I'm an optimist,
                especially towards radical self-growth. I also enjoy sharing time with family and friends, spirited debate and riffing,
                and much more.
            </p>
            <br />
            <p>
                <h3>My Goal Character Traits</h3>
                Interested, active, effective, prolific, antifragile, integrous, optimistic, autonomous, knowledgeable, logical,
                radically volatile.
            </p>
            <br />
            <p>
                <h3>Images of Cal</h3>
                We are visual creatures, here are some pictures of myself throughout the years.
            </p>
            <ImgDeck>
                <ImgWrapper>
                    <MainImg src="/images/2023-hike.jpg" alt="mum-dad-cal" />
                    <p>2023</p>
                </ImgWrapper>
                <ImgWrapper>
                    <MainImg src="/images/dad-cal.jpg" alt="dad-cal" />
                    <p>2002</p>
                </ImgWrapper>
                <ImgWrapper>
                    <MainImg src="/images/2012-cal-fynn.jpg" alt="cal-fynn" />
                    <p>2012</p>
                </ImgWrapper>
                <ImgWrapper>
                    <MainImg src="/images/baby-chick.jpg" alt="baby-chick" />
                    <p>2015</p>
                </ImgWrapper>
                <ImgWrapper>
                    <MainImg src="/images/cal-rattlesnake-cooper.jpg" alt="cal-rattlesnake-cooper" />
                    <p>2017</p>
                </ImgWrapper>
                <ImgWrapper>
                    <MainImg src="/images/fam-at-beach.jpg" alt="fam-at-beach" />
                    <p>2021</p>
                </ImgWrapper>
                <ImgWrapper>
                    <MainImg src="/images/cal-felix.jpg" alt="cal-felix" />
                    <p>2022</p>
                </ImgWrapper>
            </ImgDeck>
        </ContentWrapper>
    )
}

export default HomePage