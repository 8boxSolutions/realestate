import { Conversation, Message } from './types';
import maryAvatar from '@/assets/mary.jpg';

export const conversations: Conversation[] = [
  {
    id: 1,
    name: 'Mary Jane',
    lastMessage: 'You: Lorem ipsum dolor sit amet, consectetur...',
    dateRange: 'January 1, 2025 to January 6, 2025',
    status: 'Read',
    avatar: maryAvatar,
    isActive: true,
  },
  {
    id: 2,
    name: 'Mark',
    lastMessage: 'You: Lorem ipsum dolor sit amet, consectetur...',
    dateRange: 'January 1, 2025 to January 6, 2025',
    status: 'Read',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&q=80',
  },
];

export const chatHistory: Message[] = [
  {
    id: 1,
    sender: 'other',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    time: '10:02 AM',
    avatar: 'https://images.unsplash.com/photo-1554151228-14d9def656ec?auto=format&fit=crop&w=100&q=80',
  },
  {
    id: 2,
    sender: 'other',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    time: '10:02 AM',
    avatar: 'https://images.unsplash.com/photo-1554151228-14d9def656ec?auto=format&fit=crop&w=100&q=80',
  },
  {
    id: 3,
    sender: 'me',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    time: '10:02 AM',
    avatar: 'https://github.com/shadcn.png',
  },
];