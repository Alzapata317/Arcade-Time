import React from 'react'

export default function Contact() {
  return (
    <div className='text-white text-[2.75vh] flex flex-col bg-slate-950'>
        <div className='text-neonYellow font-neon text-[6vh] lm-sm:h-[20vh] flex justify-center items-center'>Contact Us</div>
        <div className='flex justify-center gap-12'>
            <div className='w-1/3'>
                <h1 className='text-left mb-[1vh]'>Interested in gathering information about The Falls Mall location.</h1>
                <form className='flex flex-col gap-4 mb-[1vh]'>
                    <input className="bg-slate-900 px-[1vw] text-black" type="text" placeholder='Name' />
                    <input className="bg-slate-900 px-[1vw] " type="text" placeholder='Email' />
                    <textarea className="bg-slate-900 px-[1vw] py-[1vh] text-start h-[20vh]" placeholder='Message' />
                    <button className="bg-blue-500 h-[5vh] rounded-2xl" type='submit'>Send</button>
                </form>
                <p className='text-[1.25vh] text-center'>This site is protected by reCAPTCHA and the Google <a className="text-blue-300" href='https://policies.google.com/privacy'>Privacy Policy</a> and <a className='text-blue-300' href='https://policies.google.com/terms'>Terms of Service</a> apply.</p>
            </div>
            <div className='w-1/3 text-left'>
                <p>Arcade Time Entertainment The Falls Mall</p>
                <p className='mb-[2vh]'>8888 SW 136th St. #395A, Miami Fl. 33176</p>
                <div>
                    <p className='mb-[2vh]'>786-250-3165</p>
                    <p>Info@ArcadeTimeUSA.com</p>
                    <p>EventsKendall@ArcadeTimeUSA.com</p>
                </div>
            </div>
        </div>  
    </div>
  )
}
