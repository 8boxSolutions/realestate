import React from 'react';
import Pricing from './Pricing';
import Discount from './Discount';
import SecurityDeposit from './SecurityDeposit';

interface subStepProps {
	currentSubStep?: number;
}

const PaymentAndPricingDetail: React.FC<subStepProps> = ({ currentSubStep }) => {
	return (
		<div>
			{currentSubStep === 0 && <Pricing />}
			{currentSubStep === 1 && <Discount />}
			{currentSubStep === 2 && <SecurityDeposit />}
		</div>
	);
};

export default PaymentAndPricingDetail;
