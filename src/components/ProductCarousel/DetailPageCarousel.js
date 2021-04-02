import React, { useState } from 'react'
import Img from 'gatsby-image'
import Slider from 'react-slick'
// import {
//   CarouselProvider,
//   Slider,
//   Slide,
//   ButtonBack,
//   ButtonNext,
// } from 'pure-react-carousel'
import { WindowContainer, WindowItem, CarouselContainer } from './styles'
import 'pure-react-carousel/dist/react-carousel.es.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const CarouselWindows = ({ images }) => {
  return (
    <>
      <WindowContainer>
        {images.map((image, index) => (
          <WindowItem key={image.id}>
            <Img fluid={image.localFile.childImageSharp.fluid} />
          </WindowItem>
        ))}
      </WindowContainer>
    </>
  )
}

const CarouselSlider = ({ images }) => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    adaptiveHeight: true,

    cssEase: 'easeIn',
  }
  return (
    <>
      {/* <Slider {...settings} className="overflow-hidden">
        {images.map((image, index) => (
          <Img fluid={image.localFile.childImageSharp.fluid} />
        ))}
      </Slider> */}

      {/* <CarouselProvider
        naturalSlideHeight={584}
        naturalSlideWidth={467}
        totalSlides={images.length}
      >
        
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider> */}
      <Slider
        {...settings}
        className="overflow-hidden"
        style={{
          maxWidth: '480px',

          marginBottom: '1.33vw',
        }}
      >
        {images.map((image, index) => (
          <Img fluid={image.localFile.childImageSharp.fluid} key={image.id} />
        ))}
      </Slider>
    </>
  )
}

const DetailPageCarousel = props => {
  console.log('React Slider images', props.images)
  return (
    <>
      <CarouselContainer>
        <CarouselSlider images={props.images} />
        <CarouselWindows images={props.images} />
      </CarouselContainer>
    </>
  )
}

export default DetailPageCarousel
