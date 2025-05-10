
import React from 'react';
import ImageSlider from './ImageSlider';

// Define slider images
const sliderImages = [
  {
    src: '/lovable-uploads/c9d627ba-a002-49d3-b05d-1b1007a62f01.png',
    alt: 'Digital India Initiative'
  },
  {
    src: '/lovable-uploads/002488bb-3ca1-405e-81ec-86819c8eeaf5.png',
    alt: 'Digital India Services'
  },
  {
    src: '/lovable-uploads/010d08a8-a659-453c-8eee-62302e1645f6.png',
    alt: 'Digital Seva Portal'
  },
  {
    src: 'https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=1074',
    alt: 'Government Services Online'
  },
  {
    src: 'https://images.unsplash.com/photo-1485452499676-62ab02c20e83?q=80&w=1170',
    alt: 'Digital Documentation'
  }
];

const Banner: React.FC = () => {
  return (
    <div className="mb-8">
      <ImageSlider images={sliderImages} autoSlideInterval={5000} />
    </div>
  );
};

export default Banner;
