'use client'
import React, { useCallback, useEffect, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import styles from './EmblaCarousel.module.css';
import Image from 'next/image';


const EmblaCarousel = () => {
  const autoplay = Autoplay({ delay: 5000 }); // Adjust the delay as needed
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay]);

  return (
    <div className={styles.embla + " h-[380px] col-span-5"}>
      <div className={styles.embla__viewport + " w-[100%] h-[100%] "} ref={emblaRef}>
        <div className={styles.embla__container }>
          <div className={styles.embla__slide + " relative"}>
            <Image src="/assets/images/Pacman.webp" alt="First slide" />
          </div>
          <div className={styles.embla__slide}>
            <Image src="/assets/images/Galaga.jpg" alt="Second slide" />
          </div>
          <div className={styles.embla__slide}>
            <Image src="/assets/images/Sf.avif" alt="Third slide" />
          </div>
          <div className={styles.embla__slide}>
            <Image src="/assets/images/DonkeyKong.jpg" alt="Fourth slide" />
          </div>
          <div className={styles.embla__slide}>
            <Image src="/assets/images/marvel.jpg" alt="Five slide" />
          </div>
          <div className={styles.embla__slide}>
            <Image src="/assets/images/tapper.jpg" alt="Sixth slide" />
          </div>
          <div className={styles.embla__slide}>
            <Image src="/assets/images/tmnt.png" alt="Seventh slide" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
