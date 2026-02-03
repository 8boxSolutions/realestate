import React from 'react';
import { X, Check } from 'lucide-react';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative w-[400px] rounded-2xl bg-white p-8 shadow-2xl flex flex-col items-center text-center">
        
        {/* Close Icon (Top Right) */}
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Green Check Icon */}
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#108A56]">
           <Check className="h-8 w-8 text-white stroke-[3]" />
        </div>

        {/* Title */}
        <h2 className="mb-2 text-xl font-bold text-[#FF0000]">
          Request Submitted!
        </h2>

        {/* Description */}
        <p className="mb-6 text-sm text-gray-600 leading-relaxed">
          You have successfully submitted your request for viewing. Please wait for approval.
        </p>

        {/* Okay Button */}
        <button 
          onClick={onClose}
          className="rounded-full bg-[#2A2A2A] px-10 py-2.5 text-sm font-semibold text-white hover:bg-black transition-colors"
        >
          Okay
        </button>

      </div>
    </div>
  );
};