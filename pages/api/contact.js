import nodemailer from 'nodemailer';

/**
 * POST /api/contact
 *
 * Accepts form data (JSON) from the Contact Us and Schedule a Demo forms.
 * Sends an email to CONTACT_EMAIL_TO using SMTP credentials from environment variables.
 *
 * Required environment variables (set in .env.local, Vercel dashboard, or Netlify dashboard):
 *   SMTP_HOST       - e.g. smtp.gmail.com
 *   SMTP_PORT       - e.g. 587
 *   SMTP_USER       - your email address
 *   SMTP_PASS       - your email password / app password
 *   CONTACT_EMAIL_TO - where to deliver form submissions (e.g. info@tireweb.com)
 */
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const {
    name,
    Company,
    'Phone-Number': phone,
    Email,
    Message,
    // Schedule a Demo checkboxes
    Wholesale, Mobile, Retail, TireSearch, Wheels, Manufacturer, Connections, Library, Analytics,
    // Form identifier (passed by client so we know which form was used)
    formName,
  } = req.body;

  if (!Email || !name) {
    return res.status(400).json({ error: 'Name and email are required.' });
  }

  // Build the products of interest list (for demo form)
  const products = [
    Wholesale && 'Wholesale',
    Mobile && 'Mobile',
    Retail && 'Retail',
    TireSearch && 'TireSearch',
    Wheels && 'Wheels',
    Manufacturer && 'Manufacturer',
    Connections && 'Connections',
    Library && 'Library',
    Analytics && 'Analytics',
  ]
    .filter(Boolean)
    .join(', ');

  const subject =
    formName === 'demo'
      ? `New Demo Request from ${name} (${Company || 'No company'})`
      : `New Contact Form Submission from ${name}`;

  const textBody = [
    `Name: ${name}`,
    Company ? `Company: ${Company}` : '',
    phone ? `Phone: ${phone}` : '',
    `Email: ${Email}`,
    Message ? `\nMessage:\n${Message}` : '',
    products ? `\nProducts of Interest: ${products}` : '',
  ]
    .filter(Boolean)
    .join('\n');

  const htmlBody = textBody
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\n/g, '<br>');

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: parseInt(process.env.SMTP_PORT || '587') === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Tireweb Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL_TO,
      replyTo: Email,
      subject,
      text: textBody,
      html: `<pre style="font-family:sans-serif;font-size:14px">${htmlBody}</pre>`,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Email send error:', err);
    return res.status(500).json({ error: 'Failed to send email.' });
  }
}
