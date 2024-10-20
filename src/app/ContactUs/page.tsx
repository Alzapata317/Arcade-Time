'use client';

import React, { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { getBaseUrl } from '../utils/getBaseUrl';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  type StatusType = {
    submitting: boolean;
    success: string | null;
    error: string | null;
  };

  const [status, setStatus] = useState<StatusType>({
    submitting: false,
    success: null,
    error: null,
  });

  const [reCaptchaToken, setReCaptchaToken] = useState<string | null>(null);

  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleReCAPTCHAChange = (token: string | null) => {
    setReCaptchaToken(token);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ submitting: true, success: null, error: null });

    if (!reCaptchaToken) {
      setStatus({ submitting: false, success: null, error: 'Please complete the reCAPTCHA verification.' });
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, token: reCaptchaToken }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({ submitting: false, success: result.message, error: null });
        setFormData({ name: '', email: '', message: '' }); // Reset form
        setReCaptchaToken(null); // Reset reCAPTCHA token
        recaptchaRef.current?.reset(); // Reset the reCAPTCHA widget
      } else {
        setStatus({ submitting: false, success: null, error: result.error });
      }
    } catch (error) {
      console.error('Form Submission Error:', error);
      setStatus({ submitting: false, success: null, error: 'An error occurred. Please try again later.' });
    }
  };

  return (
    <div className='w-full h-full flex justify-center items-center bg-slate-950 flex-col pt-[7vh]'>
      <div className="text-white text-[2.75vh] flex flex-col bg-slate-900 pm-sm:w-[85vw] pm-md:w-[80vw] w-[50vw] h-auto rounded-3xl pm-sm:py-[4vh] pt-[2vh] lm-sm:pb-[5vh]">
        <div className='w-full text-neonYellow font-neon pm-sm:text-[5vh] text-[6vh] lm-sm:h-[10vh] flex justify-center items-center'>Contact Us</div>
        <div className='w-full flex justify-center gap-12'>
          <div className='w-full px-[4vw] pm-xl:px-[8vw]'>
            <h1 className='text-center mb-[1vh]'>Drop us a line!</h1>
            <form className='flex flex-col gap-4 mb-[1vh]' onSubmit={handleSubmit}>
              <input
                className="text-zinc-400 rounded-md h-[5vh] bg-slate-800 px-[1vw]"
                type="text"
                name="name"
                placeholder='Name'
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                className="text-zinc-400 rounded-md h-[5vh] bg-slate-800 px-[1vw]"
                type="email"
                name="email"
                placeholder='Email'
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                className="text-zinc-400 rounded-md bg-slate-800 px-[1vw] py-[1vh] text-start h-[20vh] pm-xl:h-[25vh]"
                name="message"
                placeholder='Message'
                value={formData.message}
                onChange={handleChange}
                required
              />
              {/* Add the ReCAPTCHA component */}
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                onChange={handleReCAPTCHAChange}
                ref={recaptchaRef}
              />
              <button
                className="bg-blue-500 h-[5vh] rounded-2xl"
                type='submit'
                disabled={status.submitting}
              >
                {status.submitting ? 'Sending...' : 'Send'}
              </button>
            </form>
            {status.success && <p className='text-green-500 text-center'>{status.success}</p>}
            {status.error && <p className='text-red-500 text-center'>{status.error}</p>}
            <p className='text-[1.25vh] text-center'>
              This site is protected by reCAPTCHA and the Google <a className="text-blue-300" href='https://policies.google.com/privacy'>Privacy Policy</a> and <a className='text-blue-300' href='https://policies.google.com/terms'>Terms of Service</a> apply.
            </p>
          </div>
        </div>
      </div>
      <footer className='w-full text-white h-[12vh] flex justify-between items-center px-[8vw]'>
        <p className='pm-sm:text-[1vh] pm-md:text-[1.5vh] text-[1.75vh]'>Copyright © 2024 Arcade Time USA LLC - All Rights Reserved.</p>
        <div className='flex gap-4 justify-center items-center'>
          <a href="https://www.instagram.com/arcadetimeusa/"><img className="pm-sm:w-[10vw] pm-md:w-[6vw] lm-sm:w-[2vw]" alt="" src={getBaseUrl("/assets/svgs/instagram.svg")} /></a>
          <a href="https://www.facebook.com/arcadetimeusa"><img className="pm-sm:w-[10vw] pm-md:w-[6vw] lm-sm:w-[2vw]" src={getBaseUrl("/assets/svgs/facebook.svg")} alt="FaceBook Logo" /></a>
          <a href="https://www.x.com/arcadetimeusa"><img className="pm-sm:w-[10vw] pm-md:w-[6vw] lm-sm:w-[2vw]" alt="" src={getBaseUrl("/assets/svgs/x.svg")} /></a>
          <a href="https://www.youtube.com//channel/UCJs4X_bUgUE5iNtH-GvLKNg"><img className="pm-sm:w-[10vw] pm-md:w-[6vw] lm-sm:w-[2vw]" alt="" src={getBaseUrl("/assets/svgs/youtube.svg")} /></a>
        </div>
      </footer>
    </div>
  );
}