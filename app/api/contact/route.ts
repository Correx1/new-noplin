import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabase';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, email, company, phone, service, message } = body;

    // ── 1. Save to Supabase ────────────────────────────────────────────────
    const { error: dbError } = await supabase.from('contact_submissions').insert([
      {
        full_name: fullName,
        email,
        company,
        phone,
        service,
        message,
        submitted_at: new Date().toISOString(),
      },
    ]);

    if (dbError) {
      console.error('Supabase error:', dbError.message);
      // Don't block — still attempt Google Sheets
    }

    // ── 2. Send to Google Sheets (via Apps Script) ─────────────────────────
    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
    if (scriptUrl) {
      await fetch(scriptUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName, email, company, phone, service, message }),
      }).catch((err) => console.error('Google Script error:', err));
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 });
  }
}
