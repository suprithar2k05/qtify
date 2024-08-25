import SongCard from './SongCard';
import { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// nextIcon={
//   <i
//     style={{ color: '#34C94B', fontSize: '2.5rem' }}
//     className='fa-solid fa-circle-chevron-right'
//   ></i>
// }

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7,
    slidesToSlide: 7 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

export default function SongCarousel({ songs }) {
  return (
    <Carousel autoPlay={true} transitionDuration={500} responsive={responsive}>
      {songs.map(({ id, title, likes, image, follows }) => (
              <SongCard {...{ title, likes, image, follows }} />
          ))}
    </Carousel>
  );
}
