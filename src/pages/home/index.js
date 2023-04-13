import React from 'react'
import Icon from '@mdi/react';
import Carousel from 'nuka-carousel';
import { mdilChevronLeft } from '@mdi/light-js';
import { mdilChevronRight } from '@mdi/light-js';



import './Home.css'
// import Product from '../product/Product';
import MainContent from '../product/MainContent';

const banners = [
  'https://m.media-amazon.com/images/I/61qkdjjIA3L._SX3000_.jpg' ,
'https://m.media-amazon.com/images/I/71SnvcmmGlL._SX3000_.jpg' ,
'https://m.media-amazon.com/images/I/619rl+QqjwL._SX3000_.jpg' ,
'https://m.media-amazon.com/images/I/61gPOiG6YiL._SX3000_.jpg' ,
'https://m.media-amazon.com/images/I/71Dct0EW90L._SX3000_.jpg ',
'https://m.media-amazon.com/images/I/71vdTR50hFL._SX3000_.jpg' ,
'https://m.media-amazon.com/images/I/61mWRsVO4oL._SX3000_.jpg ',
'https://m.media-amazon.com/images/I/8160RuRhSUL._SX3000_.jpg' ,
];

function HomePage() {
  return (
    <div className='home'>
    <div className='img__banner'>
    <Carousel
          autoplay
          autoplayReverse
          className="img__banner"
          renderCenterLeftControls={({ previousSlide }) => (
            <Icon
              className="h-banner__control"
              size={5}
              path={mdilChevronLeft}
              onClick={previousSlide}
            />
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <Icon
              className="h-banner__control"
              size={5}
              path={mdilChevronRight}
              onClick={nextSlide}
            />
          )}
          renderBottomCenterControls={() => null}
        >
          {banners.map((bannerSrc, index) => (
            <img className='Slider__banner' key={index} alt={`Banner ${index + 1}`} src={bannerSrc} />
          ))}
        </Carousel>
    </div>
            <MainContent />

   


    </div>
  )
}

export default HomePage
