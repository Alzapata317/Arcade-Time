import React, { Component, useEffect, useState, useRef } from 'react';
import Coverflow from 'react-coverflow';
import { getBaseUrl } from '../../utils/getBaseUrl';

  const CoverflowCarousel = () => {
    const [coverflowHeight, setCoverflowHeight] = useState(window.innerWidth > window.innerHeight ? window.innerHeight * 0.6 : window.innerWidth * 0.6);
    const [displayQuantityOfSide, setDisplayQuantityOfSide] = useState(
      window.innerWidth > window.innerHeight ? 3 : 2
    );
  
    const coverflowRef = useRef(null);
  
    const updateDisplayQuantity = () => {
      if (coverflowRef.current) {
        setCoverflowHeight(window.innerWidth > window.innerHeight ? window.innerHeight * 0.6 : window.innerWidth * 0.6);
        setDisplayQuantityOfSide(window.innerWidth > window.innerHeight ? 3 : 2);
      }
    };
  
    useEffect(() => {
      updateDisplayQuantity(); // Set initial values
      window.addEventListener('resize', updateDisplayQuantity);
  
      return () => {
        window.removeEventListener('resize', updateDisplayQuantity);
      };
    }, []);
  
  

        return (
            <div ref={coverflowRef}>
            <Coverflow
            height={coverflowHeight}
            displayQuantityOfSide={displayQuantityOfSide}
            navigation={false}
            enableHeading={false}
            active={0}
            enableScroll={false}
            >
                <a>
                    <div className='pm-md:w-[20vw] pm-md:h-[16vh] lm-sm:w-[14.3vw] lm-sm:h-[20vh] lm-lg:h-[24.75vh] p-[5%] border-2 border-black rounded-lg bg-cover bg-no-repeat flex flex-col bg-white'>
                        <div className='w-full flex h-[25%]'>
                            <div className='w-4/5 flex justify-left items-center'>
                                <div className='flex justify-center items-center'><img alt="" src={getBaseUrl('/assets/reviews/Liam-Anderson.png')} className='pm-md:h-[3vh] lm-sm:w-[3vw] lm-sm:h-[4vh] lm-lg:h-[5vh]'/></div>
                                <p className='pm-md:text-[1vh] lm-sm:text-[1.1vh] lm-lg:text-[1.5vh]'>Liam Anderson</p>
                            </div>
                            <div className='w-1/5 flex items-center justify-end m-2'><img alt="" className="pm-md:w-[2vw] lm-sm:w-[1.5vw]"src={getBaseUrl('/assets/svgs/google.svg')}/></div>
                        </div>
                        <div className='w-full h-[15%]'>
                            <img className="pm-md:w-[10vw] lm-sm:w-20 lm-lg:w-[6vw]" src={getBaseUrl('/assets/reviews/stars.png')}/>
                        </div>
                        <p className='w-full h-[60%] pm-md:text-[.7vh] lm-sm:text-[.9vh] lm-lg:text-[1.2vh]'>
                        “If you’re looking for a fun and affordable place to spend a few hours, 
                        this arcade is it. The game selection is huge and there’s something for everyone.
                        I particularly enjoyed the VR section and the claw machines. Great value for 
                        money and a lot of fun!”
                        </p>
                    </div>
                </a>
                <a className='' >
                    <div className='pm-md:w-[20vw] pm-md:h-[16vh] lm-sm:w-[14.3vw] lm-sm:h-[20vh] lm-lg:h-[24.75vh] p-[5%] border-2 border-black rounded-lg bg-cover bg-no-repeat flex flex-col bg-white'>
                        <div className='w-full flex h-[25%]'>
                            <div className='w-4/5 flex justify-left items-center'>
                                <div className='flex justify-center items-center'><img alt="" src={getBaseUrl('/assets/reviews/David-Lee.png')} className='pm-md:h-[3vh] lm-sm:w-[3vw] lm-sm:h-[4vh] lm-lg:h-[5vh]'/></div>
                                <p className='pm-md:text-[1vh] lm-sm:text-[1.1vh] lm-lg:text-[1.5vh]'>Richard Myers</p>
                            </div>
                            <div className='w-1/5 flex items-center justify-end m-2'><img alt="" className="pm-md:w-[2vw] lm-sm:w-[1.5vw]"src={getBaseUrl('/assets/svgs/google.svg')}/></div>
                        </div>
                        <div className='w-full h-[15%]'>
                            <img className="pm-md:w-[10vw] lm-sm:w-20 lm-lg:w-[6vw]" src={getBaseUrl('/assets/reviews/stars.png')}/>
                        </div>
                        <p className='w-full h-[60%] pm-md:text-[.7vh] lm-sm:text-[.9vh] lm-lg:text-[1.2vh]'>
                        “This is the best arcade I’ve been to in a long time. 
                        The staff are friendly and helpful, and there’s a wide 
                        range of games to choose from. Whether you’re into shooting 
                        games, puzzles, or simulators, they have it all. Will definitely be
                        back!”
                        </p>
                    </div>
                </a>
                <a className='' >
                    <div className='pm-md:w-[20vw] pm-md:h-[16vh] lm-sm:w-[14.3vw] lm-sm:h-[20vh] lm-lg:h-[24.75vh] p-[5%] border-2 border-black rounded-lg bg-cover bg-no-repeat flex flex-col bg-white'>
                        <div className='w-full flex h-[25%]'>
                            <div className='w-4/5 flex justify-left items-center'>
                                <div className='flex justify-center items-center'><img alt="" src={getBaseUrl('/assets/reviews/Olivia-White.png')} className='pm-md:h-[3vh] lm-sm:w-[3vw] lm-sm:h-[4vh] lm-lg:h-[5vh]'/></div>
                                <p className='pm-md:text-[1vh] lm-sm:text-[1.1vh] lm-lg:text-[1.5vh]'>Olivia White</p>
                            </div>
                            <div className='w-1/5 flex items-center justify-end m-2'><img alt="" className="pm-md:w-[2vw] lm-sm:w-[1.5vw]"src={getBaseUrl('/assets/svgs/google.svg')}/></div>
                        </div>
                        <div className='w-full h-[15%]'>
                            <img alt=""  className="pm-md:w-[10vw] lm-sm:w-20 lm-lg:w-[6vw]" src={getBaseUrl('/assets/reviews/stars.png')}/>
                        </div>
                        <p className='w-full h-[60%] pm-md:text-[.7vh] lm-sm:text-[.9vh] lm-lg:text-[1.2vh]'>
                        “Had an amazing time at this arcade. The atmosphere is electric, 
                        and there are so many games to choose from. I loved the multiplayer
                        options where you can compete with friends. The arcade is clean and 
                        well-lit, making it a great spot for a fun evening.”
                        </p>
                    </div>
                </a>
                <a className='' >
                    <div className='pm-md:w-[20vw] pm-md:h-[16vh] lm-sm:w-[14.3vw] lm-sm:h-[20vh] lm-lg:h-[24.75vh] p-[7%] border-2 border-black rounded-lg bg-cover bg-no-repeat flex flex-col bg-white'>
                        <div className='w-full flex h-[25%]'>
                            <div className='w-4/5 flex justify-left items-center'>
                                <div className='flex justify-center items-center'><img alt="" src={getBaseUrl('/assets/reviews/John-Parker.png')} className='pm-md:h-[3vh] lm-sm:w-[3vw] lm-sm:h-[4vh] lm-lg:h-[5vh]'/></div>
                                <p className='pm-md:text-[1vh] lm-sm:text-[1.1vh] lm-lg:text-[1.5vh]'>John Parker</p>
                            </div>
                            <div className='w-1/5 flex items-center justify-end m-2'><img alt="" className="pm-md:w-[2vw] lm-sm:w-[1.5vw]"src={getBaseUrl('/assets/svgs/google.svg')}/></div>
                        </div>
                        <div className='w-full h-[15%]'>
                            <img alt=""  className="pm-md:w-[10vw] lm-sm:w-20 lm-lg:w-[6vw]" src={getBaseUrl('/assets/reviews/stars.png')}/>
                        </div>
                        <p className='w-full h-[60%] pm-md:text-[.7vh] lm-sm:text-[.9vh] lm-lg:text-[1.2vh]'>
                            “Absolutely loved this arcade! The variety of games is incredible,
                            from classic pinball machines to the latest VR experiences. 
                            The staff is super friendly and the place is always clean and 
                            well-maintained”
                        </p>
                    </div>
                </a>
                <a className='' >
                    <div className='pm-md:w-[20vw] pm-md:h-[16vh] lm-sm:w-[14.3vw] lm-sm:h-[20vh] lm-lg:h-[24.75vh] p-[5%] border-2 border-black rounded-lg bg-cover bg-no-repeat flex flex-col bg-white'>
                        <div className='w-full flex h-[25%]'>
                            <div className='w-4/5 flex justify-left items-center'>
                                <div className='flex justify-center items-center'><img alt="" src={getBaseUrl('/assets/reviews/Sarah-Mitchell.png')} className='pm-md:h-[3vh] lm-sm:w-[3vw] lm-sm:h-[4vh] lm-lg:h-[5vh]'/></div>
                                <p className='pm-md:text-[1vh] lm-sm:text-[1.1vh] lm-lg:text-[1.5vh]'>Sarah Mitchell</p>
                            </div>
                            <div className='w-1/5 flex items-center justify-end m-2'><img alt="" className="pm-md:w-[2vw] lm-sm:w-[1.5vw]"src={getBaseUrl('/assets/svgs/google.svg')}/></div>
                        </div>
                        <div className='w-full h-[15%]'>
                            <img alt=""  className="pm-md:w-[10vw] lm-sm:w-20 lm-lg:w-[6vw]" src={getBaseUrl('/assets/reviews/stars.png')}/>
                        </div>
                        <p className='w-full h-[60%] pm-md:text-[.7vh] lm-sm:text-[.9vh] lm-lg:text-[1.2vh]'>
                            “This arcade is a hidden gem! I spent hours here and still didn't get to 
                            try everything. The game selection is top-notch and the prize counter has 
                            some great rewards. Definitely coming back soon!”
                        </p>
                    </div>
                </a>
                <a className='' >
                    <div className='pm-md:w-[20vw] pm-md:h-[16vh] lm-sm:w-[14.3vw] lm-sm:h-[20vh] lm-lg:h-[24.75vh] p-[5%] border-2 border-black rounded-lg bg-cover bg-no-repeat flex flex-col bg-white'>
                        <div className='w-full flex h-[25%]'>
                            <div className='w-4/5 flex justify-left items-center'>
                                <div className='flex justify-center items-center'><img alt="" src={getBaseUrl('/assets/reviews/Mike-Johnson.png')} className='pm-md:h-[3vh] lm-sm:w-[3vw] lm-sm:h-[4vh] lm-lg:h-[5vh]'/></div>
                                <p className='pm-md:text-[1vh] lm-sm:text-[1.1vh] lm-lg:text-[1.5vh]'>Mike Johnson</p>
                            </div>
                            <div className='w-1/5 flex items-center justify-end m-2'><img alt="" className="pm-md:w-[2vw] lm-sm:w-[1.5vw]"src={getBaseUrl('/assets/svgs/google.svg')}/></div>
                        </div>
                        <div className='w-full h-[15%]'>
                            <img alt=""  className="pm-md:w-[10vw] lm-sm:w-20 lm-lg:w-[6vw]" src={getBaseUrl('/assets/reviews/stars.png')}/>
                        </div>
                        <p className='w-full h-[60%] pm-md:text-[.7vh] lm-sm:text-[.9vh] lm-lg:text-[1.2vh]'>
                            “My kids and I had a blast at this arcade. There are games for 
                            all ages, and the atmosphere is lively and fun. We especially 
                            enjoyed the racing games and the interactive dance machines. 
                            Highly recommend for a family outing!”
                        </p>
                    </div>
                </a>
                <a className='' >
                    <div className='pm-md:w-[20vw] pm-md:h-[16vh] lm-sm:w-[14.3vw] lm-sm:h-[20vh] lm-lg:h-[24.75vh] p-[5%] border-2 border-black rounded-lg bg-cover bg-no-repeat flex flex-col bg-white'>
                        <div className='w-full flex h-[25%]'>
                            <div className='w-4/5 flex justify-left items-center'>
                                <div className='flex justify-center items-center'><img alt="" src={getBaseUrl('/assets/reviews/Jonathan-Demare.png')} className='pm-md:h-[3vh] lm-sm:w-[3vw] lm-sm:h-[4vh] lm-lg:h-[5vh]'/></div>
                                <p className='pm-md:text-[1vh] lm-sm:text-[1.1vh] lm-lg:text-[1.5vh]'>David Lee</p>
                            </div>
                            <div className='w-1/5 flex items-center justify-end m-2'><img alt="" className="pm-md:w-[2vw] lm-sm:w-[1.5vw]"src={getBaseUrl('/assets/svgs/google.svg')}/></div>
                        </div>
                        <div className='w-full h-[15%]'>
                            <img alt=""  className="pm-md:w-[10vw] lm-sm:w-20 lm-lg:w-[6vw]" src={getBaseUrl('/assets/reviews/stars.png')}/>
                        </div>
                        <p className='w-full h-[60%] pm-md:text-[.7vh] lm-sm:text-[.9vh] lm-lg:text-[1.2vh]'>
                        “As a fan of retro games, this arcade was a dream come true. 
                        They have all the classics I grew up with and more. The tokens are 
                        reasonably priced and the snack bar offers a good selection of treats. 
                        A great place to relive childhood memories!”
                        </p>
                    </div>
                </a>
            </Coverflow>
            </div>
        );
    };

export default CoverflowCarousel;