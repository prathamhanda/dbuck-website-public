import { Router, Request, Response } from 'express';
import Joi from 'joi';
import { sendContactEmail } from '../services/emailService.js';
import { ContactFormData } from '../types/index';

const router = Router();

// Validation schema
const contactSchema = Joi.object({
  name: Joi.string()
    .trim()
    .min(2)
    .max(100)
    .required()
    .messages({
      'string.empty': 'Name is required',
      'string.min': 'Name must be at least 2 characters long',
      'string.max': 'Name must not exceed 100 characters'
    }),
  email: Joi.string()
    .email()
    .trim()
    .lowercase()
    .required()
    .messages({
      'string.empty': 'Email is required',
      'string.email': 'Please provide a valid email address'
    }),
  message: Joi.string()
    .trim()
    .min(10)
    .max(2000)
    .required()
    .messages({
      'string.empty': 'Message is required',
      'string.min': 'Message must be at least 10 characters long',
      'string.max': 'Message must not exceed 2000 characters'
    })
});

// POST /api/contact
router.post('/contact', async (req: Request, res: Response): Promise<void> => {
  try {
    // Validate request body
    const { error, value } = contactSchema.validate(req.body);
    
    if (error) {
      res.status(400).json({
        success: false,
        error: 'Validation failed',
        details: error.details.map(detail => ({
          field: detail.path[0],
          message: detail.message
        }))
      });
      return;
    }

    const contactData: ContactFormData = value;

    // Send email
    await sendContactEmail(contactData);

    // Success response
    res.status(200).json({
      success: true,
      message: 'Thank you for your message! We\'ll get back to you soon.',
      data: {
        name: contactData.name,
        email: contactData.email,
        timestamp: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('Contact form error:', error);
    
    res.status(500).json({
      success: false,
      error: 'Failed to send message. Please try again later.',
      ...(process.env.NODE_ENV === 'development' && { 
        details: error instanceof Error ? error.message : 'Unknown error' 
      })
    });
  }
});

export { router as contactRoutes };
