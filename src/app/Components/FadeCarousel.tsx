import React, { useEffect, useRef, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import styles from './FadeCarousel.module.css';
import Fade from 'embla-carousel-fade';

const FadeCarousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({loop: true, duration: 40}, [Fade()]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const autoplayInterval = useRef<NodeJS.Timeout | null>(null);
  
    useEffect(() => {
      if (!emblaApi) return;
  
      const onSelect = () => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
      };
  
      emblaApi.on('select', onSelect);
      onSelect();
  
      // Autoplay functionality
      const startAutoplay = () => {
        autoplayInterval.current = setInterval(() => {
          if (emblaApi) {
            emblaApi.scrollNext();
          }
        }, 6000); // Adjust the interval as needed
      };
  
      const stopAutoplay = () => {
        if (autoplayInterval.current) {
          clearInterval(autoplayInterval.current);
          autoplayInterval.current = null;
        }
      };
  
      startAutoplay();
  
      return () => stopAutoplay();
    }, [emblaApi]);
  return (
    <div className={styles.fade}>
      <div className={styles.fade__viewport} ref={emblaRef}>
        <div className={styles.fade__container}>
          <div className={`${styles.fade__slide} ${selectedIndex === 0 ? styles.isSelected : ''}`}>
            <img className="" src="/assets/images/food/wings.webp" alt="Album one" />
          </div>
          <div className={`${styles.fade__slide} ${selectedIndex === 1 ? styles.isSelected : ''}`}>
            <img className="" src="/assets/images/food/sliders.jpg" alt="Album two" />
          </div>
          <div className={`${styles.fade__slide} ${selectedIndex === 2 ? styles.isSelected : ''}`}>
            <img className="" src="/assets/images/food/alfredo.jpeg" alt="Album three" />
          </div>
          <div className={`${styles.fade__slide} ${selectedIndex === 3 ? styles.isSelected : ''}`}>
            <img className="" src="/assets/images/food/margaritas.jpg" alt="Album four" />
          </div>
          <div className={`${styles.fade__slide} ${selectedIndex === 4 ? styles.isSelected : ''}`}>
            <img className="" src="/assets/images/food/funnel-cake.png" alt="Album five" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FadeCarousel;