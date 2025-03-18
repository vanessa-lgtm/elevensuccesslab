
/**
 * Validates an email address format
 * @param email Email address to validate
 * @returns Boolean indicating if the email is valid
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Formats contact data for display or export
 * @param contacts Array of contact objects
 * @param format Output format (csv, json, etc.)
 * @returns Formatted contact data
 */
export function formatContacts(contacts: any[], format: 'csv' | 'json' = 'json'): string {
  if (format === 'csv') {
    // Convert contacts to CSV format
    const headers = 'Name,Email,Message,Source,Created At,Opt-In\n';
    const rows = contacts.map(contact => {
      // Clean up values to avoid CSV parsing issues
      const name = contact.name?.replace(/"/g, '""') || '';
      const email = contact.email?.replace(/"/g, '""') || '';
      const message = (contact.message || '').replace(/"/g, '""').replace(/\n/g, ' ');
      const source = contact.source?.replace(/"/g, '""') || '';
      const createdAt = contact.createdAt ? new Date(contact.createdAt).toISOString() : '';
      const optIn = contact.optIn ? 'Yes' : 'No';
      
      return `"${name}","${email}","${message}","${source}","${createdAt}","${optIn}"`;
    }).join('\n');
    
    return headers + rows;
  }
  
  // Default to JSON format
  return JSON.stringify(contacts, null, 2);
}

/**
 * Anonymizes contact data for GDPR compliance
 * @param contact Contact to anonymize
 * @returns Anonymized contact data
 */
export function anonymizeContact(contact: any): any {
  return {
    ...contact,
    name: '[Redacted]',
    email: `redacted-${contact.id?.substring(0, 8) || 'unknown'}@example.com`,
    ipAddress: 'redacted',
    userAgent: 'redacted'
  };
}

/**
 * Groups contacts by source or other criteria
 * @param contacts Array of contact objects
 * @param groupBy Property to group by
 * @returns Object with contacts grouped by the specified property
 */
export function groupContacts(contacts: any[], groupBy: string = 'source'): Record<string, any[]> {
  return contacts.reduce((groups, contact) => {
    const key = contact[groupBy] || 'unknown';
    groups[key] = groups[key] || [];
    groups[key].push(contact);
    return groups;
  }, {} as Record<string, any[]>);
}
