import nodemailer from 'nodemailer'

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, phone, requirement, service } = body

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Email to admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `New Contact Form Submission - ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Service Interest:</strong> ${service}</p>
        <p><strong>Requirement:</strong></p>
        <p>${requirement}</p>
        <hr>
        <p>Received at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
      `,
    }

    // Email to user
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting KaushalyaTech',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Thank You for Contacting KaushalyaTech!</h2>
          <p>Hello ${name},</p>
          <p>We have received your inquiry regarding <strong>${service}</strong> and our team will review it shortly.</p>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e40af;">What's Next?</h3>
            <ul>
              <li>Our expert will contact you within 24 hours</li>
              <li>We'll schedule a free consultation call</li>
              <li>You'll receive a detailed project proposal</li>
            </ul>
          </div>

          <p><strong>Your Message:</strong></p>
          <p style="background-color: #f9fafb; padding: 15px; border-left: 4px solid #2563eb;">
            ${requirement}
          </p>

          <p>For immediate assistance, you can:</p>
          <ul>
            <li>Call us: +91 9876543210</li>
            <li>WhatsApp: <a href="https://wa.me/919876543210">Click to Chat</a></li>
          </ul>

          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
          
          <p style="color: #6b7280; font-size: 14px;">
            Best regards,<br>
            <strong>KaushalyaTech Team</strong><br>
            Mumbai, Maharashtra, India<br>
            Email: hello@kaushalyatech.com<br>
            Phone: +91 9876543210
          </p>
        </div>
      `,
    }

    // Send emails
    await transporter.sendMail(adminMailOptions)
    await transporter.sendMail(userMailOptions)

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('Email error:', error)
    return new Response(
      JSON.stringify({ success: false, error: 'Failed to send message' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  }
}