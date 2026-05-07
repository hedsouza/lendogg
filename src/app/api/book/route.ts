import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  const { name, phone, ig, notes, service, price, duration, timeSlot } = await req.json()

  if (!name || !phone || !service || !timeSlot) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  })

  await transporter.sendMail({
    from: `"Len Dogg Hair Studio" <${process.env.GMAIL_USER}>`,
    to: process.env.GMAIL_USER,
    subject: `New Booking — ${name} — ${service} at ${timeSlot}`,
    text: [
      'NEW BOOKING REQUEST',
      '-------------------',
      `Name:     ${name}`,
      `Phone:    ${phone}`,
      `Instagram:${ig ? ` @${ig.replace(/^@/, '')}` : ' —'}`,
      '',
      `Service:  ${service} (${price} / ${duration})`,
      `Time:     ${timeSlot}`,
      '',
      `Notes:    ${notes || '—'}`,
    ].join('\n'),
    html: `
      <div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:32px;background:#f9f9f9;border-radius:8px;">
        <h2 style="color:#d4a832;margin:0 0 4px;">New Booking Request</h2>
        <p style="color:#888;font-size:12px;margin:0 0 24px;">Len Dogg Hair Studio</p>
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="padding:8px 0;color:#555;width:100px;">Name</td><td style="padding:8px 0;font-weight:bold;">${name}</td></tr>
          <tr><td style="padding:8px 0;color:#555;">Phone</td><td style="padding:8px 0;font-weight:bold;">${phone}</td></tr>
          <tr><td style="padding:8px 0;color:#555;">Instagram</td><td style="padding:8px 0;">${ig ? `@${ig.replace(/^@/, '')}` : '—'}</td></tr>
          <tr><td colspan="2" style="padding:16px 0 8px;border-top:1px solid #eee;"></td></tr>
          <tr><td style="padding:8px 0;color:#555;">Service</td><td style="padding:8px 0;font-weight:bold;">${service}</td></tr>
          <tr><td style="padding:8px 0;color:#555;">Price</td><td style="padding:8px 0;">${price} · ${duration}</td></tr>
          <tr><td style="padding:8px 0;color:#555;">Time</td><td style="padding:8px 0;font-weight:bold;">${timeSlot}</td></tr>
          ${notes ? `<tr><td colspan="2" style="padding:16px 0 8px;border-top:1px solid #eee;"></td></tr><tr><td style="padding:8px 0;color:#555;vertical-align:top;">Notes</td><td style="padding:8px 0;">${notes}</td></tr>` : ''}
        </table>
      </div>
    `,
  })

  return NextResponse.json({ success: true })
}
