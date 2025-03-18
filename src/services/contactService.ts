
import { Contact } from '@/models/contact';
import { formatContacts } from '@/utils/contactUtils';

// This service would interact with your database
export class ContactService {
  // Store submitted contacts in memory for demo purposes
  private static contacts: Contact[] = [];

  // Method to save a contact to the database
  static async saveContact(contact: Omit<Contact, 'id' | 'createdAt'>): Promise<Contact> {
    try {
      // In a real implementation, this would connect to your database
      console.log('Saving contact to database:', contact);
      
      // Simulate API response with created contact
      const createdContact: Contact = {
        ...contact,
        id: crypto.randomUUID(),
        createdAt: new Date(),
        updatedAt: new Date()
      };
      
      // Add to in-memory collection for demo purposes
      this.contacts.push(createdContact);
      
      return createdContact;
    } catch (error) {
      console.error('Error saving contact:', error);
      throw error;
    }
  }
  
  // Method to get all contacts (would be paginated in a real implementation)
  static async getContacts(): Promise<Contact[]> {
    try {
      // In a real implementation, this would fetch from your database
      return this.contacts; // Return in-memory contacts for demo
    } catch (error) {
      console.error('Error getting contacts:', error);
      throw error;
    }
  }
  
  // Method to export contacts to CSV
  static async exportContactsToCSV(): Promise<string> {
    try {
      const contacts = await this.getContacts();
      return formatContacts(contacts, 'csv');
    } catch (error) {
      console.error('Error exporting contacts to CSV:', error);
      throw error;
    }
  }
  
  // Method to get a single contact by ID
  static async getContactById(id: string): Promise<Contact | null> {
    try {
      // In a real implementation, this would fetch from your database
      return this.contacts.find(contact => contact.id === id) || null;
    } catch (error) {
      console.error(`Error getting contact with ID ${id}:`, error);
      throw error;
    }
  }
  
  // Method to search contacts (e.g., by email or name)
  static async searchContacts(query: string): Promise<Contact[]> {
    try {
      // In a real implementation, this would search your database
      return this.contacts.filter(contact => 
        contact.name.toLowerCase().includes(query.toLowerCase()) ||
        contact.email.toLowerCase().includes(query.toLowerCase())
      );
    } catch (error) {
      console.error('Error searching contacts:', error);
      throw error;
    }
  }
  
  // Method to delete a contact
  static async deleteContact(id: string): Promise<boolean> {
    try {
      // In a real implementation, this would delete from your database
      const initialLength = this.contacts.length;
      this.contacts = this.contacts.filter(contact => contact.id !== id);
      return initialLength !== this.contacts.length;
    } catch (error) {
      console.error(`Error deleting contact with ID ${id}:`, error);
      throw error;
    }
  }
}
