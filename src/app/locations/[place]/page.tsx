import React from 'react';
import { Metadata } from 'next';
import Footer from '../../Components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { getBaseUrl } from '../../utils/getBaseUrl';
import locations from '../../../../public/data/locations.json'; // Ensure this path is correct

// Define TypeScript types for better type safety
type Hours = 
  | { Monday: string }
  | { Tuesday: string }
  | { Wednesday: string }
  | { Thursday: string }
  | { Friday: string }
  | { Saturday: string }
  | { Sunday: string };

interface Location {
  place: string;
  description: string;
  image: string;
  amenities: string;
  description2: string;
  grouplink: string;
  eventImg: string;
  address: string;
  phonenumber: string;
  packagelink: string;
  hours: Hours[];
}

interface PageProps {
  params: {
    place: string;
  };
}

// Generate static paths for each location
export async function generateStaticParams() {
  return locations.map((location: Location) => ({
    place: location.place,
  }));
}

// Optional: Define metadata for SEO
export const generateMetadata = ({ params }: PageProps): Metadata => {
  const location = locations.find((loc) => loc.place === params.place);
  return {
    title: location ? `${location.place.replace(/-/g, ' ')} | Your Site Name` : 'Location Not Found',
    description: location ? location.description : 'Location not found',
  };
};

const LocationPage: React.FC<PageProps> = ({ params }) => {
  const { place } = params;
  const location = locations.find((loc) => loc.place === place);

  if (!location) {
    return <div className='bg-white text-center py-20'>Location not found</div>;
  }

  return (
    <div className="bg-slate-950 h-full w-screen flex flex-col ">
      <div className="relative w-full h-[80vh]">
        <Image
          src={location.image}
          layout="fill"
          objectFit="cover"  // This behaves like `background-size: cover`
          alt="background"
        />
        
        <div className="absolute top-0 left-0 w-full h-full text-[8vh] flex flex-col justify-center items-center bg-[#00000089] pt-[5vh]">
          <div className="h-2/5 text-neonYellow pm-sm:text-[5.5vh] pm-md:text-[8vh] lm-sm:text-[9vh] font-neon text-center flex justify-center items-center">
            {location.place.replace(/-/g, " ")} 
          </div>
          <div className='text-white text-center pm-sm:text-[2vh] pm-md:text-[2.5vh] text-[3vh] h-3/5 px-[10vw]'>{location.description}</div>
        </div>
      </div>

      {/* <div className='w-full h-[80vh] bg-no-repeat bg-cover bg-local'  style={{ backgroundImage: `url(${getBaseUrl(location.image)})` }}>
        <div className='w-full h-full bg-[#00000099]'>
          <div className="h-2/5 text-neonYellow pm-sm:text-[5.5vh] pm-md:text-[8vh] lm-sm:text-[9vh] font-neon text-center flex justify-center items-center">
            {location.place.replace(/-/g, " ")} 
          </div>
          <div className='text-white text-center h-[120vh] pm-sm:text-[2vh] pm-md:text-[2.5vh] text-[3vh] h-3/5 px-[10vw]'>{location.description}</div>
        </div>
      </div> */}

      <div className=' w-screen h-[50vh] flex justify-center items-center lm-sm:px-[20vw] lm-sm:py-[5vh] text-white pm-sm:flex-col'>
        <div className='w-1/2 pm-sm:w-full h-4/5 pm-sm:h-[20vh] bg-contain bg-no-repeat bg-center' style={{ backgroundImage: `url(${getBaseUrl("/assets/images/Arcade-Time-Logo.png")})` }}></div>
        <div className='w-1/2 pm-sm:w-full text-center'>
          <p className='text-[4.5vh] text-zinc-500'>Play Eat Drink Win</p>
          <p className='text-[4vh]'>RESTAURANT</p>
          <p className='text-[3.5vh] text-zinc-500'>Fun has never tasted so good!</p>
        </div>
      </div>

      {/* <div className='bg-white w-full h-[70vh]' style={{ backgroundImage: `url(${getBaseUrl("/assets/images/locations/Falls-main.webp")})`}}>
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
      </div> */}

      <div className='w-full h-auto px-[8vw] py-[10vh] mb-[10vh]'>
        <h1 className='w-full text-center font-neon text-[8vh] text-neonYellow h-[15vh]'>Play!</h1>
        <div className='bg-slate-900 w-full flex pm-sm:flex-col-reverse justify-between h-auto rounded-2xl'>
          <div className='lm-sm:w-2/5 text-white pm-sm:text-[2vh] pm-md:text-[2.25vh] lm-sm:text-[2.5vh] flex justify-center items-center px-[3vw] pm-sm:px-[5vw] pm-sm:pb-[5vh]'>              
            {location.description2}
          </div>
          <Image className='lm-sm:w-3/5 rounded-r-2xl pm-sm:rounded-t-2xl pm-sm:mb-[5vh]' src={location.amenities} alt='vr-gaming' width={1920} height={1080}/>
        </div>
      </div>
      
      <div className='bg-white w-full h-[35vh] pm-sm:h-[20vh] pm-md:h-[25vh] flex pm-sm:justify-center pm-sm:gap-3 lm-sm:justify-around items-center lm-sm:px-[20vw] pm-sm:flex-col bg-gradient-to-r from-[#f7253a] from-20% via-[#f725df] via-40% to-[#4682ff] to-90% items-center'>
        <p className='text-[7vh] pm-sm:text-[4vh] pm-md:text-[5vh] font-neon lm-sm:w-3/4 flex justify-center lm-sm:h-[10vh] pt-[.5vh]'>Groups and Camps</p>
        <div className='flex justify-center items-center lm-sm:h-[10vh]'>
          <Link  href={`${location.grouplink == '' ? `tel:${location.phonenumber}` : location.grouplink}`} target="_blank" rel="noopener noreferrer">
            <button className='text-[5vh] pm-sm:text-[3vh] pm-md:text-[4vh] w-[15vw] pm-sm:w-[40vw] pm-md:w-[30vw] pm-xl:w-[40vw] rounded-xl font-neon pt-[1vh] bg-gradient-to-r  from-blue-500 to-teal-400 hover:from-pink-500 hover:to-orange-500'>
              Book Now
            </button>
          </Link>
        </div>
      </div>

      <div className='p-40 pm-sm:hidden'>
        <div className='flex justify-center items-center font-neon text-[8vh] text-neonYellow w-full h-[15vh]'>Party Time!</div>
        <div className='bg-[#080e20] w-full flex border-2 border-black rounded-3xl'>
          {location.eventImg && (
              <Image className='w-1/3 rounded-l-3xl' src={location.eventImg} alt='image' width={500} height={400} />
            )
          }
          <div className={`${location.eventImg == '' ? 'w-full' : 'w-2/3'}`}>
            <div className={`w-full px-[4vw] py-[5vh] ${location.eventImg == '' ? 'flex' : ''} `}>
              <div className='flex flex-col gap-4 mb-[2vh] w-2/3'>
                <div className='text-[3.5vh] text-neonPurple'>Arcade Time Entertainment {location.place.replace(/-/g, " ")}</div>
                <div className='text-[2.5vh] text-neonBlue'>{location.address}</div>
                <div className='text-[2.5vh] text-neonBlue'>
                  <p>{location.phonenumber}</p>
                  <p>Info@ArcadeTimeUSA.com</p>
                  <p>EventsKendall@ArcadeTimeUSA.com</p>
                </div>
                {location.eventImg == '' && (
                <div className='flex justify-start pl-[10vw] pt-[4vh]'>
                  <Link href={`${location.packagelink == '' ? `tel:${location.phonenumber}` : location.packagelink}`} target="_blank" rel="noopener noreferrer" className='w-[15vw] text-[4vh] text-center rounded-2xl bg-violet-500 hover:shadow-neonPurple font-neon h-[6vh] pt-[.2vh]'>Book Party</Link>
                </div>
              )}
              </div>
              <div className='w-1/3'>
                <div className='text-[4vh] text-neonPurple'>Hours</div>
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
                {location.eventImg && (
                  <div className='flex justify-center'>
                    <Link href={location.packagelink} target="_blank" rel="noopener noreferrer" className='w-[15vw] text-[4vh] text-center rounded-2xl bg-violet-500 hover:shadow-neonPurple font-neon h-[6vh] pt-[.2vh]'>Book Party</Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='px-[4vw] pm-md:px-[12vw] lm-sm:hidden'>
        <div className='flex justify-center items-center font-neon text-[8vh] text-neonYellow w-full h-[25vh]'>Party Time!</div>
        <img className="w-full rounded-2xl mb-[6vh]" src={location.eventImg}/>
        <div className='w-full bg-slate-900 px-[8vw] py-[4vh] rounded-2xl mb-[10vh]'>
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
            <Link href={`${location.packagelink == '' ? `tel:${location.phonenumber}` : location.packagelink}`} target="_blank" rel="noopener noreferrer">
              <button className='w-[45vw] text-[4vh] rounded-2xl bg-violet-500 hover:shadow-neonPurple font-neon h-[6vh] pt-[.2vh] mt-[5vh]'>Book Party</button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LocationPage;