// app/api/contact/route.js

import { supabaseAdmin } from '../../../lib/superbaseAdmin';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    // Basic Validation (You can enhance this as needed)
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Insert data into Supabase
    const { data, error } = await supabaseAdmin
      .from('Contact Line') // Ensure this table exists in your Supabase DB
      .insert([{ name, email, message }]);

    if (error) {
      console.error('Supabase Insert Error:', error);
      return NextResponse.json(
        { error: 'Failed to submit the contact form.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: 'Message received successfully!' }, { status: 200 });
  } catch (err) {
    console.error('API Route Error:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}