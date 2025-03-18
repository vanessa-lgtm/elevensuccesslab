
export interface Contact {
  id?: string;
  name: string;
  email: string;
  message: string;
  source?: string;
  createdAt: Date;
  updatedAt?: Date;
  optIn?: boolean;
  ipAddress?: string;
  userAgent?: string;
  tags?: string[];
}

// This would map to a database table structure
export const contactTableSchema = `
  CREATE TABLE contacts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT,
    source VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE,
    opt_in BOOLEAN DEFAULT FALSE,
    ip_address VARCHAR(45),
    user_agent TEXT,
    tags TEXT[]
  );
  
  -- Create index on email for faster lookups
  CREATE INDEX idx_contacts_email ON contacts(email);
  
  -- Add unique constraint to prevent duplicate emails
  -- ALTER TABLE contacts ADD CONSTRAINT unique_email UNIQUE (email);
`;
