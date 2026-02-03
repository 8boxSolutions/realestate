export interface Message {
  id: number;
  sender: 'me' | 'other';
  text: string;
  time: string;
  avatar: string;
}

export interface Conversation {
  id: number;
  name: string;
  lastMessage: string;
  dateRange: string;
  status: 'Read' | 'Unread' | 'Expired';
  avatar: string;
  isActive?: boolean;
}