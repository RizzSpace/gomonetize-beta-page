import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_PUBLIC_API_KEY);

export async function POST(request:any) {
    let datas = await request.json();
  try {
    const data = await resend.emails.send({
      from: 'Beta Onboarding - Gomonetize <onboarding@resend.dev>',
      to: ['suryaaprakashrj@gmail.com'],
      subject: 'Hello world',
      react: `Type:${datas.type} Email:${datas.email}}`,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}