import React from 'react'
import { ContentWrapper } from '../elements/containers'
import { calImgData } from '../data/cal-img-data'
import ImgCarousel from '../components/ImgCarousel/ImgCarousel'

const HomePage = () => {
    return (
        <ContentWrapper>
                <h3>TLDR</h3>
            <p>
                People who are effective and interested, affect and advance. Be <a href='https://en.wikipedia.org/wiki/Antifragile' target='_blank' rel="noreferrer">antifragile</a>.
                <br />
                Find purpose and take action towards it.
            </p>
            <br />
                <h3>Quick Intro</h3>
            <p>
                Hello! welcome to my public wiki.
                <br />
                I am <a href="/connect">Cal Day</a>, a 21 year old male from Canada
                and the USA. I enjoy effective problem finding and solving, aka solution derivation - solution simplification - and systematization.
                I currently do that within the domains of manufacturing, software, business, finance, and personal health and longevity. I'm an optimist,
                especially towards radical self-growth. I also enjoy sharing time with family and friends, spirited debate and riffing,
                and much more.
            </p>
            <br />
                <h3>My Goal Character Traits</h3>
            <p>
                Interested, active, effective, prolific, antifragile, integrous, optimistic, autonomous, knowledgeable, logical,
                radically volatile.
            </p>
            <br />
            <section aria-label='cal photos'>
                <h3>Images of Cal</h3>
                <ImgCarousel slides={calImgData} />
            </section>
            <br/>
            <h3>Links to Friends / Good Sites</h3>
            <div>
                <a href='https://bugswriter.com'target='_blank' rel="noreferrer">Bugswriter</a>
                {' - '}
                <a href='https://www.hayesraffle.com/'target='_blank' rel="noreferrer">Hayes Raffle</a>
                {' - '}
                <a href='https://landchad.net//'target='_blank' rel="noreferrer">Landchad.net</a>
                {' - '}
                <a href='https://berkshirehathaway.com/'target='_blank' rel="noreferrer">Berkshire Hathaway</a>
                {' - '}
                <a href='https://amazon.com/'target='_blank' rel="noreferrer">Amazon</a>
                {' - '}
                <a href='https://google.com/'target='_blank' rel="noreferrer">Google</a>
            </div>
        </ContentWrapper>
    )
}

export default HomePage