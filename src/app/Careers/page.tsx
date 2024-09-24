// 'use client'
// import { getBaseUrl } from '../utils/getBaseUrl'
// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPaperclip } from '@fortawesome/free-solid-svg-icons';

// export default function Careers() {
//     const [fileName, setFileName] = useState('No file selected');

//     const handleFileChange = (e : any) => {
//         if (e.target.files.length > 0) {
//         setFileName(e.target.files[0].name);
//         } else {
//         setFileName('No file selected');
//         }
//     };
//   return (
//     <div className='w-full h-full flex justify-center items-center bg-slate-950 flex-col pt-[7vh]'>
//         <div className='text-white text-[2.75vh] flex flex-col bg-slate-900 pm-sm:w-[85vw] pm-md:w-[80vw] w-[50vw] pm-sm:h-[85vh] pm-md:h-[77vh] h-[82vh] rounded-3xl pm-sm:py-[4vh] py-[2vh] gap-2 lm-sm:pt-[5vh]'>
//             <div className='w-full text-neonYellow font-neon pm-sm:text-[5vh] text-[6vh] lm-sm:h-[10vh] flex justify-center items-center'>We're Hiring</div>
//             <div className='text-center'>Join Our Team</div>
//             <div className='px-[4vw] text-[1.75vh] text-center text-blue-400'>Arcade Time employees is a elite group of individuals who are considered to be among the very best in the hospitality industry. Our Team Members are the key to the continued success of our company. </div>
//             <div className='w-full flex justify-center gap-12'>
//                 <div className='w-full px-[4vw] pm-xl:px-[8vw]'>
//                     <h1 className='text-center mb-[1vh]'>Apply Now</h1>
//                     <form className='flex flex-col gap-4 mb-[1vh]'>
//                         <input className="text-zinc-400 rounded-md h-[5vh] bg-slate-800 px-[1vw]" type="text" placeholder='Name*' />
//                         <input className="text-zinc-400 rounded-md h-[5vh] bg-slate-800 px-[1vw]" type="tel" placeholder='Phone Number*' />
//                         <input className="text-zinc-400 rounded-md h-[5vh] bg-slate-800 px-[1vw] " type="text" placeholder='Email*' />
//                         <input type="file" id="fileInput" className="hidden" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
//                         <label htmlFor="fileInput" className="flex items-center px-4 py-2 bg-gray-400 border border-gray-300 rounded cursor-pointer hover:bg-gray-300" >
//                             <FontAwesomeIcon icon={faPaperclip} className="mr-2" />
//                             Attach Resume
//                         </label>
//                         <span className="text-gray-600 text-sm">{fileName}</span>
//                         <button className="bg-blue-500 h-[5vh] rounded-2xl" type='submit'>Send</button>
//                     </form>
//                     <p className='text-[1.25vh] text-center'>This site is protected by reCAPTCHA and the Google <a className="text-blue-300" href='https://policies.google.com/privacy'>Privacy Policy</a> and <a className='text-blue-300' href='https://policies.google.com/terms'>Terms of Service</a> apply.</p>
//                 </div>
//             </div>
//         </div>
//         <footer className='w-full text-white h-[12vh] flex justify-between items-center px-[8vw]'>
//             <p className='pm-sm:text-[1vh] pm-md:text-[1.5vh] text-[1.75vh]'>Copyright © 2024 Arcade Time USA LLC - All Rights Reserved.</p>
//             <div className='flex gap-4 justify-center items-center'>
//                 <a href="https://www.instagram.com/arcadetimeusa/"><img  className="pm-sm:w-[10vw] pm-md:w-[6vw] lm-sm:w-[2vw]" alt="" src={getBaseUrl("/assets/svgs/instagram.svg")}/></a>
//                 <a href="https://www.facebook.com/arcadetimeusa"><img  className="pm-sm:w-[10vw] pm-md:w-[6vw] lm-sm:w-[2vw]" src={getBaseUrl("/assets/svgs/facebook.svg")} alt="FaceBook Logo"/></a>
//                 <a href="https://www.x.com/arcadetimeusa"><img  className="pm-sm:w-[10vw] pm-md:w-[6vw] lm-sm:w-[2vw]" alt="" src={getBaseUrl("/assets/svgs/x.svg")}/></a>
//                 <a href="https://www.youtube.com//channel/UCJs4X_bUgUE5iNtH-GvLKNg"><img  className="pm-sm:w-[10vw] pm-md:w-[6vw] lm-sm:w-[2vw]" alt="" src={getBaseUrl("/assets/svgs/youtube.svg")}/></a>
//             </div>
//         </footer>
//     </div>
//   )
// }





// CareersComponent.tsx
// 'use client'
// import React, { useState } from 'react';
// import { supabase  } from '../../lib/supabaseClient';

// // Initialize Supabase client (replace with your actual Supabase URL and Key)

// const CareersComponent: React.FC = () => {

//   // interfaces.ts

//   interface FormData {
//     name: string;
//     email: string;
//     phone_number: string;
//   }
  
//   interface Status {
//     submitting: boolean;
//     success: string | null;
//     error: string | null;
//   }
//   // Initialize form data state
//   const [formData, setFormData] = useState<FormData>({
//     name: '',
//     email: '',
//     phone_number: '',
//   });

//   // Initialize file state with proper typing
//   const [file, setFile] = useState<File | null>(null);

//   // Initialize status state with success as string | null
//   const [status, setStatus] = useState<Status>({
//     submitting: false,
//     success: null,
//     error: null,
//   });

//   // Handler for form input changes
//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prevData: any) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   // Handler for file selection
//   const handleFileChange = (
//     e: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     if (e.target.files && e.target.files[0]) {
//       setFile(e.target.files[0]);
//     } else {
//       setFile(null);
//     }
//   };

//   // Submit handler
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
    
//     // Reset status to submitting
//     setStatus({ submitting: true, success: null, error: null });

//     // Validate form fields
//     if (!formData.name || !formData.email || !formData.phone_number || !file) {
//       setStatus({ submitting: false, success: null, error: 'All fields are required.' });
//       return;
//     }

//     try {
//       // Define Supabase storage bucket and file path
//       const bucketName = 'careers-resumes'; // Replace with your bucket name
//       const filePath = `resumes/${file.name}`;

//       // Upload the file to Supabase Storage
//       const { data: uploadData, error: uploadError } = await supabase.storage
//         .from(bucketName)
//         .upload(filePath, file);

//       if (uploadError) {
//         throw uploadError;
//       }

//       // Retrieve the public URL of the uploaded file
//       const { data: publicData } = supabase.storage
//         .from(bucketName)
//         .getPublicUrl(filePath);

//       if (!publicData) {
//         throw new Error('Failed to retrieve public URL.');
//       }

//       const publicURL = publicData.publicUrl;

//       // Simulate form submission to your backend or handle as needed
//       // For demonstration, we'll just log the data
//       console.log('Form Data:', formData);
//       console.log('Resume Public URL:', publicURL);

//       // Update status to success
//       setStatus({ submitting: false, success: 'Application submitted successfully!', error: null });
//     } catch (error: any) {
//       // Handle errors and update status
//       setStatus({ submitting: false, success: null, error: error.message || 'An unexpected error occurred.' });
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="name">Name:</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={formData.name}
//           onChange={handleInputChange}
//           required
//         />
//       </div>

//       <div>
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={formData.email}
//           onChange={handleInputChange}
//           required
//         />
//       </div>

//       <div>
//         <label htmlFor="phone_number">Phone Number:</label>
//         <input
//           type="tel"
//           id="phone_number"
//           name="phone_number"
//           value={formData.phone_number}
//           onChange={handleInputChange}
//           required
//         />
//       </div>

//       <div>
//         <label htmlFor="resume">Resume:</label>
//         <input
//           type="file"
//           id="resume"
//           name="resume"
//           accept=".pdf,.doc,.docx"
//           onChange={handleFileChange}
//           required
//         />
//       </div>

//       <button type="submit" disabled={status.submitting}>
//         {status.submitting ? 'Submitting...' : 'Submit'}
//       </button>

//       {status.error && <p style={{ color: 'red' }}>{status.error}</p>}
//       {status.success && <p style={{ color: 'green' }}>{status.success}</p>}
//     </form>
//   );
// };

// export default CareersComponent;

'use client'
import { getBaseUrl } from '../utils/getBaseUrl'
import React, { useState, ChangeEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { supabase } from '../../lib/supabaseClient'; 

export default function Careers() {
    // State variables for form inputs
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [resumeFile, setResumeFile] = useState<File | null>(null);
    const [fileName, setFileName] = useState('No file selected');

    const [status, setStatus] = useState({
        submitting: false,
        success: false,
        error: false,
      });

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            setFileName(file.name);
            setResumeFile(file);
        } else {
            setFileName('No file selected');
            setResumeFile(null);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus({ submitting: true, success: false, error: false });
    
        // Validate required fields
        if (!name || !email || !phoneNumber || !resumeFile) {
            alert('Please fill in all required fields and attach your resume.');
            return;
        }
    
        try {
            // Check if a record with the same email already exists
            const { data: existingData, error: selectError } = await supabase
                .from('Hiring Form')
                .select('resume_url')
                .eq('email', email)
                .single();
    
            if (selectError && selectError.code !== 'PGRST116') {
                throw selectError;
            }
    
            // Delete the previous resume file if it exists
            if (existingData && existingData.resume_url) {
                const oldFilePath = existingData.resume_url;
    
                console.log('Attempting to delete old resume file at path:', oldFilePath);
    
                // Delete the old resume file
                const { error: deleteError } = await supabase
                    .storage
                    .from('resumes')
                    .remove([oldFilePath]);
    
                if (deleteError) {
                    console.error('Error deleting old resume:', deleteError.message);
                } else {
                    console.log('Old resume file deleted successfully');
                }
            }
    
            // Upload the new resume file to the 'resumes' bucket
            const filePath = `public/${Date.now()}_${resumeFile.name}`;
            const { error: uploadError } = await supabase
                .storage
                .from('resumes')
                .upload(filePath, resumeFile);
    
            if (uploadError) {
                throw uploadError;
            }
    
            // Store the file path
            const resumeFilePath = filePath;
    
            // Upsert the form data into 'Hiring Form' table
            const { error: upsertError } = await supabase
                .from('Hiring Form')
                .upsert(
                    {
                        name: name,
                        email: email,
                        phone_number: phoneNumber,
                        resume_url: resumeFilePath
                    },
                    {
                        onConflict: 'email'
                    }
                );
    
            if (upsertError) {
                throw upsertError;
            }
            // Success message
            setStatus({ submitting: false, success: true, error: false });
            // Reset form
            setName('');
            setEmail('');
            setPhoneNumber('');
            setFileName('No file selected');
            setResumeFile(null);
    
        } catch (error: any) {
            setStatus({ submitting: false, success: false, error: true });
            console.error('Error submitting application:', error.message);
            alert('There was an error submitting your application. Please try again later.');
        }
    };

    return (
        <div className='w-full h-full flex justify-center items-center bg-slate-950 flex-col pt-[7vh]'>
            <div className='text-white text-[2.75vh] flex flex-col bg-slate-900 pm-sm:w-[85vw] pm-md:w-[80vw] w-[50vw] pm-sm:h-[85vh] pm-md:h-[77vh] h-[82vh] rounded-3xl pm-sm:py-[4vh] py-[2vh] gap-2 lm-sm:pt-[5vh]'>
                <div className='w-full text-neonYellow font-neon pm-sm:text-[5vh] text-[6vh] lm-sm:h-[10vh] flex justify-center items-center'>We're Hiring</div>
                <div className='text-center'>Join Our Team</div>
                <div className='px-[4vw] text-[1.75vh] text-center text-blue-400'>Arcade Time employees are an elite group of individuals who are considered to be among the very best in the hospitality industry. Our Team Members are the key to the continued success of our company.</div>
                <div className='w-full flex justify-center gap-12'>
                    <div className='w-full px-[4vw] pm-xl:px-[8vw]'>
                        <h1 className='text-center mb-[1vh]'>Apply Now</h1>
                        <form className='flex flex-col gap-4 mb-[1vh]' onSubmit={handleSubmit}>
                            <input
                                className="text-zinc-400 rounded-md h-[5vh] bg-slate-800 px-[1vw]"
                                type="text"
                                placeholder='Name*'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <input
                                className="text-zinc-400 rounded-md h-[5vh] bg-slate-800 px-[1vw]"
                                type="tel"
                                placeholder='Phone Number*'
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                            <input
                                className="text-zinc-400 rounded-md h-[5vh] bg-slate-800 px-[1vw]"
                                type="email"
                                placeholder='Email*'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                type="file"
                                id="fileInput"
                                className="hidden"
                                accept=".pdf,.doc,.docx"
                                onChange={handleFileChange}
                            />
                            <label htmlFor="fileInput" className="flex items-center px-4 py-2 bg-gray-400 border border-gray-300 rounded cursor-pointer hover:bg-gray-300" >
                                <FontAwesomeIcon icon={faPaperclip} className="mr-2" />
                                Attach Resume
                            </label>
                            <span className="text-gray-600 text-sm">{fileName}</span>
                            <button className="bg-blue-500 h-[5vh] rounded-2xl" type='submit'>Send</button>
                        </form>
                            {status.success && <p className='text-green-500 text-center'>Application received successfully!</p>}
                            {status.error && <p className='text-red-500 text-center'>Application unable to send</p>}
                        <p className='text-[1.25vh] text-center'>This site is protected by reCAPTCHA and the Google <a className="text-blue-300" href='https://policies.google.com/privacy'>Privacy Policy</a> and <a className='text-blue-300' href='https://policies.google.com/terms'>Terms of Service</a> apply.</p>
                    </div>
                </div>
            </div>
            <footer className='w-full text-white h-[12vh] flex justify-between items-center px-[8vw]'>
                <p className='pm-sm:text-[1vh] pm-md:text-[1.5vh] text-[1.75vh]'>Copyright © 2024 Arcade Time USA LLC - All Rights Reserved.</p>
                <div className='flex gap-4 justify-center items-center'>
                    <a href="https://www.instagram.com/arcadetimeusa/"><img  className="pm-sm:w-[10vw] pm-md:w-[6vw] lm-sm:w-[2vw]" alt="" src={getBaseUrl("/assets/svgs/instagram.svg")}/></a>
                    <a href="https://www.facebook.com/arcadetimeusa"><img  className="pm-sm:w-[10vw] pm-md:w-[6vw] lm-sm:w-[2vw]" src={getBaseUrl("/assets/svgs/facebook.svg")} alt="FaceBook Logo"/></a>
                    <a href="https://www.x.com/arcadetimeusa"><img  className="pm-sm:w-[10vw] pm-md:w-[6vw] lm-sm:w-[2vw]" alt="" src={getBaseUrl("/assets/svgs/x.svg")}/></a>
                    <a href="https://www.youtube.com//channel/UCJs4X_bUgUE5iNtH-GvLKNg"><img  className="pm-sm:w-[10vw] pm-md:w-[6vw] lm-sm:w-[2vw]" alt="" src={getBaseUrl("/assets/svgs/youtube.svg")}/></a>
                </div>
            </footer>
        </div>
    )
}