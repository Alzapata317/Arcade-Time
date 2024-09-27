'use client'

import {getBaseUrl} from "./utils/getBaseUrl";
import EmblaCarousel from "./Components/carousels/EmblaCarousel";
import FadeCarousel from "./Components/carousels/FadeCarousel";
import dynamic from 'next/dynamic';
const CoverflowCarousel = dynamic(() => import('./Components/carousels/CoverflowCarousel'), { ssr: false });
import { useState, useEffect, useContext } from "react";
import { AppContext } from "../../context/AppContext.js";
import Footer from "./Components/Footer";
import Link from "next/link";

export default function Home() {
  const { showList } = useContext(AppContext);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        if (window.scrollY > 300) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <main className={`overflow-hidden relative ${showList == true ? 'hidden' : ''}`}>
      <section id="intro" className="h-[60vh] lm-sm:h-[80vh] w-full relative">
        <div className="h-[60vh] lm-sm:h-[80vh]  w-full bg-no-repeat bg-cover items-center flex justify-center pm-sm:hidden pm-md:flex pm-xl:hidden" style={{ backgroundImage: `url(${getBaseUrl("/assets/images/Banner1.jpg")})` }}>
        <div className="bg-[#00000080] pm-sm:px-[12vw] lm-sm:pl-24 flex flex-col items-start justify-center pm-sm:items-center  lm-sm:w-[100%] h-[60vh] lm-sm:h-[80vh]">
            <img alt="" className="pm-sm:w-[45vh] lm-sm:w-[60vh]" src={getBaseUrl("/assets/images/LogoTransparent.webp")}/>
            <h1 className="text-white pm-sm:text-[2vh] pm-md:text-[2.5vh] lm-sm:text-[3vh] text-center lm-sm:w-[60vh]">Grab your blaster and defend the universe against waves of approaching aliens. Show off your skills on a massive display for everyone to see. Sit back and enjoy the ride. Arcade Time Entertainment has something for everyone!</h1>
          </div>
        </div>
        <div className="h-[60vh] lm-sm:h-[80vh]  w-full bg-no-repeat bg-cover items-center flex justify-center pm-md:hidden pm-xl:flex lm-sm:hidden" style={{ backgroundImage: `url(${getBaseUrl("/assets/images/portrait-banner.jpg")})` }}>
        <div className="bg-[#00000080] pm-sm:px-[12vw] lm-sm:pl-24 flex flex-col items-start justify-center pm-sm:items-center  lm-sm:w-[100%] h-[60vh] lm-sm:h-[80vh]">
            <img alt="" className="pm-sm:w-[45vh] lm-sm:w-[60vh]" src={getBaseUrl("/assets/images/LogoTransparent.webp")}/>
            <h1 className="text-white pm-sm:text-[2vh] pm-md:text-[2.5vh] lm-sm:text-[3vh] text-center lm-sm:w-[60vh]">Grab your blaster and defend the universe against waves of approaching aliens. Show off your skills on a massive display for everyone to see. Sit back and enjoy the ride. Arcade Time Entertainment has something for everyone!</h1>
          </div>
        </div>
      </section>
      <section id="resturant" className="pm-sm:h-[45vh] pm-md:h-[70vh] lm-sm:h-[80vh] w-full flex justify-center items-center bg-black relative">
          <FadeCarousel/>
          <div className="absolute lm-lg:top-[10vh] pm-sm:mx-[10vw] pm-md:mx-[20vw] lm-sm:left-[12vh] bg-opacity-40 bg-black lm-sm:w-[30vw] lm-md:w-[45vw] lm-lg:w-[35vw] pm-sm:h-[40vh] pm-xl:h-[35vh] lm-sm:h-[50vh] lm-lg:h-[47vh] lm-xl:h-[42vh]  pm-sm:gap-5 pm-md:gap-9 lm-sm:gap-3 lm-md:gap-9 rounded-3xl flex flex-col items-center lm-sm:p-5 lm-md:p-10 pm-sm:p-10">
            <p className="text-white font-bold pm-sm:text-[2.5vh] pm-md:text-[3vh] lm-sm:text-[4vh] lm-lg:text-[4.5vh]">“Indulge Your Senses, Every Meal, Every Time!”</p>
            <p className="text-gray-300 pm-sm:text-[1.5vh] lm-sm:text-[2vh]">Limited Time Offer: Buy One Get One Free on All Wing Orders! Come for the wings, stay for the taste. Dive into deliciousness today and double your delight!</p>
            <Link href="https://www.opentable.ca/r/arcade-time-entertainment-miami" target="_blank" rel="noopener noreferrer"><button className=" bg-gradient-to-b from-neonPurple to-indigo-700 lm-sm:w-[27vw] lm-lg:w-[20vw] pm-sm:h-[6vh] pm-md:h-[6vh] pm-sm:w-[50vw] pm-md:w-[30vw] pm-xl:w-[40vw] lm-sm:h-[8vh] lm-lg:h-[7vh] rounded-2xl pm-sm:text-[2vh] lm-sm:text-[3vh] lm-xl:mt-[2vh] font-bold">Make a Reservation!</button></Link>
          </div>
      </section>
      <section id="retro-games" className="lm-sm:h-[80vh] bg-cover relative hidden lm-sm:block" style={{ backgroundImage: `url(${getBaseUrl('/assets/images/neon-background.jpg')})` }}>
        <div className="z-[0] grid grid-cols-12 gap-4 absolute lm-sm:w-[100%] top-0">
          <div className="lm-sm:h-[20vh] lm-md:h-[22vh] "></div>
          <div className="col-span-5"></div>
          <div className=""></div>
          <h1 className="col-span-5 font-neon text-neonYellow lm-sm:text-[7vh] lm-lg:text-[10vh] text-shadow-neonYellow text-center self-end ">Retro Games</h1>
          <div className=""></div>
          <EmblaCarousel />
          <div className=""></div>
          <div className="text-white lm-sm:text-[3vh] lm-lg:text-[4vh] text-center flex lm-lg:items-center col-span-5 p-10 font-serif">Looking for some retro gaming excitement ? Check out our massive Retro arcade games and equipment. Pac-Man, Galaga, Street Fighter to name a few.</div>
        </div>
        <img alt="" className="absolute z-10 w-full h-full" src={getBaseUrl("/assets/images/Arcade-Machine.png")}/>
      </section>
      <section id="portrait-retro-games" className="pm-sm:h-[90vh] pm-md:h-[100vh] lm-sm:hidden flex flex-col">
        <div className="pm-sm:h-[90vh] pm-md:h-[100vh] bg-cover relative" style={{ backgroundImage: `url(${getBaseUrl('/assets/images/neon-background.jpg')})`}}>
          <div className="w-full h-full bg-[#00000060] flex flex-col justify-start items-center pt-[5vh]">
            <h1 className="font-neon text-neonYellow pm-sm:text-[6vh] lm-sm:text-[10vh] text-shadow-neonYellow text-center ">Retro Games</h1>
            <div className="pm-sm:px-[14vw] text-white pm-sm:text-[2vh] lm-sm:text-[4vh] text-center flex items-center col-span-5 py-[1vh] font-serif">Looking for some retro gaming excitement ? Check out our massive Retro arcade games and equipment. Pac-Man, Galaga, Street Fighter to name a few.</div>
          </div>
          <div className="z-[0] grid grid-cols-6 gap-4 absolute w-full top-0">
            <div className=" pm-sm:h-[50vh] pm-md:h-[49vh]"></div>
            <div className=""></div>
            <div className=""></div>
            <div className=""></div>
            <div className=""></div>
            <div className=""></div>
            <div className=" pm-sm:h-[28vh] pm-md:h-[35vh]"></div>
            <EmblaCarousel />
            <div className=""></div>
            <div className=""></div>
            <div className=""></div>
            <div className=""></div>
          </div>
          <img alt="" className="absolute bottom-0 left-0 w-full pm-sm:h-[55vh] pm-md:h-[70vh] z-10" src={getBaseUrl("/assets/images/arcade-machine2.png")}/>
        </div>
      </section>
      <section id="other-games" className="lm-sm:h-[150vh] flex flex-col hidden lm-sm:block">
        <div className="h-1/3 w-full flex">
          <div className="w-2/5 h-full bg-cover flex flex-col justify-center items-center" style={{ backgroundImage: `url(${getBaseUrl('/assets/images/neon-carpet1.png')})`}}>
            <h1 className="bg-[#00000099] font-neon text-neonGreen text-shadow-neonGreen lm-sm:text-[6vh]  h-2/5 w-full flex flex-col items-center justify-center">Axe Throwing</h1>
            <p className="bg-[#00000099] text-neonBlue h-3/5 w-full flex flex-col items-center text-justify px-20 lm-sm:text-[1.65vh] lm-lg:text-[2vh] font-bold">
              Unleash your inner warrior and experience the thrill of axe throwing at our state-of-the-art facility. 
              Perfect for beginners and seasoned throwers alike!
              Gather your friends and challenge them to the ultimate test of skill and precision with our exciting axe throwing adventures 
              - book your session today!
            </p>
          </div>
          <img alt="" src={getBaseUrl("/assets/images/axe-throwing.jpg")} className="w-3/5 h-full"/>
        </div>
        <div className="bg-white h-1/3 w-full flex">
          <img alt="" src={getBaseUrl("/assets/images/darts.jpg")} className="w-3/5 h-full"/>
          <div className="w-2/5 h-full bg-cover flex flex-col justify-center items-center" style={{ backgroundImage: `url(${getBaseUrl('/assets/images/neon-carpet1.png')})` }}>
            <h1 className="bg-[#00000099] font-neon text-neonGreen text-shadow-neonGreen lm-sm:text-[6vh]  h-2/5 w-full flex flex-col items-center justify-center">AR Darts</h1>
            <p className="bg-[#00000099] text-neonBlue h-3/5 w-full flex flex-col items-center text-center px-20 lm-sm:text-[1.65vh] lm-lg:text-[2vh] font-bold">
              Step into the future of gaming with our augmented reality darts, where traditional gameplay meets 
              cutting-edge technology for an immersive and interactive experience like no other. Challenge your 
              friends to high-tech dart matches that bring dynamic visuals and real-time feedback to every throw, 
              making each game more exciting and engaging.
            </p>
          </div>
        </div>
        <div className="h-1/3 w-full flex">
          <div className="w-2/5 h-full bg-cover flex flex-col justify-center items-center" style={{ backgroundImage: `url(${getBaseUrl('/assets/images/neon-carpet1.png')})` }}>
            <h1 className="bg-[#00000099] font-neon text-neonGreen text-shadow-neonGreen lm-sm:text-[6vh]  h-2/5 w-full flex flex-col items-center justify-center">Bowling</h1>
            <p className="bg-[#00000099] text-neonBlue h-3/5 w-full flex flex-col items-center text-center px-20 lm-sm:text-[1.65vh] lm-lg:text-[2vh] font-bold">
              Here at Arcade Time Entertainment Bowling has been revitalized. Come in and test your skills on our state of 
              the art regulation size bowling lanes. Challenge your family & friends. See if you have what it takes
              to come out on top!
            </p>
          </div>
          <img alt="" src={getBaseUrl("/assets/images/bowling.png")} className="w-3/5 h-full"/>
        </div>
      </section>
      <section id="portrait-other-games" className="pm-sm:h-[170vh] pm-md:h-[210vh] lm-sm:h-[150vh] flex flex-col lm-sm:hidden">
        <div className="h-full w-full flex flex-col">
          <div className="w-full pm-sm:h-3/5 pm-md:h-1/2 bg-cover flex flex-col justify-center items-center" style={{ backgroundImage: `url(${getBaseUrl('/assets/images/neon-carpet1.png')})`}}>
            <h1 className="bg-[#00000099] font-neon text-neonGreen text-shadow-neonGreen pm-sm:text-[5vh] pm-md:text-[6vh]  h-2/5 w-full flex flex-col items-center justify-center">Axe Throwing</h1>
            <p className="bg-[#00000099] text-neonBlue h-3/5 w-full flex flex-col items-center text-justify pm-sm:px-10 pm-md:px-20 pm-sm:text-[1.5vh] pm-md:text-[1.75vh] font-bold">
              Unleash your inner warrior and experience the thrill of axe throwing at our state-of-the-art facility. 
              Perfect for beginners and seasoned throwers alike!
              Gather your friends and challenge them to the ultimate test of skill and precision with our exciting axe throwing adventures 
              - book your session today!
            </p>
          </div>
          <img alt="" src={getBaseUrl("/assets/images/axe-throwing.jpg")} className="w-full pm-sm:h-2/5 pm-md:h-1/2"/>
        </div>
        <div className="bg-white h-full w-full flex flex-col">
          <div className="w-full pm-sm:h-3/5 pm-md:h-1/2 bg-cover flex flex-col justify-center items-center" style={{ backgroundImage: `url(${getBaseUrl('/assets/images/neon-carpet1.png')})` }}>
            <h1 className="bg-[#00000099] font-neon text-neonGreen text-shadow-neonGreen pm-sm:text-[5vh] pm-md:text-[6vh]  h-2/5 w-full flex flex-col items-center justify-center">AR Darts</h1>
            <p className="bg-[#00000099] text-neonBlue h-3/5 w-full flex flex-col items-center text-center pm-sm:px-10 pm-md:px-20 pm-sm:text-[1.5vh] pm-md:text-[1.75vh] font-bold">
              Step into the future of gaming with our augmented reality darts, where traditional gameplay meets 
              cutting-edge technology for an immersive and interactive experience like no other. Challenge your 
              friends to high-tech dart matches that bring dynamic visuals and real-time feedback to every throw, 
              making each game more exciting and engaging.
            </p>
          </div>
          <img alt="" src={getBaseUrl("/assets/images/darts.jpg")} className="w-full pm-sm:h-2/5 pm-md:h-1/2"/>
        </div>
        <div className="h-full w-full flex flex-col">
          <div className="w-full pm-sm:h-3/5 pm-md:h-1/2 bg-cover flex flex-col justify-center items-center" style={{ backgroundImage: `url(${getBaseUrl('/assets/images/neon-carpet1.png')})` }}>
            <h1 className="bg-[#00000099] font-neon text-neonGreen text-shadow-neonGreen pm-sm:text-[5vh] pm-md:text-[6vh]  h-2/5 w-full flex flex-col items-center justify-center">Bowling</h1>
            <p className="bg-[#00000099] text-neonBlue h-3/5 w-full flex flex-col items-center text-center pm-sm:px-10 pm-md:px-20 pm-sm:text-[1.5vh] pm-md:text-[1.75vh] font-bold">
              Here at Arcade Time Entertainment Bowling has been revitalized. Come in and test your skills on our state of 
              the art regulation size bowling lanes. Challenge your family & friends. See if you have what it takes
              to come out on top!
            </p>
          </div>
          <img alt="" src={getBaseUrl("/assets/images/bowling.png")} className="w-full pm-sm:h-2/5 pm-md:h-1/2"/>
        </div>
      </section>

      {/* <section className="pm-sm:hidden pm-md:flex lm-sm:hidden lm-md:flex bg-slate-950 flex-col">
        <div className="w-full pm-md:h-[8vh] lm-sm:h-[15vh] flex justify-center  relative">
          <a 
            href="https://www.google.com/search?q=arcade+time+entertainment&client=safari&sca_esv=063c593922e84ff5&rls=en&ei=gS-CZuDLLb2WwbkP_rOw-AM&ved=0ahUKEwigkJbL_4SHAxU9SzABHf4ZDD8Q4dUDCBA&uact=5&oq=arcade+time+entertainment&gs_lp=Egxnd3Mtd2l6LXNlcnAiGWFyY2FkZSB0aW1lIGVudGVydGFpbm1lbnQyERAuGIAEGJECGMcBGIoFGK8BMgUQABiABDIFEAAYgAQyBRAAGIAEMgsQLhiABBjHARivATIFEAAYgAQyBRAAGIAEMiAQLhiABBiRAhjHARiKBRivARiXBRjcBBjeBBjgBNgBAUjXH1DvAlinHnACeAGQAQCYAYIBoAHDCqoBBDEzLjK4AQPIAQD4AQGYAhGgAusLwgIKEAAYsAMY1gQYR8ICCBAuGIAEGOUEwgIKEAAYgAQYQxiKBcICGhAuGIAEGMcBGK8BGJcFGNwEGN4EGOAE2AEBwgIQEC4YgAQYQxjHARiKBRivAZgDAIgGAZAGB7oGBggBEAEYFJIHBDE0LjOgB76uAQ&sclient=gws-wiz-serp#" 
            className="pm-sm:w-[33vw] pm-sm:h-[5vh] pm-xl:w-[43vw] lm-sm:w-[30vw] lm-lg:w-[23vw] lm-sm:h-[7vh] font-neon pm-sm:text-[3vh] lm-sm:text-[5vh] text-neonYellow pm-sm:pt-[.75vh] lm-sm:pt-[1vh] absolute pm-sm:top-[7vh] lm-sm:top-[10vh] justify-center items-center flex hover:shadow-neonYellow rounded-lg z-10 border-neonYellow border-2">
              Give us a Review!
          </a>
        </div>
        <CoverflowCarousel/>
      </section> */}

      <Footer />
      {/* {showButton && (
        <img
          src={getBaseUrl("/assets/images/ship.png")}
          alt="Back to Top"
          className="fixed bottom-[4vh] right-[2vw] p-3 pm-sm:h-[8vh] lm-sm:h-[13vh] pm-sm:h-[10vh] pm-xl:h-[5vh] lm-md:h-[8vh] lm-lg:h-[7vh]  z-40"
          onClick={scrollToTop}
        />
      )} */}
    </main>
  );
}
