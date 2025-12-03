import React from 'react';
import Pricing from './Pricing';

interface subStepProps {
	currentSubStep?: number;
}

const PaymentAndPricingDetail: React.FC<subStepProps> = ({ currentSubStep }) => {
	return <div>{currentSubStep === 0 && <Pricing />}</div>;
};

export default PaymentAndPricingDetail;
