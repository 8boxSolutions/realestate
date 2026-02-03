import React from 'react';
import { Sidebar } from './Sidebar';
import { ChatArea } from './ChatArea';
import { DetailsPanel } from './DetailsPanel';
import { conversations, chatHistory } from './data';

export const ClientMessages: React.FC = () => {
  return (
    <div className="flex h-[calc(100vh-80px)] w-full bg-white">
      <Sidebar conversations={conversations} />
      <ChatArea messages={chatHistory} />
      <DetailsPanel />
    </div>
  );
};

export default ClientMessages;