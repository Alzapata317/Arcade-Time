// Place the runtime declaration at the very top
export const runtime = 'nodejs'; // Use Node.js runtime

import { NextResponse } from 'next/server';
import { supabaseAdmin } from '../../../lib/supabaseAdmin'; // Adjust the import path if necessary

export async function POST(request: Request) {
  try {
    // Parse the JSON data from the request
    const { name, email, message, token } = await request.json();

    // Verify reCAPTCHA token
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;

    const verificationResponse = await fetch(verificationUrl, {
      method: 'POST',
    });

    const verificationResult = await verificationResponse.json();

    if (!verificationResult.success) {
      return NextResponse.json({ error: 'reCAPTCHA verification failed' }, { status: 400 });
    }

    // Save the form data to the 'Contact Form' table in Supabase
    const { error: insertError } = await supabaseAdmin
      .from('Contact Line')
      .insert({
        name,
        email,
        message,
      });

    if (insertError) {
      console.error('Error inserting data:', insertError);
      throw insertError;
    }

    // Return success response
    return NextResponse.json({ message: 'Your message has been received!' }, { status: 200 });

  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}