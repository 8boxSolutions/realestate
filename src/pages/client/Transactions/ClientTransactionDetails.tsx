import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight, MessageSquare, Phone, ChevronDown, ChevronUp } from 'lucide-react';
import { StatusBadge } from './StatusBadge'; 
import { myPropertyListings } from './ListingData'; 
import Profilepic from "@/assets/profilepic.jpg";

export const ClientTransactionDetails: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // 1. STATE: Manage Dropdown and Selection
  const [isListingsOpen, setIsListingsOpen] = useState(false);
  const [selectedListing, setSelectedListing] = useState(myPropertyListings[0]);

  // Mock Data
  const details = {
    id: id,
    inquiryId: '000000000123456',
    date: 'January 27',
    propertyName: selectedListing.name, 
    propertyLocation: 'Tagaytay, Philippines',
    price: '₱ 35,000,000.00',
    owner: {
      name: 'Mary Jane',
      location: 'Quezon City, Philippines',
      image: Profilepic, 
      status: 'Viewing Scheduled' as const,
    },
    transaction: {
      dateInquired: 'December 28, 2024',
      viewingSchedule: 'January 27, 2025',
      budget: '₱ 30,000,000.00',
      paymentMethod: 'Bank Transfer',
      downpayment: '₱ 30,000.00',
    },
    notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    phone: '09123456789'
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(details.phone);
    alert('Phone number copied!');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      
      {/* Back Button */}
      <button 
        onClick={() => navigate(-1)} 
        className="mb-6 flex items-center gap-2 text-sm font-bold text-gray-700 hover:text-black"
      >
        <ArrowLeft className="h-4 w-4" />
        Back
      </button>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-[1fr_350px]">
        
        {/* --- LEFT COLUMN (Main Content) --- */}
        <div className="space-y-6">
          
          {/* Red Date Banner */}
          <div className="flex items-center justify-between rounded-t-xl bg-[#FF0000] px-6 py-3 text-white">
            <div className="flex items-center gap-4">
              <span className="font-bold">Date</span>
              <span className="rounded bg-white/20 px-3 py-1 text-sm font-medium">{details.date}</span>
            </div>
            <div className="flex gap-2">
              <button className="rounded-full p-1 hover:bg-white/20"><ChevronLeft className="h-5 w-5" /></button>
              <button className="rounded-full p-1 hover:bg-white/20"><ChevronRight className="h-5 w-5" /></button>
            </div>
          </div>

          {/* 3. UPDATED HEADER: Dropdown Menu */}
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center relative z-20">
            <h1 className="text-2xl font-bold text-gray-900">Client Inquiry Detail</h1>
            
            <div className="relative">
              {/* Dropdown Trigger Button */}
              <button 
                onClick={() => setIsListingsOpen(!isListingsOpen)}
                className="flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-red-500">Listings</span>
                <span className="font-semibold text-gray-700">{selectedListing.name}</span>
                {isListingsOpen ? <ChevronUp className="h-4 w-4 text-gray-400" /> : <ChevronDown className="h-4 w-4 text-gray-400" />}
              </button>

              {/* Dropdown Menu Body */}
              {isListingsOpen && (
                <div className="absolute right-0 top-full mt-2 w-80 rounded-xl border border-gray-200 bg-white p-4 shadow-xl">
                  <h3 className="mb-4 text-sm font-bold text-red-600">Your Listings</h3>
                  
                  <div className="flex flex-col gap-3">
                    {myPropertyListings.map((item) => (
                      <div 
                        key={item.id} 
                        onClick={() => {
                          setSelectedListing(item);
                          setIsListingsOpen(false);
                        }}
                        className="flex cursor-pointer items-center gap-4 rounded-lg p-2 hover:bg-gray-50 transition-colors"
                      >
                        {/* List Item Thumbnail */}
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="h-12 w-12 rounded-md object-cover bg-gray-200"
                        />
                        
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-gray-900">{item.name}</span>
                          <span className={`text-xs ${item.statusColor || 'text-gray-500'}`}>
                            {item.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Inquiry ID Card */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
             <div className="flex items-center justify-between">
                <span className="font-bold text-red-600">Inquiry ID</span>
                <span className="font-bold text-gray-900 tracking-wider">{details.inquiryId}</span>
             </div>
          </div>

          {/* Property Details Card */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-bold text-red-600">Property Details</h2>
            <div className="flex flex-col gap-4 bg-gray-50 p-4 rounded-xl sm:flex-row sm:items-center">
              {/* 4. DYNAMIC THUMBNAIL: Shows the selected listing's image */}
              <div className="h-20 w-24 shrink-0 overflow-hidden rounded-lg bg-gray-300">
                <img src={selectedListing?.image || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=100&q=80'} 
                alt="Property" className="h-full w-full object-cover" />
              </div>
              
              <div className="flex-1">
                <div className="text-xs text-red-500 mb-1">{details.propertyLocation}</div>
                <div className="font-bold text-gray-900">{details.propertyName}</div>
                <div className="text-sm text-gray-500">{details.price}</div>
              </div>

              <button className="rounded-md bg-[#FF9F9F] px-4 py-2 text-xs font-bold text-red-900 hover:bg-red-300 transition-colors">
                See more
              </button>
            </div>
          </div>

          {/* Owner Details Card */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-bold text-red-600">Owners Details</h2>
            
            <div className="mb-6 flex items-center justify-between rounded-lg bg-gray-50 p-4">
               <div className="flex items-center gap-4">
                  <img src={details.owner.image} alt={details.owner.name} className="h-12 w-12 rounded-full object-cover" />
                  <div>
                    <div className="font-bold text-gray-900">{details.owner.name}</div>
                    <div className="text-xs text-gray-500">{details.owner.location}</div>
                  </div>
               </div>
               <StatusBadge status={details.owner.status} />
            </div>

            <div className="grid gap-y-4 text-sm">
               <div className="grid grid-cols-[160px_1fr]">
                 <span className="text-gray-500">Date Inquired:</span>
                 <span className="font-bold text-gray-900">{details.transaction.dateInquired}</span>
               </div>
               <div className="grid grid-cols-[160px_1fr]">
                 <span className="text-gray-500">Viewing Schedule:</span>
                 <span className="font-bold text-gray-900">{details.transaction.viewingSchedule}</span>
               </div>
               <div className="grid grid-cols-[160px_1fr]">
                 <span className="text-gray-500">Preferred budget:</span>
                 <span className="font-bold text-gray-900">{details.transaction.budget}</span>
               </div>
               <div className="grid grid-cols-[160px_1fr]">
                 <span className="text-gray-500">Payment Method:</span>
                 <span className="font-bold text-gray-900">{details.transaction.paymentMethod}</span>
               </div>
               <div className="grid grid-cols-[160px_1fr]">
                 <span className="text-gray-500">Downpayment:</span>
                 <span className="font-bold text-gray-900">{details.transaction.downpayment}</span>
               </div>
            </div>
          </div>

          {/* Requirements Card */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
             <h2 className="mb-4 text-lg font-bold text-red-600">Requirements</h2>
             
             <div className="rounded-xl bg-gray-50 p-5 mb-4">
                <div className="font-bold text-gray-900 mb-2">Applicant's Message / Notes</div>
                <p className="text-sm text-gray-600 leading-relaxed mb-2">
                  {details.notes}
                </p>
                <button className="text-sm font-medium text-red-500 hover:underline">Read more</button>
             </div>

             <div className="flex items-center justify-between rounded-xl bg-gray-50 p-5">
                <span className="font-bold text-gray-900">Phone</span>
                <div className="flex items-center gap-3">
                   <span className="font-bold text-gray-900">{details.phone}</span>
                   <button 
                     onClick={handleCopyPhone}
                     className="rounded bg-[#FF9F9F] px-3 py-1 text-xs font-bold text-red-900 hover:bg-red-300 transition-colors"
                   >
                     Copy
                   </button>
                </div>
             </div>
          </div>

        </div>

        {/* --- RIGHT COLUMN (Sidebar) --- */}
        <div className="space-y-6">
           <div className="sticky top-6 rounded-xl border border-gray-100 bg-white p-6 shadow-lg">
              <h3 className="mb-2 text-center font-bold text-gray-900">Contact your Client</h3>
              <p className="mb-6 text-center text-xs text-gray-500">
                Get in touch with <span className="font-bold text-gray-900">{details.owner.name}</span> to discuss their viewing request or provide updates on their inquiry.
              </p>

              <div className="flex gap-3">
                <button onClick={() => navigate('/client-messages')}
                className="flex flex-1 flex-col items-center justify-center gap-2 rounded-xl border border-gray-200 p-4 hover:border-red-200 hover:bg-red-50 transition-all">
                  
                  <div className="rounded-full bg-[#FF9F9F] p-2 text-red-600">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-bold text-red-600">Message Client</span>
                </button>

                <button className="flex flex-1 flex-col items-center justify-center gap-2 rounded-xl border border-gray-200 p-4 hover:border-red-200 hover:bg-red-50 transition-all">
                  <div className="rounded-full flex items-center justify-center p-2">
                    <Phone className="h-5 w-5 text-red-600 fill-red-600" />
                  </div>
                  <span className="text-xs font-bold text-red-600">Contact Client</span>
                </button>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default ClientTransactionDetails;