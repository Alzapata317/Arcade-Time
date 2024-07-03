'use client'
import CoverflowCarousel from "./Components/CoverflowCarousel";
import EmblaCarousel from "./Components/EmblaCarousel";
import CustomRadioButton from './Components/CustomRadioButton';
import ScrollBarInput from './Components/ScrollBarInput';
import TimeButton from './Components/TimeButton';
import PackageButton from './Components/PackageButton';
import FadeCarousel from "./Components/FadeCarousel";
import Image from "next/image";

import { useState, useEffect } from "react";

export default function Home() {
  const [showButton, setShowButton] = useState(false);
  const [showEventPlanner, setShowEventPlanner] = useState(false);
  const [formData, setFormData] = useState({ customOption: '', number: 1, timeOption: '', packageOption: ''});

  useEffect(() => {
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
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const options = [
    { value: 'JacksonVille', label: 'Option 1' },
    { value: 'Wellington', label: 'Option 2' },
    { value: 'The Falls Mall Miami', label: 'Option 3' },
    { value: 'Coral Square Mall', label: 'Option 2' },
  ];

  const times = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
  ];
  const packages = [
    { value: '40', label: 'Option 1' },
    { value: '60', infinite: 'Unlimited Playtime', label: 'Option 2' },
  ];
  const handleRadioChange = (value: any) => {
    setFormData({ ...formData, customOption: value });
  };

  const handleTimeChange = (value: any) => {
    setFormData({ ...formData, timeOption: value });
  };

  const handlePackageChange = (value: any) => {
    setFormData({ ...formData, timeOption: value });
  };

  const handleNumberChange = (value: any) => {
    setFormData({ ...formData, number: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };
  return (
    <main className="bg-black">

      <nav className="shadow-neonPink h-48 flex fixed w-screen top-0 bg-black z-20">
        {showEventPlanner && (
          <div className="w-[450px] h-screen rounded-r-lg rounded-b-lg bg-slate-950 absolute top-0 right-0 z-30 p-8 pt-3">
            <form className="pt-8 pl-2" onSubmit={handleSubmit}>
              <div className="w-full flex justify-between">
                <h1 className="w-4/5 font-neon text-neonBlue text-4xl">Pick Location</h1>
                <button className="w-8 h-8 font-neon text-neonBlue text-3xl border-neonBlue border-2 rounded-md text-center" onClick={() => setShowEventPlanner((prev) => !prev)}>X</button>
              </div>
              <CustomRadioButton options={options} name="customOption" onChange={handleRadioChange} />
              
              <h1 className="w-full font-neon text-neonBlue text-4xl">Party Size</h1>
              <div className="w-full h-24 flex flex-col m-4">
                <ScrollBarInput name="number" min={1} max={10} onChange={handleNumberChange} />
              </div>

              <h1 className="w-full font-neon text-neonBlue text-4xl">Length of Time</h1>
              <TimeButton options={times} name="timeOption" onChange={handleTimeChange} />
              
              <h1 className="w-full font-neon text-neonBlue text-4xl">Party Package</h1>
              <PackageButton options={packages} name="packageOption" onChange={handlePackageChange} />
              <div className="w-full h-24 flex flex-col justify-center items-center mt-6">
                <button className="font-neon text-neonPurple hover:text-neonYellow hover:border-neonYellow text-3xl border-2 border-neonPurple p-2 pt-3 rounded-xl" type="submit">Check Availability</button>
              </div>
            </form>
          </div>
        )}
        <div className="w-1/2 relative flex justify-end items-center bg-black">
          <Image alt="" className="w-[448px] h-[80px] absolute top-0 left-0" src="/assets/images/Left-Nav.png"/>
          <Image alt="" className="w-[600px] h-[160px] z-10" src="/assets/images/Arcade-Time-Logo3.webp"/>
        </div>
        <div className="w-1/2 px-12 flex flex-col justify-evenly items-center">
          <div className="w-full flex justify-center items-center relative">
            <button className="flex justify-evenly w-48 h-12 text-2xl text-center items-center p-1 text-neonBlue border-2 border-neonBlue rounded-lg mx-10 hover:shadow-neonBlue">
              <Image alt="" className="h-8" src="/assets/images/Reservation.png"/>
              <h1 className="font-neon text-center self-end">Reserve</h1>
            </button>
            <button className="w-40 h-12 mx-10 text-3xl pt-[7px] text-black font-neon bg-violet-500 rounded-lg border-black hover:shadow-neonPurple" onClick={() => setShowEventPlanner((prev) => !prev)}>Book Event</button>

          </div>
          <section className="text-xl w-full flex justify-evenly z-10">
            <h1 className="text-3xl font-neon text-neonBlue hover:underline underline-offset-8">Eat & Drink</h1>
            <h1 className="text-3xl font-neon text-neonBlue hover:underline underline-offset-8">Play</h1>
            <h1 className="text-3xl font-neon text-neonBlue hover:underline underline-offset-8">Gallery</h1>
            <h1 className="text-3xl font-neon text-neonBlue hover:underline underline-offset-8">Locations</h1>
          </section>
          <Image alt="" className="w-[448px] h-[80px] absolute bottom-0 -right-2" src="/assets/images/Right-Nav.png"/>
        </div>
      </nav>
      <section id="intro" className="h-[760px] w-full relative mt-[193px]">
        <div className="h-[760px] w-full bg-no-repeat bg-cover items-center flex justify-center" style={{ backgroundImage: 'url(/assets/images/Banner1.jpg)' }}>
        <div className="bg-[#00000080] pl-24 flex flex-col items-start justify-center  w-[100%] h-[760px]">
            <Image alt="" className="w-[650px]" src="/assets/images/LogoTransparent.webp"/>
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
      <section id="retro-games" className="h-[400px] md:h-[800px] bg-cover relative" style={{ backgroundImage: 'url(/assets/images/neon-background.jpg)' }}>
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
        <Image alt="" className="absolute w-screen h-full z-10" src="/assets/images/arcade-machine2.png"/>
      </section>
      <section id="other-games" className="h-[1500px] flex flex-col">
        <div className="h-1/3 w-full flex">
          <div className="w-2/5 h-full bg-cover flex flex-col justify-center items-center" style={{ backgroundImage: 'url(/assets/images/neon-carpet1.png)' }}>
            <h1 className="bg-[#00000099] font-neon text-neonGreen text-shadow-neonGreen text-6xl  h-2/5 w-full flex flex-col items-center justify-center">Axe Throwing</h1>
            <p className="bg-[#00000099] text-neonBlue h-3/5 w-full flex flex-col items-center text-justify px-20 text-xl font-bold">
              Unleash your inner warrior and experience the thrill of axe throwing at our state-of-the-art facility. 
              Perfect for beginners and seasoned throwers alike!
              Gather your friends and challenge them to the ultimate test of skill and precision with our exciting axe throwing adventures 
              - book your session today!
            </p>
          </div>
          <Image alt="" src="/assets/images/axe-throwing.jpg" className="w-3/5 h-full"/>
        </div>
        <div className="bg-white h-1/3 w-full flex">
          <Image alt="" src="/assets/images/darts.jpg" className="w-3/5 h-full"/>
          <div className="w-2/5 h-full bg-cover flex flex-col justify-center items-center" style={{ backgroundImage: 'url(/assets/images/neon-carpet1.png)' }}>
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
          <div className="w-2/5 h-full bg-cover flex flex-col justify-center items-center" style={{ backgroundImage: 'url(/assets/images/neon-carpet1.png)' }}>
            <h1 className="bg-[#00000099] font-neon text-neonGreen text-shadow-neonGreen text-6xl  h-2/5 w-full flex flex-col items-center justify-center">Bowling</h1>
            <p className="bg-[#00000099] text-neonBlue h-3/5 w-full flex flex-col items-center text-center px-20 text-xl font-bold">
              Here at Arcade Time Entertainment Bowling has been revitalized. Come in and test your skills on our state of 
              the art regulation size bowling lanes. Challenge your family & friends. See if you have what it takes
              to come out on top!
            </p>
          </div>
          <Image alt="" src="/assets/images/bowling.png" className="w-3/5 h-full"/>
        </div>
      </section>
      <section className="bg-black h-[780px] flex flex-col">
        <div className="w-full h-[100px] flex justify-center  relative">
          <a href="https://www.google.com/search?q=arcade+time+entertainment&client=safari&sca_esv=063c593922e84ff5&rls=en&ei=gS-CZuDLLb2WwbkP_rOw-AM&ved=0ahUKEwigkJbL_4SHAxU9SzABHf4ZDD8Q4dUDCBA&uact=5&oq=arcade+time+entertainment&gs_lp=Egxnd3Mtd2l6LXNlcnAiGWFyY2FkZSB0aW1lIGVudGVydGFpbm1lbnQyERAuGIAEGJECGMcBGIoFGK8BMgUQABiABDIFEAAYgAQyBRAAGIAEMgsQLhiABBjHARivATIFEAAYgAQyBRAAGIAEMiAQLhiABBiRAhjHARiKBRivARiXBRjcBBjeBBjgBNgBAUjXH1DvAlinHnACeAGQAQCYAYIBoAHDCqoBBDEzLjK4AQPIAQD4AQGYAhGgAusLwgIKEAAYsAMY1gQYR8ICCBAuGIAEGOUEwgIKEAAYgAQYQxiKBcICGhAuGIAEGMcBGK8BGJcFGNwEGN4EGOAE2AEBwgIQEC4YgAQYQxjHARiKBRivAZgDAIgGAZAGB7oGBggBEAEYFJIHBDE0LjOgB76uAQ&sclient=gws-wiz-serp#" className="w-[355px] h-[65px] font-neon text-5xl text-neonYellow pt-2 absolute top-20 justify-center items-center flex hover:shadow-neonYellow rounded-lg z-10 border-neonYellow border-2">Give us a Review!</a>
        </div>
        <CoverflowCarousel/>
      </section>
      {showButton && (
        <Image
          src="/assets/images/ship.png"
          alt="Back to Top"
          className="fixed bottom-10 right-10 p-3 w-16 z-40"
          onClick={scrollToTop}
        />
      )}
      <footer className="h-[225px] flex flex-col bg-gradient-to-t from-slate-800 to-black">
        <div className="w-full h-[80%] flex">
          <div className="w-2/5 justify-center items-center flex">
            <Image alt="" className="w-48" src="/assets/images/Arcade-Time-Logo.png"/>
          </div>
          <div className="w-3/5 flex text-white">
            <div className="flex flex-col w-1/2 h-full justify-center">
              <p className="w-full text-center text-neonBlue font-neon text-3xl m-4">Follow Us!</p>
              <div className="w-full flex justify-around">
                <a href="https://www.instagram.com/arcadetimeusa/"><Image alt="" src="/assets/svgs/instagram.svg"/></a>
                <a href="https://www.facebook.com/arcadetimeusa"><Image src="/assets/svgs/facebook.svg" alt="FaceBook Logo" /></a>
                <a href="https://www.x.com/arcadetimeusa"><Image alt="" src="/assets/svgs/x.svg"/></a>
                <a href="https://www.youtube.com//channel/UCJs4X_bUgUE5iNtH-GvLKNg"><Image alt="" src="/assets/svgs/youtube.svg"/></a>
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
