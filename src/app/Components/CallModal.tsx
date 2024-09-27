import React from 'react';
import { useContext, useRef, useState} from 'react';
import { AppContext } from '../../../context/AppContext';
import IconPhone from './IconPhone';

export default function CallModal() {
    const {showModal, setShowModal} = useContext(AppContext);
    const [isHovered, setIsHovered] = useState(String);
    const modalRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: React.MouseEvent) => {
        // If the click is outside the modal content, close the modal
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
          setShowModal(false);
        }
      };

  return (
    <div>
        {showModal ? (
            <div
            className="fixed inset-0 bg-slate-900 bg-opacity-50 flex justify-center items-center z-20"
            onClick={handleClickOutside}
          >
            <div ref={modalRef} className="relative bg-slate-900 p-6 rounded-2xl shadow-lg w-[45vw] pm-md:w-[65vw] lm-md:w-[55vw] h-[44vh] pm-md:h-[63vh] pm-xl:h-[58vh] lm-xl:h-[40vh] pt-[2vh]">
              <button
                  className="absolute top-[2.7vh] right-[2.25vw] pm-md:right-[4vw] text-neonBlue  rounded font-neon text-[4vh] hover:text-neonYellow"
                  onClick={() => setShowModal(false)}
              >
                x
              </button>
              <h2 className="mb-4 text-neonYellow text-center text-[5vh] font-neon">Call Us!</h2>
              <div className="px-[2vw] flex flex-col gap-5">
                <div className="flex pm-md:flex-col justify-between">
                  <p className="text-neonPurple font-neon text-[3.5vh] pm-md:text-center">The Falls Mall Miami</p>
                  <a className="self-center" href="tel:(786)-250-3165">
                    <button 
                      className="bg-black lm-md:w-[20vw] font-neon text-neonBlue text-[2.5vh] pm-xl:text-[2.25vh] h-[5vh] w-[15vw] pm-md:w-[35vw] pm-xl:w-[38vw] border-2 border-neonBlue rounded-xl flex justify-evenly items-center hover:border-neonYellow hover:text-neonYellow" 
                      onMouseEnter={() => setIsHovered("1")}
                      onMouseLeave={() => setIsHovered("")}
                    >
                      <p className="pt-[.4vh]">(786)-250-3165</p> 
                      <IconPhone fill={isHovered == "1" ? '#FFFF33' : '#45f3ff'}/>
                    </button>
                  </a>
                </div>
                <div className="flex pm-md:flex-col justify-between">
                  <p className="text-neonPurple font-neon text-[3.5vh] pm-md:text-center">Coral Square Mall</p>
                  <a className="pm-md:self-center" href="tel:(954)-312-9663">
                    <button 
                      className="bg-black lm-md:w-[20vw] font-neon text-neonBlue text-[2.5vh] pm-xl:text-[2.25vh] h-[5vh] w-[15vw] pm-md:w-[35vw] pm-xl:w-[38vw] border-2 border-neonBlue rounded-xl flex justify-evenly items-center hover:border-neonYellow hover:text-neonYellow" 
                      onMouseEnter={() => setIsHovered("2")}
                      onMouseLeave={() => setIsHovered("")}
                    >
                      <p className="pt-[.4vh]">(954)-312-9663</p> 
                      <IconPhone fill={isHovered == "2" ? '#FFFF33' : '#45f3ff'}/>
                    </button>
                  </a>
                </div>
                <div className="flex pm-md:flex-col justify-between">
                  <p className="text-neonPurple font-neon text-[3.5vh] pm-md:text-center">Wellington</p>
                  <a className="pm-md:self-center" href="tel:(561)-247-8463">
                    <button 
                      className="bg-black lm-md:w-[20vw] font-neon text-neonBlue text-[2.5vh] pm-xl:text-[2.25vh] h-[5vh] w-[15vw] pm-md:w-[35vw] pm-xl:w-[38vw] border-2 border-neonBlue rounded-xl flex justify-evenly items-center hover:border-neonYellow hover:text-neonYellow" 
                      onMouseEnter={() => setIsHovered("3")}
                      onMouseLeave={() => setIsHovered("")}
                    >
                      <p className="pt-[.4vh]">(561)-247-8463</p> 
                      <IconPhone fill={isHovered == "3" ? '#FFFF33' : '#45f3ff'}/>
                    </button>
                  </a>
                </div>
                <div className="flex pm-md:flex-col justify-between">
                  <p className="text-neonPurple font-neon text-[3.5vh] pm-md:text-center">Jacksonville</p>
                  <a className="pm-md:self-center" href="tel:(904)-365-8463">
                    <button 
                      className="bg-black lm-md:w-[20vw] font-neon text-neonBlue text-[2.5vh] pm-xl:text-[2.25vh] h-[5vh] w-[15vw] pm-md:w-[35vw] pm-xl:w-[38vw] border-2 border-neonBlue rounded-xl flex justify-evenly items-center hover:border-neonYellow hover:text-neonYellow" 
                      onMouseEnter={() => setIsHovered("4")}
                      onMouseLeave={() => setIsHovered("")}
                    >
                      <p className="pt-[.4vh]">(904)-365-8463</p> 
                      <IconPhone fill={isHovered == "4" ? '#FFFF33' : '#45f3ff'}/>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : null}
    </div>
  )
}
