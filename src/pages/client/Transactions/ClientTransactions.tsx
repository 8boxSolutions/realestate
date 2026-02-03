import React, { useState, useMemo } from 'react';
import { Search, Filter, Calendar as CalendarIcon, ChevronDown, XCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

import { initialData } from './Data';
import { StatusBadge } from './StatusBadge';
import { CalendarModal } from './CalendarModal';
import { useNavigate } from 'react-router-dom';

export const ClientTransactions: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  
  // NEW: State to store the date selected from the calendar
  const [filterDate, setFilterDate] = useState<string | null>(null);

  // Filter Logic
  const filteredData = useMemo(() => {
    return initialData.filter((item) => {
      // 1. Tab Filter
      const matchesTab = 
        activeTab === 'All' ? true :
        activeTab === 'On Going' ? ['Viewing Scheduled', 'Negotiation', 'Requesting'].includes(item.status) :
        activeTab === 'Scheduled Viewing' ? item.status === 'Viewing Scheduled' :
        activeTab === 'Done' ? item.status === 'Done' : true;

      // 2. Search Filter
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch = 
        item.clientName.toLowerCase().includes(searchLower) ||
        item.inquiryId.toLowerCase().includes(searchLower) ||
        item.propertyDetails.toLowerCase().includes(searchLower);

      // 3. Date Filter (NEW)
      // We compare the transaction's dateInquired with the selected filterDate
      const matchesDate = filterDate ? item.dateInquired === filterDate : true;

      return matchesTab && matchesSearch && matchesDate;
    });
  }, [activeTab, searchQuery, filterDate]); // Add filterDate to dependencies

  // Checkbox Logic
  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedRows(filteredData.map((item) => item.id));
    } else {
      setSelectedRows([]);
    }
  };

  const handleSelectRow = (id: string) => {
    setSelectedRows((prev) => 
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const isAllSelected = filteredData.length > 0 && selectedRows.length === filteredData.length;

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      
      {/* Header Section */}
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <h1 className="text-3xl font-bold text-gray-900">Transactions</h1>
        
        <div className="flex flex-wrap items-center gap-4">
          {/* Tabs */}
          <div className="flex gap-2">
            {['All', 'On Going', 'Scheduled Viewing', 'Done'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "rounded-md px-4 py-1.5 text-sm font-semibold transition-colors",
                  activeTab === tab ? "bg-[#E99695] text-red-900" : "text-gray-500 hover:bg-gray-100"
                )}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="h-6 w-px bg-gray-300 mx-2 hidden md:block"></div>

          <button className="flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50">
            <Filter className="h-4 w-4" />
            Filter
          </button>
          <button className="text-sm font-medium text-gray-700 hover:text-black">Export</button>
          <button className="text-sm font-medium text-gray-700 hover:text-black">Print</button>

          {/* Date Picker Trigger */}
          <div className="flex items-center gap-2">
            {filterDate ? (
               // UPDATED: Now clickable to re-open calendar
               <div className="flex items-center gap-2 rounded-full bg-red-50 px-3 py-1 text-sm font-bold text-red-700 border border-red-200">
                  <span 
                    className="cursor-pointer hover:underline"
                    onClick={() => setIsCalendarOpen(true)} // <--- CLICKING TEXT OPENS CALENDAR
                  >
                    {filterDate}
                  </span>
                  <XCircle 
                    className="h-4 w-4 cursor-pointer hover:text-red-900" 
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent the calendar from opening when clicking X
                      setFilterDate(null); // Clear the date
                    }} 
                  />
               </div>
            ) : (
               // Default State (No date selected)
               <button 
                 onClick={() => setIsCalendarOpen(true)}
                 className="flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-red-600"
               >
                 Today, January 5, 2025
                 <CalendarIcon className="h-4 w-4 text-red-500" />
               </button>
            )}
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-6 relative">
        <input 
          type="text" 
          placeholder="Search inquiry ID, client name, or property..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full rounded-full border border-gray-300 bg-white py-3 pl-6 pr-12 text-sm outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400"
        />
        <Search className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-red-500" />
      </div>

      {/* Data Table */}
      <div className="overflow-hidden rounded-xl bg-white shadow-sm border border-gray-100">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1000px]">
            <thead className="bg-gray-100/50">
              <tr>
                <th className="px-6 py-4 text-left w-12">
                  <input 
                    type="checkbox" 
                    checked={isAllSelected}
                    onChange={handleSelectAll}
                    className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500"
                  />
                </th>
                <th className="px-4 py-4 text-left text-xs font-bold uppercase text-gray-700">Inquiry ID</th>
                <th className="px-4 py-4 text-left text-xs font-bold uppercase text-gray-700">Client Name</th>
                <th className="px-4 py-4 text-left text-xs font-bold uppercase text-gray-700">Property Details</th>
                <th className="px-4 py-4 text-left text-xs font-bold uppercase text-gray-700">Date Inquired</th>
                <th className="px-4 py-4 text-left text-xs font-bold uppercase text-gray-700">Scheduled Viewing</th>
                <th className="px-4 py-4 text-left text-xs font-bold uppercase text-gray-700">Property Value</th>
                <th className="px-6 py-4 text-center text-xs font-bold uppercase text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredData.length > 0 ? (
                filteredData.map((row) => (
                  <tr key={row.id} onClick={() => navigate(`/client-transaction/${row.id}`)} 
                  className="hover:bg-gray-50/80 transition-colors cursor-pointer">
                    <td className="px-6 py-4">
                      <input 
                        type="checkbox"
                        checked={selectedRows.includes(row.id)}
                        onChange={() => handleSelectRow(row.id)}
                        className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500"
                      />
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-600">{row.inquiryId}</td>
                    <td className="px-4 py-4 text-sm font-medium text-gray-900">{row.clientName}</td>
                    <td className="px-4 py-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1 cursor-pointer hover:text-red-500">
                        {row.propertyDetails}
                        <ChevronDown className="h-3 w-3" />
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-600">{row.dateInquired}</td>
                    <td className="px-4 py-4 text-sm text-gray-600">{row.scheduledViewing}</td>
                    <td className="px-4 py-4 text-sm text-gray-600">{row.propertyValue}</td>
                    <td className="px-6 py-4 text-center">
                      <StatusBadge status={row.status} />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={8} className="px-6 py-10 text-center text-sm text-gray-500">
                    No transactions found matching your criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Calendar Modal with onDateSelect Handler */}
      <CalendarModal 
        isOpen={isCalendarOpen} 
        onClose={() => setIsCalendarOpen(false)} 
        onDateSelect={(date) => setFilterDate(date)} // <--- Set the filter
      />

    </div>
  );
};

export default ClientTransactions;