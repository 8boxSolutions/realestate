import { Transaction } from './Types';

export const initialData: Transaction[] = [
  { id: '1', inquiryId: 'IQ000000001235', clientName: 'Juan Dela Cruz', propertyDetails: '2BR Condo, 100sqm, Makati', dateInquired: 'January 10, 2025', scheduledViewing: 'January 20, 2025', propertyValue: '₱ 10,000,000.00', status: 'Viewing Scheduled' },
  { id: '2', inquiryId: 'IQ000000009988', clientName: 'Maria Clara', propertyDetails: 'House & Lot, 150sqm, Taguig', dateInquired: 'January 12, 2025', scheduledViewing: 'January 22, 2025', propertyValue: '₱ 15,500,000.00', status: 'Not Interested' },
  { id: '3', inquiryId: 'IQ000000005544', clientName: 'Jose Rizal', propertyDetails: 'Commercial Unit, QC', dateInquired: 'January 05, 2025', scheduledViewing: 'January 15, 2025', propertyValue: '₱ 25,000,000.00', status: 'Negotiation' },
  { id: '4', inquiryId: 'IQ000000001122', clientName: 'Andres Bonifacio', propertyDetails: 'Studio Unit, Pasay', dateInquired: 'January 10, 2025', scheduledViewing: 'January 24, 2025', propertyValue: '₱ 5,000,000.00', status: 'Negotiation' },
  { id: '5', inquiryId: 'IQ000000003322', clientName: 'Gabriela Silang', propertyDetails: 'Townhouse, Manila', dateInquired: 'December 20, 2024', scheduledViewing: 'January 05, 2025', propertyValue: '₱ 8,000,000.00', status: 'Done' },
  { id: '6', inquiryId: 'IQ000000007766', clientName: 'Emilio Aguinaldo', propertyDetails: 'Lot Only, Cavite', dateInquired: 'January 15, 2025', scheduledViewing: 'January 25, 2025', propertyValue: '₱ 3,500,000.00', status: 'Negotiation' },
  { id: '7', inquiryId: 'IQ000000008899', clientName: 'Apolinario Mabini', propertyDetails: '1BR Condo, Mandaluyong', dateInquired: 'January 18, 2025', scheduledViewing: 'January 28, 2025', propertyValue: '₱ 7,200,000.00', status: 'Viewing Scheduled' },
  { id: '8', inquiryId: 'IQ000000004455', clientName: 'Antonio Luna', propertyDetails: 'Beach House, Batangas', dateInquired: 'January 14, 2025', scheduledViewing: 'January 30, 2025', propertyValue: '₱ 18,000,000.00', status: 'Requesting' },
];