import React from 'react';
import BasicAccount from './BasicAccount';
import VerifiicationCode from './VerifiicationCode';

interface subStepProps {
	currentSubStep?: number;
}

const CreateAccountStep: React.FC<subStepProps> = ({ currentSubStep }) => {
	return (
		<div>
			{currentSubStep === 0 && <BasicAccount />}
			{currentSubStep === 1 && <VerifiicationCode />}
		</div>
	);
};

export default CreateAccountStep;
