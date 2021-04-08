import React, { useState } from 'react'
import Img from 'gatsby-image'
import Slider from 'react-slick'
import SwiperCore, { Thumbs } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss'
import 'swiper/components/thumbs/thumbs.scss'
import { WindowContainer, WindowItem, CarouselContainer } from './styles'
import 'pure-react-carousel/dist/react-carousel.es.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

SwiperCore.use([Thumbs])

const CarouselWindows = ({ images }) => {
  return (
    <>
      <WindowContainer className="swiper-thumbs">
        <Swiper
          slidesPerView={4}
          autoHeight={true}
          loop={true}
          width={400}
          spaceBetween={24}
          centeredSlides={true}
        >
          {images.map((image, index) => (
            <SwiperSlide key={image.id}>
              <WindowItem>
                <Img fluid={image.localFile.childImageSharp.fluid} />
              </WindowItem>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* {images.map((image, index) => (
          <WindowItem key={image.id}>
            <Img fluid={image.localFile.childImageSharp.fluid} />
          </WindowItem>
        ))} */}
      </WindowContainer>
    </>
  )
}

const CarouselSlider = ({ images }) => {
  const settings = {
    dots: true,
    arrows: true,
    swipe: true,
    infinite: true,
    autoplay: true,
    adaptiveHeight: true,

    cssEase: 'easeIn',
  }
  return (
    <>
      {/* <Slider
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
      </Slider> */}
      <Swiper
        slidesPerView={1}
        autoHeight={true}
        loop={true}
        width={400}
        spaceBetween={40}
        centeredSlides={true}
        style={{
          width: `480px`,
        }}
        thumbs={{
          swiper: 'swiper-thumbs',
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={image.id}>
            <Img fluid={image.localFile.childImageSharp.fluid} key={image.id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

const DetailPageCarousel = props => {
  console.log('React Slider images', props.images)

  const [currentSlide, setCurrentSlide] = useState(0)

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
