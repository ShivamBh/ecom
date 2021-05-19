import React, { useState } from 'react'
import Img from 'gatsby-image'
import Slider from 'react-slick'
import SwiperCore, { Thumbs, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss'
import 'swiper/components/thumbs/thumbs.scss'
import 'swiper/components/navigation/navigation.scss'
import { WindowContainer, WindowItem, CarouselContainer } from './styles'

import './styles.css'

SwiperCore.use([Navigation, Thumbs])

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

  const [thumbSwiper, setThumbSwiper] = useState(null)

  return (
    <>
      {/* Main Swiper */}
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbSwiper }}
        className="mainSwiper"
        autoHeight={true}
        slidesPerView={1}
      >
        {images.map((image, index) => (
          <SwiperSlide key={image.id}>
            <Img fluid={image.localFile.childImageSharp.fluid} key={image.id} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Swiper Thumbnails */}
      <Swiper
        onSwiper={setThumbSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesVisibility={true}
        watchSlidesProgress={true}
        className="thumbnailSwiper"
        style={{}}
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
        {/* <CarouselWindows images={props.images} /> */}
      </CarouselContainer>
    </>
  )
}

export default DetailPageCarousel
