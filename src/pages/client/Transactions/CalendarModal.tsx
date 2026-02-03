import React from 'react';
import { X } from 'lucide-react';
import { format } from 'date-fns';
import { Calendar } from '@/components/ui/calendar'; // Ensure this path matches your shadcn component

interface CalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDateSelect: (date: string) => void;
}

export const CalendarModal = ({ isOpen, onClose, onDateSelect }: CalendarModalProps) => {
  if (!isOpen) return null;

  const handleSelect = (date: Date | undefined) => {
    if (date) {
      // Format the date to match your previous string format: "January 10, 2025"
      const formattedDate = format(date, 'MMMM dd, yyyy');
      onDateSelect(formattedDate);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="rounded-xl bg-white p-4 shadow-2xl border border-gray-100">
        
        {/* Header with Close Button */}
        <div className="mb-2 flex items-center justify-end">
          <button 
            onClick={onClose}
            className="rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Shadcn Calendar Component */}
        <Calendar
          mode="single"
          onSelect={handleSelect}
          className="rounded-md border-none shadow-none"
          classNames={{
            // Customizing to match your RED theme
            day_selected: "bg-[#FF0000] text-white hover:bg-red-600 focus:bg-red-600",
            day_today: "bg-gray-100 text-gray-900",
          }}
        />
      </div>
    </div>
  );
};