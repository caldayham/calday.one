import React from 'react'
import { CarouselImg, CarouselWrapper } from './styles'

const ImgCarousel = (props) => {
  return (
    <CarouselWrapper>
        {props.imgs.map((img) => (
            <CarouselImg src={img.path}/>
        ))}
    </CarouselWrapper>
  )
}

export default ImgCarousel