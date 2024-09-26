import React from 'react'

import { getBaseUrl } from '../utils/getBaseUrl'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="pm-sm:h-[35vh] pm-md:h-[27vh] lm-sm:h-[23vh] justify-around flex flex-col bg-gradient-to-t from-slate-800 to-slate-950">
    <div className="w-full lm-sm:h-[80%] flex">
      <div className="w-2/5 justify-center items-center pm-sm:hidden lm-sm:flex">
        <img alt="" className="lm-sm:w-[8vw] lm-md:w-[12vw]" src={getBaseUrl("/assets/images/Arcade-Time-Logo.png")}/>
      </div>
      <div className="w-full lm-sm:w-3/5 flex pm-sm:flex-col pm-md:flex-row pm-md:px-[5vw] text-white">
        <div className="flex flex-col pm-sm:w-full pm-md:w-2/5 w-2/5 h-full justify-center">
          <p className="w-full text-center text-neonBlue font-neon pm-sm:text-[3.5vh] lm-sm:text-[3.5vh] my-[1vh]">Follow Us!</p>
          <div className="w-full flex justify-around">
            <a href="https://www.instagram.com/arcadetimeusa/"><img  className="pm-sm:w-[10vw] pm-md:w-[6vw] lm-sm:w-[3vw]" alt="" src={getBaseUrl("/assets/svgs/instagram.svg")}/></a>
            <a href="https://www.facebook.com/arcadetimeusa"><img  className="pm-sm:w-[10vw] pm-md:w-[6vw] lm-sm:w-[3vw]" src={getBaseUrl("/assets/svgs/facebook.svg")} alt="FaceBook Logo"/></a>
            <a href="https://www.x.com/arcadetimeusa"><img  className="pm-sm:w-[10vw] pm-md:w-[6vw] lm-sm:w-[3vw]" alt="" src={getBaseUrl("/assets/svgs/x.svg")}/></a>
            <a href="https://www.youtube.com//channel/UCJs4X_bUgUE5iNtH-GvLKNg"><img  className="pm-sm:w-[10vw] pm-md:w-[6vw] lm-sm:w-[3vw]" alt="" src={getBaseUrl("/assets/svgs/youtube.svg")}/></a>
          </div>
        </div>
        <div className="pm-sm:w-full pm-md:w-3/5 pm-md:pl-[5vw] w-3/5 flex pm-sm:flex-col pm-md:flex-row justify-center">
          <div className="justify-evenly pm-sm:w-full pm-md:w-3/5 lm-sm:w-2/5 gap-[1vh] pm-sm:text-[1.4vh] pm-md:text-[1.75vh] pm-xl:text-[1.5vh] lm-sm:text-[1.75vh] h-full flex pm-sm:flex-row pm-md:flex-col lm-sm:flex-col pt-[3.25vh]">
            <Link href={getBaseUrl('/locations/Jacksonville')}>Jacksonville</Link>
            <Link href={getBaseUrl('/locations/Wellington')}>Wellington</Link>
            <Link href={getBaseUrl('/locations/The-Falls-Mall-Miami')}>The Falls Mall Miami</Link>
            <Link href={getBaseUrl('/locations/Coral-Square-Mall')}>Coral Square Mall</Link>
          </div>
          <div className="flex pm-sm:flex-row-reverse pm-md:flex-col lm-sm:flex-col pm-sm:pt-[2.5vh] pm-md:pt-[2vh] pm-sm:pl-[2vw] pm-sm:justify-center pm-md:justify-around  pm-md:w-3/5 lm-sm:w-3/5 h-full w-full pt-[3.25vh]">
            {/*<div className="lm-sm:w-1/2 flex flex-col justify-center lm-lg:mb-[2vh]">
              <button className="pm-sm:w-[35vw] bg-gradient-to-t from-purple-950 to-indigo-950 text-center pm-md:w-[26vw] pm-sm:h-[5vh] lm-sm:w-[16vw] lm-lg:w-[12vw] lm-sm:h-[6vh] pm-sm:text-[1.5vh] pm-md:text-[1.75vh] pm-xl:text-[1.5vh] lm-sm:text-[1.75vh] rounded-full pm-sm:ml-[3vw] pm-md:ml-[0]">Join our Newsletter</button>
            </div> */}
            <div className="lm-sm:w-1/2 h-full pm-md:pt-[1.25vh] pm-sm:items-center pm-md:items-start pm-sm:gap-[4vw] pm-md:gap-[1vh] lm-sm:gap-[1vh] pm-sm:text-[1.5vh] pm-md:text-[1.75vh] pm-xl:text-[1.5vh] lm-sm:text-[1.75vh] flex pm-sm:flex-row pm-md:flex-col lm-sm:flex-col pm-md:pl-[2vw] lm-sm:pl-[1vw] ">
              <Link href={getBaseUrl("/ContactUs")}>Contact Us</Link>
              <Link href={getBaseUrl("/Careers")}><p className="">Careers</p></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full pm-sm:text-center lm-sm:h-[20%] lm-sm:pl-[4vw] text-white  pm-sm:text-[.75vh] pm-md:text-[2vh] pm-xl:text-[1vh] lm-sm:text-[2vh]">
      Copyright © 2024 Arcade Time USA LLC - All Rights Reserved
    </div>
  </footer>
  )
}
