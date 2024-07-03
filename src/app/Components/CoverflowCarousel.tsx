import React, { Component, useEffect, useState } from 'react';
import Coverflow from 'react-coverflow';

class CoverflowCarousel extends Component<{}, { active: number }> {
    render() {
        return (
            <Coverflow
            width={960}
            height={580}
            displayQuantityOfSide={3}
            navigation={false}
            enableHeading={false}
            active={0}
            enableScroll={false}
            >
                <a className='' >
                    <div className='w-[244px] h-[244px] p-4 border-2 border-black rounded-lg bg-cover bg-no-repeat flex flex-col bg-white'>
                        <div className='w-full flex h-[25%]'>
                            <div className='w-4/5 flex justify-left items-center'>
                                <div className='flex justify-center items-center'><img alt="" src='/assets/reviews/Liam-Anderson.png' className='w-12 h-12'/></div>
                                <p className='text-sm'>Liam Anderson</p>
                            </div>
                            <div className='w-1/5 flex items-center justify-end m-2'><img alt="" className="w-6"src='/assets/svgs/google.svg'/></div>
                        </div>
                        <div className='w-full h-[15%]'>
                            <img className="w-20" src='/assets/reviews/stars.png'/>
                        </div>
                        <p className='w-full h-[60%] text-xs'>
                        “If you’re looking for a fun and affordable place to spend a few hours, 
                        this arcade is it. The game selection is huge and there’s something for everyone.
                        I particularly enjoyed the VR section and the claw machines. Great value for 
                        money and a lot of fun!”
                        </p>
                    </div>
                </a>
                <a className='' >
                    <div className='w-[244px] h-[244px] p-4 border-2 border-black rounded-lg bg-cover bg-no-repeat flex flex-col bg-white'>
                        <div className='w-full flex h-[25%]'>
                            <div className='w-4/5 flex justify-left items-center'>
                                <div className='flex justify-center items-center'><img alt="" src='/assets/reviews/David-Lee.png' className='w-12 h-12'/></div>
                                <p className='text-sm'>Richard Myers</p>
                            </div>
                            <div className='w-1/5 flex items-center justify-end m-2'><img alt="" className="w-6"src='/assets/svgs/google.svg'/></div>
                        </div>
                        <div className='w-full h-[15%]'>
                            <img className="w-24" src='/assets/reviews/stars.png'/>
                        </div>
                        <p className='w-full h-[60%] text-xs'>
                        “This is the best arcade I’ve been to in a long time. 
                        The staff are friendly and helpful, and there’s a wide 
                        range of games to choose from. Whether you’re into shooting 
                        games, puzzles, or simulators, they have it all. Will definitely be
                        back!”
                        </p>
                    </div>
                </a>
                <a className='' >
                    <div className='w-[244px] h-[244px] p-4 border-2 border-black rounded-lg bg-cover bg-no-repeat flex flex-col bg-white'>
                        <div className='w-full flex h-[25%]'>
                            <div className='w-4/5 flex justify-left items-center'>
                                <div className='flex justify-center items-center'><img alt="" src='/assets/reviews/Olivia-White.png' className='w-12 h-12'/></div>
                                <p className='text-sm'>Olivia White</p>
                            </div>
                            <div className='w-1/5 flex items-center justify-end m-2'><img alt="" className="w-6"src='/assets/svgs/google.svg'/></div>
                        </div>
                        <div className='w-full h-[15%]'>
                            <img alt=""  className="w-24" src='/assets/reviews/stars.png'/>
                        </div>
                        <p className='w-full h-[60%] text-xs'>
                        “Had an amazing time at this arcade. The atmosphere is electric, 
                        and there are so many games to choose from. I loved the multiplayer
                        options where you can compete with friends. The arcade is clean and 
                        well-lit, making it a great spot for a fun evening.”
                        </p>
                    </div>
                </a>
                <a className='w-[244px] h-[244px]' >
                    <div className='w-[244px] h-[244px] p-4 border-2 border-black rounded-lg bg-cover bg-no-repeat flex flex-col bg-white'>
                        <div className='w-full flex h-[25%]'>
                            <div className='w-4/5 flex justify-left items-center'>
                                <div className='flex justify-center items-center'><img alt="" src='/assets/reviews/John-Parker.png' className='w-12 h-12'/></div>
                                <p className='text-sm'>John Parker</p>
                            </div>
                            <div className='w-1/5 flex items-center justify-end m-2'><img alt="" className="w-6"src='/assets/svgs/google.svg'/></div>
                        </div>
                        <div className='w-full h-[15%]'>
                            <img alt=""  className="w-24" src='/assets/reviews/stars.png'/>
                        </div>
                        <p className='w-full h-[60%] text-xs'>
                            “Absolutely loved this arcade! The variety of games is incredible,
                            from classic pinball machines to the latest VR experiences. 
                            The staff is super friendly and the place is always clean and 
                            well-maintained”
                        </p>
                    </div>
                </a>
                <a className='' >
                    <div className='w-[244px] h-[244px] p-4 border-2 border-black rounded-lg bg-cover bg-no-repeat flex flex-col bg-white'>
                        <div className='w-full flex h-[25%]'>
                            <div className='w-4/5 flex justify-left items-center'>
                                <div className='flex justify-center items-center'><img alt="" src='/assets/reviews/Sarah-Mitchell.png' className='w-12 h-12'/></div>
                                <p className='text-sm'>Sarah Mitchell</p>
                            </div>
                            <div className='w-1/5 flex items-center justify-end m-2'><img alt="" className="w-6"src='/assets/svgs/google.svg'/></div>
                        </div>
                        <div className='w-full h-[15%]'>
                            <img alt=""  className="w-24" src='/assets/reviews/stars.png'/>
                        </div>
                        <p className='w-full h-[60%] text-xs'>
                            “This arcade is a hidden gem! I spent hours here and still didn't get to 
                            try everything. The game selection is top-notch and the prize counter has 
                            some great rewards. Definitely coming back soon!”
                        </p>
                    </div>
                </a>
                <a className='' >
                    <div className='w-[244px] h-[244px] p-4 border-2 border-black rounded-lg bg-cover bg-no-repeat flex flex-col bg-white'>
                        <div className='w-full flex h-[25%]'>
                            <div className='w-4/5 flex justify-left items-center'>
                                <div className='flex justify-center items-center'><img alt="" src='/assets/reviews/Mike-Johnson.png' className='w-12 h-12'/></div>
                                <p className='text-sm'>Mike Johnson</p>
                            </div>
                            <div className='w-1/5 flex items-center justify-end m-2'><img alt="" className="w-6"src='/assets/svgs/google.svg'/></div>
                        </div>
                        <div className='w-full h-[15%]'>
                            <img alt=""  className="w-24" src='/assets/reviews/stars.png'/>
                        </div>
                        <p className='w-full h-[60%] text-xs'>
                            “My kids and I had a blast at this arcade. There are games for 
                            all ages, and the atmosphere is lively and fun. We especially 
                            enjoyed the racing games and the interactive dance machines. 
                            Highly recommend for a family outing!”
                        </p>
                    </div>
                </a>
                <a className='' >
                    <div className='w-[244px] h-[244px] p-4 border-2 border-black rounded-lg bg-cover bg-no-repeat flex flex-col bg-white'>
                        <div className='w-full flex h-[25%]'>
                            <div className='w-4/5 flex justify-left items-center'>
                                <div className='flex justify-center items-center'><img alt="" src='/assets/reviews/Jonathan-Demare.png' className='w-12 h-12'/></div>
                                <p className='text-sm'>David Lee</p>
                            </div>
                            <div className='w-1/5 flex items-center justify-end m-2'><img alt="" className="w-6"src='/assets/svgs/google.svg'/></div>
                        </div>
                        <div className='w-full h-[15%]'>
                            <img alt=""  className="w-24" src='/assets/reviews/stars.png'/>
                        </div>
                        <p className='w-full h-[60%] text-xs'>
                        “As a fan of retro games, this arcade was a dream come true. 
                        They have all the classics I grew up with and more. The tokens are 
                        reasonably priced and the snack bar offers a good selection of treats. 
                        A great place to relive childhood memories!”
                        </p>
                    </div>
                </a>
            </Coverflow>
        );
    };
}

export default CoverflowCarousel;