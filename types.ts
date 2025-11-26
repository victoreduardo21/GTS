export enum ViewState {
  HOME = 'home',
  SERVICES = 'services',
  SYSTEMS = 'systems',
  CONTACT = 'contact',
  BLOG = 'blog'
}

export interface LeadAnalysis {
  sentiment: 'Positive' | 'Neutral' | 'Negative';
  category: 'Sales' | 'Support' | 'Partnership' | 'Other';
  priority: 'High' | 'Medium' | 'Low';
  summary: string;
  actionItem: string;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: string;
  aiAnalysis?: LeadAnalysis;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string; // Lucide icon name representation
}

export interface SystemItem {
  name: string;
  description: string;
  status: 'Live' | 'Beta' | 'Dev';
  tags: string[];
  image: string;
}