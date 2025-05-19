import React from 'react';
import { ImageSlider } from './ImageSlider';

const GovernmentImageCarousel: React.FC = () => {
  // Images for the carousel
  const images = [
    {
      src: '/images/digital-india-logo.jpg',
      alt: 'Digital India - Power To Empower'
    },
    {
      src: '/images/digital-india-6-years.jpg',
      alt: 'Celebrating 6 Years of Digital India'
    },
    {
      src: '/images/digital-seva-portal.jpg',
      alt: 'Digital Seva Portal'
    }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Government Initiatives</h2>
      <ImageSlider images={images} autoSlideInterval={5000} />
    </div>
  );
};

export default GovernmentImageCarousel;