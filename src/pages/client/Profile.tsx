import React, { useState, useRef } from 'react';
import { Camera, Printer, ChevronDown, PenLine, Save, X } from 'lucide-react';
import { useUser } from '@/context/UserContext';

// --- Helper Component ---
interface InfoRowProps {
  label: string;
  name: string;
  value: string;
  isEditing: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  type?: 'text' | 'date' | 'number' | 'email';
  options?: string[];
}

const InfoRow: React.FC<InfoRowProps> = ({ label, name, value, isEditing, onChange, type = 'text', options }) => (
  <>
    <div className="text-gray-500 font-medium">{label}:</div>
    <div>
      {isEditing ? (
        options ? (
          <select
            name={name}
            value={value}
            onChange={onChange}
            aria-label={label}
            className="w-full max-w-md rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
          >
            {options.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        ) : (
          <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            aria-label={label}
            className="w-full max-w-md rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
          />
        )
      ) : (
        <div className="font-bold text-gray-900">{value}</div>
      )}
    </div>
  </>
);

// --- Main Profile Component ---
export const Profile: React.FC = () => {
  const { profileImage, updateProfileImage } = useUser();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [isEditing, setIsEditing] = useState(false);
  
  const [formData, setFormData] = useState({
    fullName: 'Juan Dela Cruz',
    dob: '1990-03-15',
    age: '35',
    gender: 'Male',
    civilStatus: 'Single',
    nationality: 'Filipino',
    mobile: '0917 123 4567',
    email: 'juandelacruz@gmail.com',
    address: 'Makati City, Philippines',
    occupation: 'Senior Marketing Manager',
    employer: 'ABC Global Corp.',
    monthlyIncome: '120,000',
    sourceOfIncome: 'Salary, Family Business',
    project: 'Lorem ipsum',
    propertyType: 'Lorem ipsum',
    unitNumber: 'Lorem ipsum',
    floorArea: '100 sq ft',
    parking: 'Included',
    reservationFee: '0.00',
    paymentMode: 'Bank Transfer',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      updateProfileImage(imageUrl);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="relative h-48 w-full bg-[#FF3838] md:h-64"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* --- Header Section --- */}
        <div className="relative -mt-16 mb-8 flex flex-col items-start justify-between sm:-mt-20 sm:flex-row sm:items-end">
          <div className="relative group">
            <div className="h-32 w-32 overflow-hidden rounded-full border-4 border-white bg-gray-200 sm:h-40 sm:w-40">
              <img src={profileImage} alt="Profile" className="h-full w-full object-cover"/>
            </div>

            {/* FIXED: Added aria-label to hidden input */}
            <input 
              type="file" 
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
              accept="image/*"
              aria-label="Upload Profile Picture"
            />

            <button 
              onClick={handleImageClick}
              aria-label="Change Profile Picture" 
              className="absolute bottom-1 right-1 flex h-9 w-9 items-center justify-center rounded-full bg-slate-500 text-white ring-2 ring-white transition hover:bg-slate-600 sm:bottom-2 sm:right-2"
            >
              <Camera className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-4 flex w-full justify-end gap-3 sm:mt-0 sm:w-auto sm:pb-2">
            <button aria-label="Print Profile" className="flex items-center gap-2 rounded-md bg-[#FF3838] px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700">
              <Printer className="h-4 w-4" />
              <span>Print</span>
              <ChevronDown className="h-4 w-4" />
            </button>

            {!isEditing ? (
              <button onClick={() => setIsEditing(true)} className="flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-gray-50">
                <PenLine className="h-4 w-4" />
                <span>Edit</span>
              </button>
            ) : (
              <div className="flex gap-2">
                 <button onClick={() => setIsEditing(false)} aria-label="Save Changes" className="flex items-center gap-2 rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-green-700">
                  <Save className="h-4 w-4" />
                  <span>Save</span>
                </button>
                 <button onClick={() => setIsEditing(false)} aria-label="Cancel Editing" className="flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-gray-50">
                  <X className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">{formData.fullName}</h1>
        </div>

        {/* --- CARDS --- */}
        <div className="space-y-6">
            <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-6">
                <h2 className="mb-6 text-xl font-bold text-[#FF3838]">Personal Details</h2>
                <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-[220px_1fr] items-center">
                    <InfoRow label="Full Name" name="fullName" value={formData.fullName} isEditing={isEditing} onChange={handleInputChange} />
                    <InfoRow label="Date of Birth" name="dob" value={formData.dob} isEditing={isEditing} onChange={handleInputChange} type="date" />
                    <InfoRow label="Age" name="age" value={formData.age} isEditing={isEditing} onChange={handleInputChange} type="number" />
                    <InfoRow label="Gender" name="gender" value={formData.gender} isEditing={isEditing} onChange={handleInputChange} options={['Male', 'Female', 'Other']} />
                    <InfoRow label="Civil Status" name="civilStatus" value={formData.civilStatus} isEditing={isEditing} onChange={handleInputChange} options={['Single', 'Married', 'Widowed']} />
                    <InfoRow label="Nationality" name="nationality" value={formData.nationality} isEditing={isEditing} onChange={handleInputChange} />
                </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-6">
                <h2 className="mb-6 text-xl font-bold text-[#FF3838]">Contact Details</h2>
                <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-[220px_1fr] items-center">
                    <InfoRow label="Mobile" name="mobile" value={formData.mobile} isEditing={isEditing} onChange={handleInputChange} />
                    <InfoRow label="Email Address" name="email" value={formData.email} isEditing={isEditing} onChange={handleInputChange} type="email" />
                    <InfoRow label="Present Address" name="address" value={formData.address} isEditing={isEditing} onChange={handleInputChange} />
                </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-6">
                <h2 className="mb-6 text-xl font-bold text-[#FF3838]">Employment / Financial Information</h2>
                <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-[220px_1fr] items-center">
                    <InfoRow label="Occupation" name="occupation" value={formData.occupation} isEditing={isEditing} onChange={handleInputChange} />
                    <InfoRow label="Employer/Company" name="employer" value={formData.employer} isEditing={isEditing} onChange={handleInputChange} />
                    <InfoRow label="Monthly Income" name="monthlyIncome" value={formData.monthlyIncome} isEditing={isEditing} onChange={handleInputChange} />
                    <InfoRow label="Source of Income" name="sourceOfIncome" value={formData.sourceOfIncome} isEditing={isEditing} onChange={handleInputChange} />
                </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-6">
                <h2 className="mb-6 text-xl font-bold text-[#FF3838]">Property Reservation Details</h2>
                <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-[220px_1fr] items-center">
                    <InfoRow label="Project / Development" name="project" value={formData.project} isEditing={isEditing} onChange={handleInputChange} />
                    <InfoRow label="Property Type" name="propertyType" value={formData.propertyType} isEditing={isEditing} onChange={handleInputChange} />
                    <InfoRow label="Unit / Lot Number" name="unitNumber" value={formData.unitNumber} isEditing={isEditing} onChange={handleInputChange} />
                    <InfoRow label="Floor Area" name="floorArea" value={formData.floorArea} isEditing={isEditing} onChange={handleInputChange} />
                    <InfoRow label="Parking Slot" name="parking" value={formData.parking} isEditing={isEditing} onChange={handleInputChange} />
                </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-6">
                <div className="flex items-center gap-4 mb-6">
                    <h2 className="text-xl font-bold text-[#FF3838]">Payment Details</h2>
                </div>
                <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-[220px_1fr] items-center">
                    <InfoRow label="Reservation Fee Paid" name="reservationFee" value={formData.reservationFee} isEditing={isEditing} onChange={handleInputChange} />
                    <InfoRow label="Mode of Payment" name="paymentMode" value={formData.paymentMode} isEditing={isEditing} onChange={handleInputChange} />
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Profile;