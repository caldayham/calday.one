import React from 'react'
import { ContentWrapper, ImageDeck } from '../elements/containers'
import { MainImg } from '../elements/images'

const HomePage = () => {
  return (
    <ContentWrapper>
    <p>
        People who are effective and interested, affect and advance. Be antifragile.
        <br />
        Work is action with a purpose.
        <br />
        I will never stop desiring results and taking action to achieve them, I will never stop working.
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
    <ImageDeck>
        <MainImg src="/images/baby-chick.jpg" alt="baby-chick"/>
        <MainImg src="/images/cal-felix.jpg" alt="cal-felix"/>
        <MainImg src="/images/cal-fynn.jpg" alt="cal-fynn"/>
        <MainImg src="/images/cal-rattlesnake-cooper.jpg" alt="cal-rattlesnake-cooper"/>
        <MainImg src="/images/mum-dad-cal.jpg" alt="mum-dad-cal"/>
        <MainImg src="/images/dad-cal.jpg" alt="dad-cal"/>
        <MainImg src="/images/fam-at-beach.jpg" alt="fam-at-beach"/>
    </ImageDeck>
</ContentWrapper>
  )
}

export default HomePage