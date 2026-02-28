import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req) {
  try {
    const body = await req.json()
    const { name, email, phone, company, service, budget, message, enquiryType } = body

    if (!name || (!email && !phone) || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_FROM,       // your Zoho Mail: info@benextstudio.com
        pass: process.env.EMAIL_APP_PASS,   // Zoho App Password
      },
    })

    const serviceLabels = {
      saas: '🚀 SaaS / Custom Software',
      website: '🌐 Business Website',
      seo: '🔍 SEO & AI Visibility',
      playsa: '⚽ PlaySa Sports Software',
      other: '💬 Other / Not Sure',
    }

    const budgetLabels = {
      under2k: 'Under 2,000 AED',
      '2k5k': '2,000 – 5,000 AED',
      '5k15k': '5,000 – 15,000 AED',
      '15k+': '15,000+ AED',
      discuss: 'Let\'s discuss',
    }

    const html = `
      <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background: #060608; color: #e8e8f0; padding: 0; margin: 0;">
        <div style="max-width: 600px; margin: 0 auto; background: #0d0d12; border: 1px solid #1a1a24;">
          
          <!-- Header -->
          <div style="padding: 32px 40px 24px; border-bottom: 1px solid #1a1a24;">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;">
              <div style="background: #4DFFA0; width: 28px; height: 28px; display: inline-flex; align-items: center; justify-content: center; font-weight: 800; font-size: 10px; color: #060608; transform: rotate(0deg);">BN</div>
              <span style="color: #4DFFA0; font-size: 12px; letter-spacing: 0.15em; text-transform: uppercase;">New Enquiry — BeNext Studio</span>
            </div>
            <h1 style="color: #ffffff; font-size: 26px; font-weight: 700; margin: 0;">${enquiryType === 'popup' ? '⚡ Quick Enquiry' : '📋 Project Enquiry'}</h1>
          </div>

          <!-- Details -->
          <div style="padding: 32px 40px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #1a1a24; color: #666680; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; width: 130px;">Name</td><td style="padding: 10px 0; border-bottom: 1px solid #1a1a24; color: #e8e8f0; font-size: 15px;">${name}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #1a1a24; color: #666680; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Email</td><td style="padding: 10px 0; border-bottom: 1px solid #1a1a24; color: #4DFFA0; font-size: 15px;"><a href="mailto:${email}" style="color: #4DFFA0;">${email}</a></td></tr>
              ${phone ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #1a1a24; color: #666680; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Phone</td><td style="padding: 10px 0; border-bottom: 1px solid #1a1a24; color: #e8e8f0; font-size: 15px;"><a href="tel:${phone}" style="color: #4DFFA0;">${phone}</a></td></tr>` : ''}
              ${company ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #1a1a24; color: #666680; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Company</td><td style="padding: 10px 0; border-bottom: 1px solid #1a1a24; color: #e8e8f0; font-size: 15px;">${company}</td></tr>` : ''}
              ${service ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #1a1a24; color: #666680; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Service</td><td style="padding: 10px 0; border-bottom: 1px solid #1a1a24; color: #e8e8f0; font-size: 15px;">${serviceLabels[service] || service}</td></tr>` : ''}
              ${budget ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #1a1a24; color: #666680; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Budget</td><td style="padding: 10px 0; border-bottom: 1px solid #1a1a24; color: #e8e8f0; font-size: 15px;">${budgetLabels[budget] || budget}</td></tr>` : ''}
            </table>

            <!-- Message -->
            <div style="margin-top: 28px; padding: 20px; background: #060608; border-left: 3px solid #4DFFA0;">
              <p style="color: #666680; font-size: 11px; text-transform: uppercase; letter-spacing: 0.12em; margin: 0 0 10px;">Their Message</p>
              <p style="color: #e8e8f0; font-size: 15px; line-height: 1.7; margin: 0;">${message.replace(/\n/g, '<br>')}</p>
            </div>

            <!-- Reply CTA -->
            <div style="margin-top: 28px;">
              <a href="mailto:${email}?subject=Re: Your BeNext Studio Enquiry" 
                style="display: inline-block; background: #4DFFA0; color: #060608; font-weight: 700; font-size: 14px; padding: 14px 28px; text-decoration: none;">
                Reply to ${name} →
              </a>
            </div>
          </div>

          <!-- Footer -->
          <div style="padding: 20px 40px; border-top: 1px solid #1a1a24;">
            <p style="color: #3a3a4a; font-size: 11px; margin: 0;">BeNext Studio · Dubai, UAE · Sent from benextstudio.com</p>
          </div>
        </div>
      </div>
    `

    await transporter.sendMail({
      from: `"BeNext Studio" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO || process.env.EMAIL_FROM,
      replyTo: email || undefined,
      subject: `[BeNext] ${serviceLabels[service] || 'New Enquiry'} — ${name}`,
      html,
    })

    // Auto-reply to client only if they provided an email
    if (email) {
      await transporter.sendMail({
        from: `"BeNext Studio" <${process.env.EMAIL_FROM}>`,
        to: email,
        subject: `We've received your request, ${name.split(' ')[0]} — BeNext Studio`,
        html: `
          <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background: #030509; color: #f0f4f8; padding: 40px 20px; text-align: center;">
            <div style="max-width: 500px; margin: 0 auto; background: #0a0f19; border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; overflow: hidden; text-align: left;">
              
              <div style="padding: 40px; border-bottom: 1px solid rgba(255,255,255,0.05);">
                <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px;">
                  <tr>
                    <td>
                      <div style="background: #1e6bff; width: 40px; height: 40px; border-radius: 10px; display: inline-flex; align-items: center; justify-content: center; font-weight: bold; font-size: 14px; color: #ffffff;">
                        BN
                      </div>
                    </td>
                    <td align="right">
                      <span style="color: #4da6ff; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; font-weight: bold;">Confirmation</span>
                    </td>
                  </tr>
                </table>

                <h2 style="color: #ffffff; font-size: 24px; font-weight: 700; margin: 0 0 16px; letter-spacing: -0.02em;">
                  Request Received.
                </h2>
                
                <p style="color: #8b9bb4; font-size: 16px; line-height: 1.6; margin: 0 0 24px;">
                  Hi <strong style="color: #ffffff;">${name.split(' ')[0]}</strong>, thanks for reaching out to BeNext Studio.<br><br>
                  Our team has securely received your enquiry. We review every request carefully to ensure we can deliver exceptional value for your business.
                </p>

                <div style="background: rgba(30,107,255,0.05); border: 1px solid rgba(30,107,255,0.2); border-radius: 12px; padding: 20px; margin-bottom: 30px;">
                  <p style="color: #4da6ff; font-size: 13px; font-weight: bold; margin: 0 0 8px; text-transform: uppercase; letter-spacing: 0.1em;">Next Steps</p>
                  <p style="color: #8b9bb4; font-size: 14px; margin: 0; line-height: 1.5;">
                    We will get back to you with a concrete plan, or schedule a discovery call, within <strong style="color:#ffffff;">2–4 hours</strong>.
                  </p>
                </div>

                <a href="https://wa.me/+971542711288" style="display: inline-block; background: #1e6bff; color: #ffffff; font-weight: bold; font-size: 15px; padding: 14px 28px; border-radius: 8px; text-decoration: none; text-align: center;">
                  WhatsApp Us Now →
                </a>
              </div>

              <div style="padding: 24px 40px; background: rgba(0,0,0,0.2);">
                <p style="color: #5a6b84; font-size: 12px; margin: 0; line-height: 1.5;">
                  <strong style="color: #8b9bb4;">BeNext Studio</strong><br>
                  Dubai, United Arab Emirates<br>
                  <a href="https://benextstudio.com" style="color: #4da6ff; text-decoration: none;">benextstudio.com</a>
                </p>
              </div>
              
            </div>
          </div>
        `,
      })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Email error:', err)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
