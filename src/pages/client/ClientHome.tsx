import React from 'react';
import PropertyFilterBar from '@/components/filtering/PropertyFilterBar';
import PropertyCard from '@/components/filtering/PropertyCard';
import { FaBed, FaCar, FaBath } from 'react-icons/fa';
import { propertiesApartmentForSale } from '@/constants/housePropertyData';

export const ClientHome: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 1. Removed "-mt-45". 
         2. Added "pt-8" (padding-top) to push content down from the header.
         3. Added "px-4" for side spacing on mobile.
      */}
      <section className="pt-8 px-4 sm:px-6 lg:px-8">
        
        {/* 1. Removed "-mt-53".
           2. Added "mx-auto max-w-7xl" to center it and limit width (like the header).
           3. Kept rounded-2xl and shadow-2xl for the card look.
        */}
        <div className="mx-auto max-w-7xl rounded-2xl bg-white shadow-lg border border-gray-100 p-4">
          <PropertyFilterBar />
        </div>

        <div className="pb-20 mt-8">
          <PropertyCard
            data={propertiesApartmentForSale}
            title="FOR SALE > APARTMENT"
            noOfHouse="91,203 Apartment For Sale"
            icon={{
              bed: <FaBed className="text-primary" size={18} />,
              bath: <FaBath className="text-primary" size={18} />,
              garage: <FaCar className="text-primary" size={18} />,
            }}
            basePath="/apartments-for-sale"
          />
        </div>
      </section>
    </div>
  );
};

export default ClientHome;