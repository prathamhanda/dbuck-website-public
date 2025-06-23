import nodemailer from 'nodemailer';
import { ContactFormData, EmailConfig } from '../types/index.js';

// Create email transporter
const createTransporter = () => {
  const config: EmailConfig = {
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.EMAIL_PORT || '587'),
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER || '',
      pass: process.env.EMAIL_PASS || ''
    }
  };
  return nodemailer.createTransport(config);
};

// Generate admin notification email template
const generateAdminEmailTemplate = (data: ContactFormData): string => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission - DBuck</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #8B5CF6, #A855F7); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
        .field { margin-bottom: 20px; }
        .label { font-weight: bold; color: #555; display: block; margin-bottom: 5px; }
        .value { background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #8B5CF6; }
        .message-content { min-height: 100px; }
        .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
        .timestamp { color: #888; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>🎯 New Contact Form Submission</h1>
        <p>DBuck Website - Accreditation Platform</p>
      </div>
      
      <div class="content">
        <div class="field">
          <span class="label">👤 Name:</span>
          <div class="value">${data.name}</div>
        </div>
        
        <div class="field">
          <span class="label">📧 Email:</span>
          <div class="value">${data.email}</div>
        </div>
        
        <div class="field">
          <span class="label">💬 Message:</span>
          <div class="value message-content">${data.message.replace(/\n/g, '<br>')}</div>
        </div>
        
        <div class="footer">
          <p class="timestamp">Received: ${new Date().toLocaleString()}</p>
          <p>Please respond to this inquiry promptly to maintain excellent customer service.</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

// Generate user confirmation email template
const generateUserConfirmationTemplate = (data: ContactFormData): string => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Thank You - DBuck</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #8B5CF6, #A855F7); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
        .highlight { color: #8B5CF6; font-weight: bold; }
        .summary { background: white; padding: 20px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #8B5CF6; }
        .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
        .cta { background: #8B5CF6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block; margin: 20px 0; }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>🎯 Thank You for Contacting DBuck!</h1>
        <p>Transforming Accreditation with AI</p>
      </div>
      
      <div class="content">
        <p>Dear <span class="highlight">${data.name}</span>,</p>
        
        <p>Thank you for your interest in DBuck! We've received your message and our team will review it carefully.</p>
        
        <div class="summary">
          <h3>📋 Your Message Summary:</h3>
          <p><strong>From:</strong> ${data.email}</p>
          <p><strong>Sent:</strong> ${new Date().toLocaleString()}</p>
          <p><strong>Message:</strong> ${data.message.substring(0, 100)}${data.message.length > 100 ? '...' : ''}</p>
        </div>
        
        <p>Our accreditation specialists typically respond within <span class="highlight">24-48 hours</span>. In the meantime, feel free to explore more about our AI-powered accreditation solutions.</p>
        
        <div style="text-align: center;">
          <a href="${process.env.FRONTEND_URL || 'https://dbuck.com'}" class="cta">Visit Our Website</a>
        </div>
        
        <p>If you have any urgent questions, please don't hesitate to contact us directly.</p>
        
        <div class="footer">
          <p><strong>DBuck Team</strong><br>
          Revolutionizing institutional accreditation with AI</p>
          <p style="font-size: 12px; color: #888;">
            This is an automated confirmation email. Please do not reply directly to this message.
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
};

// Send contact email function
export const sendContactEmail = async (data: ContactFormData): Promise<void> => {
  try {
    const transporter = createTransporter();
    
    // Verify transporter configuration
    await transporter.verify();
    
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@dbuck.com';
    const fromEmail = process.env.EMAIL_FROM || process.env.EMAIL_USER;
    
    // Send email to admin
    const adminMailOptions = {
      from: fromEmail,
      to: adminEmail,
      subject: `🎯 New Contact Form Submission - ${data.name}`,
      html: generateAdminEmailTemplate(data),
      text: `New contact form submission from ${data.name} (${data.email}): ${data.message}`
    };
    
    // Send confirmation email to user
    const userMailOptions = {
      from: fromEmail,
      to: data.email,
      subject: '🎯 Thank you for contacting DBuck - We\'ll be in touch soon!',
      html: generateUserConfirmationTemplate(data),
      text: `Dear ${data.name}, thank you for contacting DBuck! We've received your message and will respond within 24-48 hours.`
    };
    
    // Send both emails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions)
    ]);
    
    console.log('✅ Contact emails sent successfully:', {
      admin: adminEmail,
      user: data.email,
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('❌ Email sending failed:', error);
    throw new Error('Failed to send email. Please check your email configuration.');
  }
};
