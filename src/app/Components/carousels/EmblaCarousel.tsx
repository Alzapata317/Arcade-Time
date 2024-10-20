'use client'
import React, { useCallback, useEffect, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import styles from '../../styles/EmblaCarousel.module.css';
import { getBaseUrl } from '../../utils/getBaseUrl';

const EmblaCarousel = () => {
  const autoplay = Autoplay({ delay: 5000 }); // Adjust the delay as needed
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay]);

  return (
    <div className={styles.embla + " pm-md:h-[80vh] pm-sm:col-span-4 lm-sm:col-span-5"}>
      <div className={styles.embla__viewport + " w-[100%] h-[100%] "} ref={emblaRef}>
        <div className={styles.embla__container }>
          <div className={styles.embla__slide + " relative"}>
            <img className='w-full block pm-sm:h-[28vh] pm-md:h-[35vh] lm-sm:h-[40vh]' src={getBaseUrl("/assets/images/Pacman.webp")} alt="First slide" />
          </div>
          <div className={styles.embla__slide}>
            <img className='w-full block pm-sm:h-[28vh] pm-md:h-[35vh] lm-sm:h-[40vh]' src={getBaseUrl("/assets/images/Galaga.jpg")}alt="Second slide" />
          </div>
          <div className={styles.embla__slide}>
            <img className='w-full block pm-sm:h-[28vh] pm-md:h-[35vh] lm-sm:h-[40vh]' src={getBaseUrl("/assets/images/Sf.avif")} alt="Third slide" />
          </div>
          <div className={styles.embla__slide}>
            <img className='w-full block pm-sm:h-[28vh] pm-md:h-[35vh] lm-sm:h-[40vh]' src={getBaseUrl("/assets/images/DonkeyKong.jpg")} alt="Fourth slide" />
          </div>
          <div className={styles.embla__slide}>
            <img className='w-full block pm-sm:h-[28vh] pm-md:h-[35vh] lm-sm:h-[40vh]' src={getBaseUrl("/assets/images/marvel.jpg")} alt="Five slide" />
          </div>
          <div className={styles.embla__slide}>
            <img className='w-full block pm-sm:h-[28vh] pm-md:h-[35vh] lm-sm:h-[40vh]' src={getBaseUrl("/assets/images/tapper.jpg")} alt="Sixth slide" />
          </div>
          <div className={styles.embla__slide}>
            <img className='w-full block pm-sm:h-[28vh] pm-md:h-[35vh] lm-sm:h-[40vh]' src={getBaseUrl("/assets/images/tmnt.png")} alt="Seventh slide" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
