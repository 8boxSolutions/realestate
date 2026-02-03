export type TransactionStatus = 'Viewing Scheduled' | 'Not Interested' | 'Negotiation' | 'Done' | 'Requesting';

export interface Transaction {
  id: string;
  inquiryId: string;
  clientName: string;
  propertyDetails: string;
  dateInquired: string;
  scheduledViewing: string;
  propertyValue: string;
  status: TransactionStatus;
}