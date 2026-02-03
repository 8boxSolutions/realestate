import React, { useState } from 'react';
import { MoreVertical } from 'lucide-react';
import { Conversation } from './types';

interface SidebarProps {
  conversations: Conversation[];
}

export const Sidebar: React.FC<SidebarProps> = ({ conversations }) => {
  const [activeTab, setActiveTab] = useState<'All' | 'Unread'>('All');

  return (
    <div className="w-80 flex-shrink-0 border-r border-gray-200 bg-white">
      {/* Header */}
      <div className="flex items-center justify-between p-6 pb-4">
        <h1 className="text-2xl font-bold text-gray-900">All messages</h1>
        <button aria-label="Options" className="text-gray-500 hover:bg-gray-100 p-1 rounded-full">
          <MoreVertical className="h-5 w-5" />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 px-6 pb-6">
        <button
          onClick={() => setActiveTab('All')}
          className={`rounded-full px-4 py-1 text-sm font-medium transition-colors ${
            activeTab === 'All' ? 'bg-red-600 text-white' : 'text-gray-500 hover:bg-gray-100'
          }`}
        >
          All
        </button>
        <button
          onClick={() => setActiveTab('Unread')}
          className={`rounded-full px-4 py-1 text-sm font-medium transition-colors ${
            activeTab === 'Unread' ? 'bg-red-600 text-white' : 'text-gray-500 hover:bg-gray-100'
          }`}
        >
          Unread
        </button>
      </div>

      {/* List */}
      <div className="flex flex-col overflow-y-auto">
        {conversations.map((conv) => (
          <div 
            key={conv.id} 
            className={`relative flex cursor-pointer gap-3 p-6 transition-colors hover:bg-gray-50 ${conv.isActive ? 'bg-gray-50' : ''}`}
          >
            <img src={conv.avatar} alt={conv.name} className="h-12 w-12 rounded-full object-cover" />
            <div className="flex-1 overflow-hidden">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-gray-900">{conv.name}</h3>
                {conv.id === 2 && <span className="text-xs font-bold text-gray-900">Expired</span>}
              </div>
              <p className="truncate text-xs text-gray-500 mt-1">{conv.lastMessage}</p>
              <p className="mt-1 text-[10px] text-gray-400">{conv.dateRange}</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-[10px] text-gray-400">Read</span>
                <span className="text-[10px] text-gray-400">10:04 AM</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};