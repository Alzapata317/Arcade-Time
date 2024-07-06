import CustomRadioButton from './CustomRadioButton';
import ScrollBarInput from './ScrollBarInput';
import TimeButton from './TimeButton';
import PackageButton from './PackageButton';
import { useState } from 'react';
import { getImageUrl } from '../utils/getImageUrl';

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
  return (
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
        <img alt="" className="w-[448px] h-[80px] absolute top-0 left-0" src={getImageUrl("/assets/images/Left-Nav.png")}/>
        <img alt="" className="w-[600px] h-[160px] z-10" src={getImageUrl("/assets/images/Arcade-Time-Logo3.webp")}/>
        </div>
        <div className="w-1/2 px-12 flex flex-col justify-evenly items-center">
        <div className="w-full flex justify-center items-center relative">
            <button className="flex justify-evenly w-48 h-12 text-2xl text-center items-center p-1 text-neonBlue border-2 border-neonBlue rounded-lg mx-10 hover:shadow-neonBlue">
            <img alt="" className="h-8" src={getImageUrl("/assets/images/Reservation.png")}/>
            <h1 className="font-neon text-center self-end">Reserve</h1>
            </button>
            <button className="w-40 h-12 mx-10 text-3xl pt-[7px] text-black font-neon bg-violet-500 rounded-lg border-black hover:shadow-neonPurple" onClick={() => setShowEventPlanner((prev) => !prev)}>Book Event</button>

        </div>
        <section className="text-xl w-full flex justify-evenly z-10 relative">
            <h1 className="text-3xl font-neon text-neonBlue hover:underline underline-offset-8">Eat & Drink</h1>
            <h1 className="text-3xl font-neon text-neonBlue hover:underline underline-offset-8">Play</h1>
            <h1 className="text-3xl font-neon text-neonBlue hover:underline underline-offset-8">Gallery</h1>
            <button onClick={() => handleToggleDropdown('dropdown4')} className="text-3xl font-neon text-neonBlue hover:underline underline-offset-8">Locations</button>
            {openDropdown === 'dropdown4' && (
                <div className="absolute p-[1vh] top-[6vh] right-[7vh] w-[25vh] h-[17vh] bg-slate-900 text-neonBlue font-neon rounded-lg text-2xl flex flex-col justify-around">
                <a href={getImageUrl('/locations/Jacksonville')}>Jacksonville</a>
                <a href={getImageUrl('/locations/Wellington')}>Wellington</a>
                <a href={getImageUrl('/locations/The-Falls-Mall-Miami')}>The Falls Mall Miami</a>
                <a href={getImageUrl('/locations/Coral-Square-Mall')}>Coral Square Mall</a>
                </div>
            )}
        </section>
        <img alt="" className="w-[448px] h-[80px] absolute bottom-0 -right-2" src={getImageUrl("/assets/images/Right-Nav.png")}/>
        </div>
    </nav>
  )
}
