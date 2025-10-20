import React from 'react';
import type { Details } from '@/constants/propertyDetails';

type props = {
	desc?: Details;
};

const DescriptionDetails: React.FC<props> = ({ desc }) => {
	return (
		<div className="max-w-7xl space-y-4">
			<h1 className="text-3xl text-primary">Description</h1>
			<p className="text-md">{desc?.description}</p>
		</div>
	);
};

export default DescriptionDetails;
