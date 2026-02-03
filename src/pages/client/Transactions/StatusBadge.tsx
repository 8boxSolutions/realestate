import React from 'react';
import { TransactionStatus } from './Types';

export const StatusBadge = ({ status }: { status: TransactionStatus }) => {
  const styles: Record<TransactionStatus, string> = {
    'Viewing Scheduled': 'bg-orange-400 text-white',
    'Not Interested': 'bg-gray-400 text-white',
    'Negotiation': 'bg-blue-500 text-white',
    'Done': 'bg-green-300 text-green-900',
    'Requesting': 'bg-purple-300 text-purple-900',
  };

  return (
    // Added 'whitespace-nowrap' to prevent line breaks
    <span className={`rounded-md px-3 py-1 text-xs font-bold whitespace-nowrap ${styles[status]}`}>
      {status}
    </span>
  );
};