import React from 'react'
import { NextCarouselButton, PrevCarouselButton } from '../elements/buttons'
import { ContentWrapper, ImgCarousel, ImgDeck, ImgWrapper } from '../elements/containers'
import { CarouselImg, ImageSlide, MainImg } from '../elements/images'
import { calImgData } from '../data/cal-img-data'

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
                    <MainImg src="/images/2023-hike.jpg" alt="2023-hike.jpg" />
                    <p>2023</p>
                </ImgWrapper>
                <ImgWrapper>
                    <MainImg src="/images/2022-snapper-zoom.jpg" alt="2022-snapper.jpg" />
                    <p>2022</p>
                </ImgWrapper>
                <ImgWrapper>
                    <MainImg src="/images/2021-cal-felix.jpg" alt="2021-cal-felix.jpg" />
                    <p>2021</p>
                </ImgWrapper>
                <ImgWrapper>
                    <MainImg src="/images/2020-fam-beach.jpg" alt="2020-fam-beach.jpg" />
                    <p>2020</p>
                </ImgWrapper>
                <ImgWrapper>
                    <MainImg src="/images/2019-strandbeest-riding.jpg" alt="2019-strandbeest-riding.jpg" />
                    <p>2019</p>
                </ImgWrapper>
                <ImgWrapper>
                    <MainImg src="/images/fam-at-beach.jpg" alt="fam-at-beach" />
                    <p>2018</p>
                </ImgWrapper>
                <ImgWrapper>
                    <MainImg src="/images/2017-cal-rattlesnake-cooper.jpg" alt="2017-cal-rattlesnake-cooper.jpg" />
                    <p>2017</p>
                </ImgWrapper>
                <ImgWrapper>
                    <MainImg src="/images/2016-vacation-smoothie.jpg" alt="2016-vacation-smoothie.jpg" />
                    <p>2016</p>
                </ImgWrapper>
                <ImgWrapper>
                    <MainImg src="/images/cal-felix.jpg" alt="cal-felix" />
                    <p>2015</p>
                </ImgWrapper>
                <ImgWrapper>
                    <MainImg src="/images/cal-felix.jpg" alt="cal-felix" />
                    <p>2014</p>
                </ImgWrapper>
                <ImgWrapper>
                    <MainImg src="/images/cal-felix.jpg" alt="cal-felix" />
                    <p>2013</p>
                </ImgWrapper>
                <ImgWrapper>
                    <MainImg src="/images/cal-felix.jpg" alt="cal-felix" />
                    <p>2012</p>
                </ImgWrapper>
                <ImgWrapper>
                    <MainImg src="/images/cal-felix.jpg" alt="cal-felix" />
                    <p>2011</p>
                </ImgWrapper>
                <ImgWrapper>
                    <MainImg src="/images/cal-felix.jpg" alt="cal-felix" />
                    <p>2010</p>
                </ImgWrapper>
                <ImgWrapper>
                    <MainImg src="/images/cal-felix.jpg" alt="cal-felix" />
                    <p>2009</p>
                </ImgWrapper>
                <ImgWrapper>
                    <MainImg src="/images/cal-felix.jpg" alt="cal-felix" />
                    <p>2008</p>
                </ImgWrapper>
                <ImgWrapper>
                    <MainImg src="/images/cal-felix.jpg" alt="cal-felix" />
                    <p>2007</p>
                </ImgWrapper>
                <ImgWrapper>
                    <MainImg src="/images/cal-felix.jpg" alt="cal-felix" />
                    <p>2006</p>
                </ImgWrapper>
                <ImgWrapper>
                    <MainImg src="/images/cal-felix.jpg" alt="cal-felix" />
                    <p>2005</p>
                </ImgWrapper>
                <ImgWrapper>
                    <MainImg src="/images/cal-felix.jpg" alt="cal-felix" />
                    <p>2004</p>
                </ImgWrapper>
                <ImgWrapper>
                    <MainImg src="/images/cal-felix.jpg" alt="cal-felix" />
                    <p>2003</p>
                </ImgWrapper>
                <ImgWrapper>
                    <MainImg src="/images/cal-felix.jpg" alt="cal-felix" />
                    <p>2002</p>
                </ImgWrapper>
                <ImgWrapper>
                    <MainImg src="/images/cal-felix.jpg" alt="cal-felix" />
                    <p>2001</p>
                </ImgWrapper>
            </ImgDeck>
            <section aria-label='cal photos'>
                <ImgCarousel>
                <PrevCarouselButton>&#8656;</PrevCarouselButton>
                <NextCarouselButton>&#8658;</NextCarouselButton>
                    <ul>
                        {calImgData.map(img => (
                        <ImageSlide>
                            <CarouselImg src={img.path} alt={img.title} />
                        </ImageSlide>
                        ))}
                    </ul>
                </ImgCarousel>
            </section>
        </ContentWrapper>
    )
}

export default HomePage