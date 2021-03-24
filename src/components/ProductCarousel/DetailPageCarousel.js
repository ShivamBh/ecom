import React from 'react'
import Img from 'gatsby-image'
import Slider from 'react-slick'
import { WindowContainer, WindowItem } from './styles'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

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
  }
  return (
    <>
      <Slider {...settings} className="overflow-hidden">
        {images.map((image, index) => (
          <Img fluid={image.localFile.childImageSharp.fluid} />
        ))}
      </Slider>
    </>
  )
}

const DetailPageCarousel = props => {
  console.log('React Slider images', props.images)
  return (
    <>
      <h1 style={{ marginTop: '8vw' }}>DetailPageCarousel</h1>
      {/* <CarouselSlider images={props.images} /> */}
      <CarouselWindows images={props.images} />
    </>
  )
}

export default DetailPageCarousel
