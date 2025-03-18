
import { Contact } from '@/models/contact';
import { ContactService } from '@/services/contactService';

// Function to handle contact form submissions
export async function handleContactSubmission(request: Request): Promise<Response> {
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const contactData = await request.json();
    
    // Basic validation
    if (!contactData.email || !contactData.name) {
      return new Response(JSON.stringify({ error: 'Name and email are required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Prepare contact data with additional metadata
    const contact: Omit<Contact, 'id' | 'createdAt'> = {
      name: contactData.name,
      email: contactData.email,
      message: contactData.message || '',
      source: contactData.source || 'contact_form',
      optIn: contactData.optIn || false,
      ipAddress: request.headers.get('x-forwarded-for') || request.headers.get('cf-connecting-ip') || 'unknown',
      userAgent: request.headers.get('user-agent') || 'unknown',
      tags: contactData.tags || ['website_inquiry']
    };
    
    // Save contact to database
    const savedContact = await ContactService.saveContact(contact);
    
    // Return success response
    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Contact saved successfully',
      contact: savedContact
    }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    });
    
  } catch (error) {
    console.error('Error processing contact submission:', error);
    
    return new Response(JSON.stringify({ 
      error: 'Failed to process contact submission',
      details: error instanceof Error ? error.message : 'Unknown error'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
