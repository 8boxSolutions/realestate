import React, { useState } from 'react';
import { X, Check, Home, MapPin } from 'lucide-react';
import { CalendarModal } from '../Transactions/CalendarModal';
import { SuccessModal } from './SuccessModal';
import maryAvatar from '@/assets/mary.jpg';

export const DetailsPanel: React.FC = () => {
  // State for Calendar
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  // 2. State for Success Modal
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  const handleDateSelect = (date: string) => {
    // 3. Logic: Close Calendar -> Open Success Modal
    setIsCalendarOpen(false);
    
    // Slight delay to make the transition feel smoother (optional)
    setTimeout(() => {
        setIsSuccessOpen(true);
    }, 100);
  };

  return (
    <div className="w-80 flex-shrink-0 border-l border-gray-200 bg-white p-6">
       
       {/* ... (Existing Header and Owner Details code remains the same) ... */}
       <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-900">Property Owner Details</h2>
          <button aria-label="Close Details" className="text-gray-400 hover:text-gray-600">
            <X className="h-5 w-5" />
          </button>
       </div>

       <div className="mb-6 flex items-center gap-4">
          <div className="relative">
             <img src={maryAvatar} alt="Mary Jane" className="h-14 w-14 rounded-full object-cover" />
          </div>
          <div>
             <span className="text-xs font-bold text-red-500">Active Lead</span>
             <h3 className="text-lg font-bold text-gray-900">Mary Jane</h3>
             <p className="text-xs font-medium text-gray-600">₱9,000,000 – ₱10,000,000</p>
             <p className="text-xs text-gray-500">2BR Condo, Quezon City</p>
          </div>
       </div>

       <button 
          onClick={() => setIsCalendarOpen(true)}
          className="mb-8 w-full rounded-md bg-[#FF0000] py-3 text-sm font-bold text-white transition hover:bg-red-700"
       >
          Schedule a viewing
       </button>

       {/* ... (Existing Verified/Joined/Location details remain the same) ... */}
       <div className="space-y-4">
          <div className="flex items-start gap-3">
             <Check className="h-5 w-5 text-red-600 mt-0.5" />
             <span className="text-sm text-gray-600">This host is verified by Real Estate</span>
          </div>
          <div className="flex items-start gap-3">
             <Home className="h-5 w-5 text-gray-800 mt-0.5" />
             <span className="text-sm text-gray-600">Joined Real Estate in January 2020</span>
          </div>
          <div className="flex items-start gap-3">
             <MapPin className="h-5 w-5 text-gray-800 mt-0.5" />
             <span className="text-sm text-gray-600">Lives in Quezon City, Philippines</span>
          </div>
       </div>

       <div className="mt-6">
          <button className="text-sm font-medium text-red-600 hover:underline">
             See Profile
          </button>
       </div>

       {/* Render Calendar Modal */}
       <CalendarModal 
         isOpen={isCalendarOpen} 
         onClose={() => setIsCalendarOpen(false)} 
         onDateSelect={handleDateSelect}
       />

       {/* 4. Render Success Modal */}
       <SuccessModal 
         isOpen={isSuccessOpen}
         onClose={() => setIsSuccessOpen(false)}
       />

    </div>
  );
};