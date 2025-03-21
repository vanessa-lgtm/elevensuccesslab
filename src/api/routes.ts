
import { handleContactSubmission } from './contactsApi';
import { sendEmail } from './sendEmailApi';

// Route handler for API requests
export async function handleApiRequest(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const path = url.pathname;
  
  // Route to appropriate API handler based on path
  if (path.startsWith('/api/contacts')) {
    return handleContactSubmission(request);
  }
  
  if (path.startsWith('/api/send-email')) {
    return sendEmail(request);
  }
  
  // Return 404 for unmatched routes
  return new Response(JSON.stringify({ error: 'Not found' }), {
    status: 404,
    headers: { 'Content-Type': 'application/json' }
  });
}
