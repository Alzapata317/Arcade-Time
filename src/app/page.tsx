'use client'

import {getImageUrl} from "./utils/getImageUrl";
import EmblaCarousel from "./Components/EmblaCarousel";
import FadeCarousel from "./Components/FadeCarousel";
import dynamic from 'next/dynamic';
const CoverflowCarousel = dynamic(() => import('./Components/CoverflowCarousel'), { ssr: false });
import { useState, useEffect } from "react";

export default function Home() {

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
    <main>
      <section id="intro" className="h-[760px] w-full relative">
        <div className="h-[760px] w-full bg-no-repeat bg-cover items-center flex justify-center" style={{ backgroundImage: `url(${getImageUrl("/assets/images/Banner1.jpg")})` }}>
        <div className="bg-[#00000080] pl-24 flex flex-col items-start justify-center  w-[100%] h-[760px]">
            <img alt="" className="w-[650px]" src={getImageUrl("/assets/images/LogoTransparent.webp")}/>
            <h1 className="text-white text-3xl text-center w-[700px]">Grab your blaster and defend the universe against waves of approaching aliens. Show off your skills on a massive display for everyone to see. Sit back and enjoy the ride. Arcade Time Entertainment has something for everyone!</h1>
          </div>
        </div>
      </section>
      <section id="resturant" className="h-[900px] w-full flex justify-center items-center bg-black relative">
          <FadeCarousel/>
          <div className="absolute top-32 left-32 bg-opacity-40 bg-black w-[600px] h-[470px] gap-9 rounded-3xl flex flex-col items-center p-10">
            <h1 className="text-white font-bold text-5xl">“Indulge Your Senses, Every Meal, Every Time!”</h1>
            <p className="text-gray-300 text-xl">Limited Time Offer: Buy One Get One Free on All Wing Orders! Come for the wings, stay for the taste. Dive into deliciousness today and double your delight!</p>
            <button className=" bg-gradient-to-b from-neonPurple to-indigo-700 w-72 h-16 rounded-3xl text-2xl font-bold">Make a Reservation!</button>
          </div>
      </section>
      <section id="retro-games" className="h-[400px] md:h-[800px] bg-cover relative" style={{ backgroundImage: `url(${getImageUrl('/assets/images/neon-background.jpg')})` }}>
        <div className="z-0 grid grid-cols-12 gap-4 absolute w-[100%] top-0">
          <div className="h-[230px]"></div>
          <div className="col-span-5 "></div>
          <div className=""></div>
          <h1 className="col-span-5 font-neon text-neonYellow text-8xl text-shadow-neonYellow text-center self-end ">Retro Games</h1>
          <div className=""></div>
          <EmblaCarousel />
          <div className=""></div>
          <div className="text-white text-4xl text-center flex items-center col-span-5 p-10 font-serif">Looking for some retro gaming excitement ? Check out our massive Retro arcade games and equipment. Pac-Man, Galaga, Street Fighter to name a few.</div>
        </div>
        <img alt="" className="absolute w-screen h-full z-10" src={getImageUrl("/assets/images/arcade-machine2.png")}/>
      </section>
      <section id="other-games" className="h-[1500px] flex flex-col">
        <div className="h-1/3 w-full flex">
          <div className="w-2/5 h-full bg-cover flex flex-col justify-center items-center" style={{ backgroundImage: `url(${getImageUrl('/assets/images/neon-carpet1.png')})`}}>
            <h1 className="bg-[#00000099] font-neon text-neonGreen text-shadow-neonGreen text-6xl  h-2/5 w-full flex flex-col items-center justify-center">Axe Throwing</h1>
            <p className="bg-[#00000099] text-neonBlue h-3/5 w-full flex flex-col items-center text-justify px-20 text-xl font-bold">
              Unleash your inner warrior and experience the thrill of axe throwing at our state-of-the-art facility. 
              Perfect for beginners and seasoned throwers alike!
              Gather your friends and challenge them to the ultimate test of skill and precision with our exciting axe throwing adventures 
              - book your session today!
            </p>
          </div>
          <img alt="" src={getImageUrl("/assets/images/axe-throwing.jpg")} className="w-3/5 h-full"/>
        </div>
        <div className="bg-white h-1/3 w-full flex">
          <img alt="" src={getImageUrl("/assets/images/darts.jpg")} className="w-3/5 h-full"/>
          <div className="w-2/5 h-full bg-cover flex flex-col justify-center items-center" style={{ backgroundImage: `url(${getImageUrl('/assets/images/neon-carpet1.png')})` }}>
            <h1 className="bg-[#00000099] font-neon text-neonGreen text-shadow-neonGreen text-6xl  h-2/5 w-full flex flex-col items-center justify-center">AR Darts</h1>
            <p className="bg-[#00000099] text-neonBlue h-3/5 w-full flex flex-col items-center text-center px-20 text-xl font-bold">
              Step into the future of gaming with our augmented reality darts, where traditional gameplay meets 
              cutting-edge technology for an immersive and interactive experience like no other. Challenge your 
              friends to high-tech dart matches that bring dynamic visuals and real-time feedback to every throw, 
              making each game more exciting and engaging.
            </p>
          </div>
        </div>
        <div className="h-1/3 w-full flex">
          <div className="w-2/5 h-full bg-cover flex flex-col justify-center items-center" style={{ backgroundImage: `url(${getImageUrl('/assets/images/neon-carpet1.png')})` }}>
            <h1 className="bg-[#00000099] font-neon text-neonGreen text-shadow-neonGreen text-6xl  h-2/5 w-full flex flex-col items-center justify-center">Bowling</h1>
            <p className="bg-[#00000099] text-neonBlue h-3/5 w-full flex flex-col items-center text-center px-20 text-xl font-bold">
              Here at Arcade Time Entertainment Bowling has been revitalized. Come in and test your skills on our state of 
              the art regulation size bowling lanes. Challenge your family & friends. See if you have what it takes
              to come out on top!
            </p>
          </div>
          <img alt="" src={getImageUrl("/assets/images/bowling.png")} className="w-3/5 h-full"/>
        </div>
      </section>
      <section className="bg-black h-[780px] flex flex-col">
        <div className="w-full h-[100px] flex justify-center  relative">
          <a href="https://www.google.com/search?q=arcade+time+entertainment&client=safari&sca_esv=063c593922e84ff5&rls=en&ei=gS-CZuDLLb2WwbkP_rOw-AM&ved=0ahUKEwigkJbL_4SHAxU9SzABHf4ZDD8Q4dUDCBA&uact=5&oq=arcade+time+entertainment&gs_lp=Egxnd3Mtd2l6LXNlcnAiGWFyY2FkZSB0aW1lIGVudGVydGFpbm1lbnQyERAuGIAEGJECGMcBGIoFGK8BMgUQABiABDIFEAAYgAQyBRAAGIAEMgsQLhiABBjHARivATIFEAAYgAQyBRAAGIAEMiAQLhiABBiRAhjHARiKBRivARiXBRjcBBjeBBjgBNgBAUjXH1DvAlinHnACeAGQAQCYAYIBoAHDCqoBBDEzLjK4AQPIAQD4AQGYAhGgAusLwgIKEAAYsAMY1gQYR8ICCBAuGIAEGOUEwgIKEAAYgAQYQxiKBcICGhAuGIAEGMcBGK8BGJcFGNwEGN4EGOAE2AEBwgIQEC4YgAQYQxjHARiKBRivAZgDAIgGAZAGB7oGBggBEAEYFJIHBDE0LjOgB76uAQ&sclient=gws-wiz-serp#" className="w-[355px] h-[65px] font-neon text-5xl text-neonYellow pt-2 absolute top-20 justify-center items-center flex hover:shadow-neonYellow rounded-lg z-10 border-neonYellow border-2">Give us a Review!</a>
        </div>
        <CoverflowCarousel/>
      </section>
      {showButton && (
        <img
          src={getImageUrl("/assets/images/ship.png")}
          alt="Back to Top"
          className="fixed bottom-10 right-10 p-3 w-16 z-40"
          onClick={scrollToTop}
        />
      )}
      <footer className="h-[225px] flex flex-col bg-gradient-to-t from-slate-800 to-black">
        <div className="w-full h-[80%] flex">
          <div className="w-2/5 justify-center items-center flex">
            <img alt="" className="w-48" src={getImageUrl("/assets/images/Arcade-Time-Logo.png")}/>
          </div>
          <div className="w-3/5 flex text-white">
            <div className="flex flex-col w-1/2 h-full justify-center">
              <p className="w-full text-center text-neonBlue font-neon text-3xl m-4">Follow Us!</p>
              <div className="w-full flex justify-around">
                <a href="https://www.instagram.com/arcadetimeusa/"><img alt="" src={getImageUrl("/assets/svgs/instagram.svg")}/></a>
                <a href="https://www.facebook.com/arcadetimeusa"><img src={getImageUrl("/assets/svgs/facebook.svg")} alt="FaceBook Logo"/></a>
                <a href="https://www.x.com/arcadetimeusa"><img alt="" src={getImageUrl("/assets/svgs/x.svg")}/></a>
                <a href="https://www.youtube.com//channel/UCJs4X_bUgUE5iNtH-GvLKNg"><img alt="" src={getImageUrl("/assets/svgs/youtube.svg")}/></a>
              </div>
            </div>
            <div className="w-1/2 flex justify-center">
              <div className="w-[33%] h-full flex flex-col pt-10">
                <p className="my-1">Jacksonville</p>
                <p className="my-1">Wellington</p>
                <p className="my-1">The Falls Mall Miami</p>
                <p className="my-1">Coral Square Mall</p>
              </div>
              <div className="w-[20%] flex flex-col pt-10">
                <p className="my-1">Contact Us</p>
                <p className="my-1">Careers</p>
              </div>
              <div className="w-[46%] flex flex-col items-center pt-11">
                <button className="bg-gradient-to-t from-purple-950 to-indigo-950 text-center w-48 h-14 rounded-full">Join our Newsletter</button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[20%] pl-24 text-white  ">
          Copyright © 2024 Arcade Time USA LLC - All Rights Reserved
        </div>
      </footer>
      
    </main>
  );
}
