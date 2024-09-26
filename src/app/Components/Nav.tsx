import CustomRadioButton from './inputs/CustomRadioButton';
import ScrollBarInput from './inputs/ScrollBarInput';
import TimeButton from './inputs/TimeButton';
import PackageButton from './inputs/PackageButton';
import { useContext, useState, useRef } from 'react';
import { getBaseUrl } from '../utils/getBaseUrl';
import { Divide } from 'hamburger-react';
import { AppContext } from '../../../context/AppContext';
import Link from 'next/link';

interface PackageOption {
    value: string;
    label: string;
    infinite: string;
  }
  interface timesOptions {
    value: string;
    label: string;
  }
  interface CustomOptions {
    value: string;
    label: string;
  }

const options: CustomOptions[] = [
    { value: 'JacksonVille', label: 'Option 1' },
    { value: 'Wellington', label: 'Option 2' },
    { value: 'The Falls Mall Miami', label: 'Option 3' },
    { value: 'Coral Square Mall', label: 'Option 2' },
  ];
  const times: timesOptions[] = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
  ];
  const packages: PackageOption[] = [
    { value: '40', label: 'Option 1' , infinite: ""},
    { value: '60', infinite: 'Unlimited Playtime', label: 'Option 2' },
  ];

export default function Nav() {
    const [showEventPlanner, setShowEventPlanner] = useState(false);
    const [formData, setFormData] = useState({ customOption: '', number: 1, timeOption: '', packageOption: ''});
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const {showList,setShowList} = useContext(AppContext);
    const [showLocations, setShowLocations] = useState(false);

    const handleToggleDropdown = (dropdown: string) => {
      setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    };

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
        const secondButtonRef = useRef<HTMLButtonElement>(null);
      
        const handleClick = () => {
          if (secondButtonRef.current) {
            secondButtonRef.current.click();
          }
        };
      
        const handleDivideButtonClick = () => {
          alert('Second button clicked!');
        };
  return (
        <nav className="shadow-neonPink lm-sm:h-[20vh] h-[12vh] flex fixed w-screen top-0 bg-black z-20">
        {showEventPlanner && (
        <div className="pm-sm:w-full pm-md:w-[60vw] lm-sm:w-[30vw] lm-md:w-[45vw] lm-lg:w-[26vw] h-screen rounded-r-lg rounded-b-lg bg-slate-950 absolute top-0 right-0 z-30 p-8 pt-3 overflow-auto">
            <form className="pt-[4vh] pl-[.5vw]" onSubmit={handleSubmit}>
            <div className="w-full flex justify-between">
                <h1 className="w-4/5 font-neon text-neonBlue text-[4vh]">Pick Location</h1>
                <button className="pm-sm:w-[6vw] pm-md:w-[4vw] lm-sm:w-[1.75vw] lm-lg:w-[1.75vw] h-[3.4vh] font-neon text-neonBlue text-[2.5vh] border-neonBlue pm-sm:border-[.4vw] pm-md:border-[.3vw] lm-sm:border-[.1vw] lm-md:border-[.2vw] lm-lg:border-[.13vw] rounded-md text-center mt-[1vh]" onClick={() => setShowEventPlanner((prev) => !prev)}>X</button>
            </div>
            <CustomRadioButton options={options} name="customOption" onChange={handleRadioChange} />
            
            <h1 className="w-full font-neon text-neonBlue text-[4vh]">Party Size</h1>
            <div className="w-full pm-sm:h-[14vh] pm-md:h-24 pm-xl:h-[12vh] lm-sm:h-[17vh] flex flex-col pm-md:m-4 items-center justify-center">
                <ScrollBarInput name="number" min={1} max={10} onChange={handleNumberChange} />
            </div>

            <h1 className="w-full font-neon text-neonBlue text-[4vh]">Length of Time</h1>
            <TimeButton options={times} name="timeOption" onChange={handleTimeChange} />
            
            <h1 className="w-full font-neon text-neonBlue text-[4vh]">Party Package</h1>
            <PackageButton options={packages} name="packageOption" onChange={handlePackageChange} />
            <div className="w-full  flex flex-col justify-center items-center mt-6">
                <button className="font-neon text-neonPurple hover:text-neonYellow hover:border-neonYellow text-[4vh] border-2 border-neonPurple p-2 pt-3 rounded-xl" type="submit">Check Availability</button>
            </div>
            </form>
            <div className='pm-sm:h-[10vh] pm-md:hidden lm-sm:h-[20vh] lm-md:hidden'></div>
        </div>
        )}
        <div className="w-1/2 pm-md:w-1/3 relative flex justify-center lm-sm:justify-end  items-center bg-black">
          <img alt="" className="lm-sm:w-[40vw] lm-sm:h-[10vh] absolute top-0 left-0 hidden lm-sm:block" src={getBaseUrl("/assets/images/Left-Nav.png")}/>
          <Link className='z-10' href={getBaseUrl('/')}>
            <img alt="" className="lm-sm:w-[40vw] lm-sm:h-[17vh] z-10 hidden lm-sm:block" src={getBaseUrl("/assets/images/Arcade-Time-Logo3.webp")}/>
            <img alt="" className="h-[10vh] lm-sm:w-[40vw] lm-sm:h-[17vh] lm-sm:hidden z-10 " src={getBaseUrl("/assets/images/Arcade-Time-Logo.png")}/>
          </Link>
        </div>
        <div className="w-1/2 pm-md:w-2/3  lm-sm:px-12 flex flex-col justify-evenly items-center">
          <div className="w-full flex justify-evenly items-center relative">
              <button 
                className="flex justify-evenly w-[32vw] h-[5.5vh] pm-md:w-[19vw] lm-sm:w-[10vw] pm-xl:w-[22vw] pm-xl:h-[4vh] lm-md:w-[12vw] lm-sm:h-[5.25vh] lm-xl:rounded-2xl text-center items-center text-neonBlue border-2 border-neonBlue rounded-lg lm-md:mx-10 hover:shadow-neonBlue">
                <img 
                  className="h-[3.25vh] lm-sm:h-[3.5vh] pm-xl:h-[2.5vh]" 
                  src={getBaseUrl("/assets/images/Reservation.png")}
                />
                <Link href="https://www.opentable.ca/r/arcade-time-entertainment-miami" target="_blank" rel="noopener noreferrer">
                  <h1 
                    className="font-neon text-center self-center text-[2.5vh] pm-xl:text-[2vh] lm- pt-[.4vh] ">
                      Reserve
                  </h1>
                </Link>
              </button>
              <a href='tel:5027625028'>
                <button 
                  className=" w-[28vw] pm-md:w-[19vw] pm-md:h-[5.5vh] lm-sm:w-[10vw] pm-xl:w-[22vw] pm-xl:h-[4vh] lm-md:w-[14vw] lm-lg:w-[12vw] lm-sm:h-[5.25] lm-xl:rounded-2xl lm-md:mx-10 text-[2vh] pm-md:text-[2.5vh] lm-sm:text-[3.25vh] pm-xl:text-[2vh] pt-[.5vh] hidden pm-md:block lm-sm:block text-black font-neon bg-violet-500 rounded-lg border-black hover:shadow-neonPurple" 
                  // onClick={() => setShowEventPlanner((prev) => !prev)}
                  >
                    Book Event
                </button>
              </a>
              <button 
              ref={secondButtonRef}
              className='w-2vh lm-sm:hidden pm-xl:hidden'
              >
                <Divide toggled={showList} toggle={setShowList} color='#45f3ff'/>
              </button>
          </div>
          <section className="text-[3vh] w-full justify-evenly z-10 relative hidden lm-sm:flex pm-xl:flex pm-xl:text-[2vh]">
            <Link href={getBaseUrl("/Eat&Play")} className="font-neon text-neonBlue hover:underline underline-offset-8">Eat & Play</Link>
            <Link href={getBaseUrl("/ContactUs")} className="font-neon text-neonBlue hover:underline underline-offset-8">Contact Us</Link>
            {/* <a className="font-neon text-neonBlue hover:underline underline-offset-8">Gallery</a> */}
            <button onClick={() => handleToggleDropdown('dropdown4')} className="font-neon text-neonBlue hover:underline underline-offset-8">Locations</button>
            {openDropdown === 'dropdown4' && (
                <div className="absolute p-[1vh] top-[6vh] right-[7vh] pm-xl:top-[4vh] pm-xl:right-[4vh] lm-sm:w-[25vh] lm-sm:h-[17vh] bg-slate-900 text-neonBlue font-neon rounded-lg text-[2vh] flex flex-col justify-around">
                  <Link href={getBaseUrl('/locations/Jacksonville')} onClick={() => handleToggleDropdown('')}>Jacksonville</Link>
                  <Link href={getBaseUrl('/locations/Wellington')} onClick={() => handleToggleDropdown('')}>Wellington</Link>
                  <Link href={getBaseUrl('/locations/The-Falls-Mall-Miami')} onClick={() => handleToggleDropdown('')}>The Falls Mall Miami</Link>
                  <Link href={getBaseUrl('/locations/Coral-Square-Mall')} onClick={() => handleToggleDropdown('')}>Coral Square Mall</Link>
                </div>
            )}
          </section>
          <img alt="" className="lm-sm:w-[30vw] lm-sm:h-[8vh] absolute bottom-0 -right-2 hidden lm-sm:block" src={getBaseUrl("/assets/images/Right-Nav.png")}/>
        </div>
        {showList && (
          <div className='h-[100vh] w-full top-[12vh] left-0 absolute  text-neonBlue flex flex-col font-neon text-[4vh] gap-[2vh] px-[8vw] pt-[4vh] bg-slate-900'>
            <button className='text-left flex' onClick={() => setShowLocations((prev) => !prev)}>
              Locations
            <img className={`w-[4vh] ml-[2vw] pt-[1.25vh] ${showLocations == false ? '' : 'hidden'}`} src={getBaseUrl('/assets/svgs/down-arrow.png')}/>
            <img className={`w-[4vh] ml-[2vw] pt-[1.25vh] ${showLocations == true ? '' : 'hidden'}`} src={getBaseUrl('/assets/svgs/up-arrow.png')}/>
            </button>
            {showLocations && (
              <div className='text-neonPurple text-[4vh] flex flex-col pl-[8vw] gap-[2vh]'>
                  <Link href={getBaseUrl('/locations/Jacksonville')} onClick={() => setShowList(false)}>Jacksonville</Link>
                  <Link href={getBaseUrl('/locations/Wellington')} onClick={() => setShowList(false)}>Wellington</Link>
                  <Link href={getBaseUrl('/locations/The-Falls-Mall-Miami')} onClick={() => setShowList(false)}>The Falls Mall Miami</Link>
                  <Link href={getBaseUrl('/locations/Coral-Square-Mall')} onClick={() => setShowList(false)}>Coral Square Mall</Link>
              </div>
            )}
            <Link href={getBaseUrl('/Eat&Play')} onClick={() => setShowList(false)}>Eat & Play</Link>
            <Link href={getBaseUrl('/ContactUs')} onClick={() => setShowList(false)}>Contact Us</Link>
            <div className='flex justify-center'>
              <Link href='tel:5027625028'>
                <button 
                    className=" w-[42vw] text-black self-center pm-md:hidden text-[4vh] pt-[.5vh] font-neon bg-violet-500 rounded-lg border-black hover:shadow-neonPurple" 
                    // onClick={() => setShowEventPlanner((prev) => !prev)}
                    >
                      Book Event
                </button>
              </Link>
            </div>
          </div>
        )}
    </nav>
  )
}
