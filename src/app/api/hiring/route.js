// app/api/submitApplication/route.js

// Place the runtime declaration at the very top
export const runtime = 'nodejs'; // Use Node.js runtime

import { NextResponse } from 'next/server';
import { supabaseAdmin } from '../../../lib/supabaseAdmin';

export async function POST(request) {
  try {
    // Parse the form data
    const formData = await request.formData();

    // Extract fields
    const name = formData.get('name');
    const email = formData.get('email');
    const phoneNumber = formData.get('phoneNumber');
    const token = formData.get('token');

    // Get the resume file
    const resumeFile = formData.get('resumeFile'); // This will be a File object

    if (!resumeFile || typeof resumeFile === 'string') {
      // Handle error: file not provided
      return NextResponse.json({ message: 'Resume file not provided' }, { status: 400 });
    }

    // Verify reCAPTCHA token
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;

    const verificationResponse = await fetch(verificationUrl, {
      method: 'POST',
    });

    const verificationResult = await verificationResponse.json();

    if (!verificationResult.success) {
      return NextResponse.json({ message: 'reCAPTCHA verification failed' }, { status: 400 });
    }

    // Read the resume file as a Buffer
    const arrayBuffer = await resumeFile.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Upload the resume to Supabase storage
    const filePath = `public/${Date.now()}_${resumeFile.name}`;
    const { error: uploadError } = await supabaseAdmin.storage
      .from('resumes')
      .upload(filePath, buffer, {
        contentType: resumeFile.type,
        upsert: true,
      });

    if (uploadError) {
      console.error('Error uploading file:', uploadError);
      throw uploadError;
    }

    // Upsert the form data into 'Hiring Form' table
    const { error: upsertError } = await supabaseAdmin
      .from('Hiring Form')
      .upsert(
        {
          name,
          email,
          phone_number: phoneNumber,
          resume_url: filePath,
        },
        {
          onConflict: 'email',
        }
      );

    if (upsertError) {
      console.error('Error upserting data:', upsertError);
      throw upsertError;
    }

    // Return success response
    return NextResponse.json({ message: 'Application received successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error processing application:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}