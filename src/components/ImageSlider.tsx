
import React, { useState, useEffect } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from '@/components/ui/card';

interface ImageSliderProps {
  images: {
    src: string;
    alt: string;
  }[];
  autoSlideInterval?: number;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ 
  images, 
  autoSlideInterval = 5000 
}) => {
  const [api, setApi] = useState<any>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const setSlide = (index: number) => {
      api.scrollTo(index);
      setCurrent(index);
    };

    // Setup auto-sliding
    const interval = setInterval(() => {
      const nextIndex = (current + 1) % images.length;
      setSlide(nextIndex);
    }, autoSlideInterval);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, [api, current, images.length, autoSlideInterval]);

  return (
    <div className="w-full">
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="overflow-hidden border-none rounded-lg">
                  <div className="h-[200px] sm:h-[300px] md:h-[400px] relative">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-full object-cover" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30">
                      <div className="absolute bottom-4 left-4 text-white font-semibold text-lg shadow-sm">
                        {image.alt}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block">
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </div>
        <div className="flex justify-center gap-1 mt-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all ${
                current === index ? "w-8 bg-primary" : "w-2 bg-primary/30"
              }`}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
};

export default ImageSlider;
