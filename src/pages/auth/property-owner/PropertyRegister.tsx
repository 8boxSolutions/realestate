import { useState } from 'react';
import { Button } from '@/components';
import Logo from '@/Logo';
import CreateAccountStep from './create-account/CreateAccountStep';
import BusinessInfoStep from './business-info/BusinessInfoStep';
import OwnershipCompliance from './ownership-compliance/OwnershipCompliance';
import PropertyListingDetails from './property-details/PropertyListingDetails';

const steps = [
	{
		title: 'Create Account',
		substeps: ['Basic', 'Verification'],
	},
	{ title: 'Provide Business & Personal Information' },
	{ title: 'Ownership & Compliance Documents' },
	{
		title: 'Property Listing Details',
		substeps: [
			'Property Type & Images',
			'Location',
			'Max Capacity and Facilities',
			'Amenities',
			'House Rules (For Rent)',
		],
	},
	{ title: 'Payment and Pricing', substeps: ['Pricing Setup', 'Discounts', 'Security Deposit', 'Payment Method'] },
	{ title: 'Final Review and Verification' },
];

const PropertyRegister = () => {
	const [currentStep, setCurrentStep] = useState<number>(0);
	const [currentSubstep, setCurrentSubstep] = useState<number>(0);

	const handleNext = () => {
		if (steps[currentStep].substeps) {
			if (currentSubstep < steps[currentStep].substeps.length - 1) {
				setCurrentSubstep((prev) => prev + 1);
				return;
			}
		}
		setCurrentStep((prev) => prev + 1);
		setCurrentSubstep(0);
	};

	const handlePrevious = () => {
		if (steps[currentStep].substeps && currentSubstep > 0) {
			setCurrentSubstep((prev) => prev - 1);
			return;
		}
		if (currentStep > 0) {
			setCurrentStep((prev) => prev - 1);
			const prevHasSub = steps[currentStep - 1].substeps;
			setCurrentSubstep(prevHasSub ? prevHasSub.length - 1 : 0);
		}
	};

	const stepData = steps[currentStep];
	const substeps = stepData.substeps || [];

	return (
		<div className="relative min-h-screen w-full bg-[#FAFAFA]">
			{/* LEFT SIDEBAR */}
			<aside className="fixed top-0 left-0 h-screen w-100 overflow-y-auto bg-white px-5 py-10">
				<Logo className="-mt-10 size-50" />

				<h1 className="mb-9 text-2xl font-semibold">Property Owner – Account Setup & Verification</h1>

				{steps.map((s, index) => (
					<div key={index}>
						<h3 className={`mb-6 text-xl font-medium ${index === currentStep ? 'text-red-500' : 'text-[#23232380]'}`}>
							Step {index + 1}: {s.title}
						</h3>

						{index === currentStep && s.substeps && (
							<ul className="-mt-3 mb-6 space-y-2">
								{s.substeps.map((sub, subIndex) => (
									<li
										key={subIndex}
										className={`text-md ${subIndex === currentSubstep ? 'font-semibold' : 'text-[#23232380]'}`}
									>
										{sub}
									</li>
								))}
							</ul>
						)}
					</div>
				))}
			</aside>

			{/* MAIN CONTENT */}
			<main className="ml-100 px-10 py-10">
				<h2 className="pt-6 text-xl font-bold text-primary">
					{stepData.title} {substeps.length > 0 && `/ ${substeps[currentSubstep]}`}
				</h2>

				{/* Step Components */}
				{currentStep === 0 && <CreateAccountStep currentSubStep={currentSubstep} />}
				{currentStep === 1 && <BusinessInfoStep />}
				{currentStep === 2 && <OwnershipCompliance />}
				{currentStep === 3 && <PropertyListingDetails currentSubStep={currentSubstep} />}

				{/* Navigation Buttons */}
				<div className="flex h-full justify-between py-20">
					<Button variant="outline" className="font-semibold text-primary">
						Back
					</Button>
					<div className="space-x-5">
						{currentStep === 3 && steps[3]?.substeps && currentSubstep === steps[3].substeps.length - 1 ? (
							<Button
								className="bg-[#232323]"
								onClick={() => {
									setCurrentStep((prev) => prev + 1);
									setCurrentSubstep(0);
								}}
							>
								Skip (My property is for sale)
							</Button>
						) : (
							<Button
								className="bg-[#232323]"
								onClick={handlePrevious}
								disabled={currentStep === 0 && currentSubstep === 0}
							>
								Previous
							</Button>
						)}

						<Button onClick={handleNext} disabled={currentStep === steps.length - 1}>
							Next Step
						</Button>
					</div>
				</div>
			</main>
		</div>
	);
};

export default PropertyRegister;
