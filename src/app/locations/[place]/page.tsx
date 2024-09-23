'use client'
import React from 'react';
import { useEffect, useState } from 'react';
import { getBaseUrl } from '@/app/utils/getBaseUrl';
import Footer from '@/app/Components/Footer';
import Link from 'next/link';

export default function LocationPage({params} : any) {
  const { place } = params;
  const [location, setLocation] = useState<any>(null);
  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await fetch('/data/locations.json'); // Fetch the file
        const locations = await response.json(); // Parse the JSON data
        const locationMatch = locations.find((loc: any) => loc.place === place); // Find the matching location
        setLocation(locationMatch); // Set the location in state
      } catch (error) {
        console.error('Error fetching the locations:', error);
      }
    };

    fetchLocations();
  }, [place]);

if (!location) {
  return <div className='bg-white'>Location not found</div>;
}
console.log(location.hours.monday);

  return (
    <div className="bg-slate-950 h-full w-screen flex flex-col ">
      <div className='w-full h-[80vh] bg-no-repeat bg-cover'  style={{ backgroundImage: `url(${getBaseUrl("/assets/images/locations/Falls-main.webp")})` }}>
        <div className='w-full h-full bg-[#00000099]'>
          <div className="h-2/5 text-neonYellow pm-sm:text-[5.5vh] pm-md:text-[8vh] lm-sm:text-[9vh] font-neon text-center flex justify-center items-center">
            {location.place.replace(/-/g, " ")} 
          </div>
          <div className='text-white text-center pm-sm:text-[2vh] pm-md:text-[2.5vh] text-[3vh] h-3/5 px-[10vw]'>{location.description}</div>
        </div>
      </div>

      <div className=' w-screen h-[50vh] flex justify-center items-center lm-sm:px-[20vw] lm-sm:py-[5vh] text-white pm-sm:flex-col'>
        <div className='w-1/2 pm-sm:w-full h-4/5 pm-sm:h-[20vh] bg-contain bg-no-repeat bg-center' style={{ backgroundImage: `url(${getBaseUrl("/assets/images/Arcade-Time-Logo.png")})` }}></div>
        <div className='w-1/2 pm-sm:w-full text-center'>
          <p className='text-[4.5vh] text-zinc-500'>Play Eat Drink Win</p>
          <p className='text-[4vh]'>RESTAURANT</p>
          <p className='text-[3.5vh] text-zinc-500'>Fun has never tasted so good!</p>
        </div>
      </div>

      <div className='bg-white w-full h-[70vh]' style={{ backgroundImage: `url(${getBaseUrl("/assets/images/locations/Falls-main.webp")})`}}>
        <div className='w-full h-full bg-[#00000079] px-[20vw] py-[10vh] flex justify-center items-center flex-col'>
          <h1 className='w-full text-center text-[7vh] text-neonYellow font-retro h-[15vh]'>Title</h1>
          <div className='w-full'>
            <div className='text-[2.5vh] pm-sm:text-[2vh] text-white'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              It has survived not only five centuries, but also the leap into electronic typesetting, 
              remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
              sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
              like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
          </div>
        </div>
      </div>

      {/* <div className='bg-white w-full h-[60vh] px-[20vw] py-[10vh]'>
        <h1 className='w-full text-center'>Amenities</h1>
        <div className='w-full'>
          <div>text</div>
          <div>img</div>
        </div>
      </div> */}

      <div className='bg-white w-full h-[25vh] flex pm-sm:justify-center pm-sm:gap-3 lm-sm:justify-around items-center lm-sm:px-[30vw] pm-sm:flex-col'>
        <p className='text-[4vh] lm-sm:w-1/2'>Groups and Camps</p>
        <div>
          <button className='text-[3vh] w-[10vw] pm-sm:w-[40vw] rounded-xl border-2'>Book Now</button>
        </div>
      </div>

      <div className='p-40 pm-sm:hidden'>
        <div className='flex justify-center items-center font-neon text-[8vh] text-neonYellow w-full h-[15vh]'>Party Time!</div>
        <div className='bg-[#080e20] w-full flex border-2 border-black rounded-3xl'>
          <img className="w-1/3 rounded-l-3xl" src={location.eventImg}/>
          <div className='w-2/3'>
            <div className='w-full px-[4vw] py-[5vh]'>
              <div className='flex flex-col gap-4 mb-[2vh]'>
                <div className='text-[3.5vh] text-neonPurple'>Arcade Time Entertainment {location.place.replace(/-/g, " ")}</div>
                <div className='text-[2.5vh] text-neonBlue'>{location.address}</div>
                <div className='text-[2.5vh] text-neonBlue'>
                  <p>{location.phonenumber}</p>
                  <p>Info@ArcadeTimeUSA.com</p>
                  <p>EventsKendall@ArcadeTimeUSA.com</p>
                </div>
              </div>
              <div className='w-full text-[4vh] text-neonPurple'>Hours</div>
              <div className='flex flex-col'>
                {location.hours.map((dayHours: any, index: number) => {
                  const day = Object.keys(dayHours)[0];
                  const hours = Object.values(dayHours)[0] as string;

                  return (
                    <div key={index} className="text-[2vh] my-[1vh] text-neonBlue">
                      <strong>{day}</strong>: {hours}
                    </div>
                  );
                })}
              </div>
              <div className='flex justify-center'>
                <Link href={location.packagelink} target="_blank" rel="noopener noreferrer" className='w-[15vw] text-[4vh] text-center rounded-2xl bg-violet-500 hover:shadow-neonPurple font-neon h-[6vh] pt-[.2vh]'>Book Party</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='px-[8vw] pm-md:px-[12vw] lm-sm:hidden'>
        <div className='flex justify-center items-center font-neon text-[8vh] text-neonYellow w-full h-[25vh]'>Party Time!</div>

        <img className="w-full rounded-2xl mb-[6vh]" src={location.eventImg}/>
        <div className='w-full'>
          <div className='flex flex-col gap-4 mb-[2vh]'>
            <div className='text-[3.5vh] text-neonPurple'>Arcade Time Entertainment The Falls Mall</div>
            <div className='text-[2.5vh] text-neonBlue'>8888 SW 136th St. #395A, Miami Fl. 33176</div>
            <div className='text-[2.5vh] text-neonBlue'>
              <p>786-250-3165</p>
              <p>Info@ArcadeTimeUSA.com</p>
              <p>EventsKendall@ArcadeTimeUSA.com</p>
            </div>
          </div>
          <div className='w-full text-[4vh] text-neonPurple'>Hours</div>
          <div className='flex flex-col'>
            {location.hours.map((dayHours: any, index: number) => {
              const day = Object.keys(dayHours)[0];
              const hours = Object.values(dayHours)[0] as string;

              return (
                <div key={index} className="text-[2vh] my-[1vh] text-neonBlue">
                  <strong>{day}</strong>: {hours}
                </div>
              );
            })}
          </div>
          <div className='flex justify-center'>
            <button className='w-[45vw] text-[4vh] rounded-2xl bg-violet-500 hover:shadow-neonPurple font-neon h-[6vh] pt-[.2vh] mt-[5vh] mb-[10vh]'>Book Party</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}