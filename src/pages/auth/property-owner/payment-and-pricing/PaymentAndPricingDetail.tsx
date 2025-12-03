import React from 'react';
import Pricing from './Pricing';
import Discount from './Discount';

interface subStepProps {
	currentSubStep?: number;
}

const PaymentAndPricingDetail: React.FC<subStepProps> = ({ currentSubStep }) => {
	return (
		<div>
			{currentSubStep === 0 && <Pricing />}
			{currentSubStep === 1 && <Discount />}
		</div>
	);
};

export default PaymentAndPricingDetail;
