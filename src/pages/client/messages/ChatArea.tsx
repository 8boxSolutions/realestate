import React, { useState } from 'react';
import { MoreVertical, Star, Check, ImageIcon, Paperclip, Send } from 'lucide-react';
import { Message } from './types';
import maryAvatar from '@/assets/mary.jpg';

interface ChatAreaProps {
  messages: Message[];
}

export const ChatArea: React.FC<ChatAreaProps> = ({ messages }) => {
  const [messageInput, setMessageInput] = useState('');

  return (
    <div className="flex flex-1 flex-col bg-white">
      
      {/* Chat Header */}
      <div className="flex items-center justify-between border-b border-gray-100 px-8 py-4">
        <div className="flex gap-4">
           <div>
              <div className="flex items-center gap-2">
                 <h2 className="text-xl font-bold text-gray-900">Juan Dela Cruz</h2>
                 <Star className="h-4 w-4 fill-black text-black" />
              </div>
              <div className="text-xs text-gray-500">
                Quezon City, Philippines <br/>
                Joined Stayfinder in January 2020
              </div>
           </div>
        </div>
        <button aria-label="Chat Options" className="text-gray-500 hover:bg-gray-100 p-1 rounded-full">
          <MoreVertical className="h-5 w-5" />
        </button>
      </div>

      {/* Messages Feed */}
      <div className="flex-1 overflow-y-auto p-8 space-y-6">
         {/* Date Separator (Static Example) */}
         <div className="flex items-center gap-3">
            <img src={maryAvatar} className="h-10 w-10 rounded-full object-cover" alt="Mary" />
            <div className="text-sm font-medium text-gray-900">Mary</div>
         </div>

         {messages.map((msg) => (
           <div key={msg.id} className={`flex w-full ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex max-w-[80%] gap-3 ${msg.sender === 'me' ? 'flex-row-reverse' : 'flex-row'}`}>
                 
                 {msg.sender === 'me' && (
                   <img src={msg.avatar} alt="Me" className="h-10 w-10 rounded-full object-cover mt-1" />
                 )}

                 <div className={`relative rounded-2xl p-5 text-sm leading-relaxed shadow-sm
                    ${msg.sender === 'me' 
                      ? 'bg-white border border-gray-200 text-gray-600 rounded-tr-none' 
                      : 'bg-[#1E1E1E] text-white rounded-tl-none'
                    }`}
                 >
                    {msg.text}
                 </div>
              </div>
           </div>
         ))}
         <div className="text-right text-[10px] text-gray-400 pr-14 flex items-center justify-end gap-1">
            <Check className="h-3 w-3 text-red-500" /> 10:02 AM
         </div>
      </div>

      {/* Input Area */}
      <div className="p-6">
         <div className="flex items-center gap-3 rounded-full border border-gray-300 bg-white px-4 py-3 shadow-sm">
            <button aria-label="Upload Image" className="text-gray-400 hover:text-gray-600">
              <ImageIcon className="h-5 w-5" />
            </button>
            <button aria-label="Attach File" className="text-gray-400 hover:text-gray-600">
              <Paperclip className="h-5 w-5" />
            </button>
            
            <input 
              type="text" 
              placeholder="Write a message.."
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-gray-400"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
            />

            <button aria-label="Send Message" className="text-red-600 hover:text-red-700">
              <Send className="h-5 w-5 fill-red-600 transform rotate-45" />
            </button>
         </div>
      </div>

    </div>
  );
};