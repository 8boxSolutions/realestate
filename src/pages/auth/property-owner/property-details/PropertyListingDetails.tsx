import React from 'react';

import PropertyTypeImages from './property-type-images/PropertyTypeImages';
import Location from './Location';
import CapacityAndFacilities from './CapacityAndFacilities';
import Amenities from './Amenities';
import HouseRules from './HouseRules';
interface subStepProps {
	currentSubStep?: number;
}

const PropertyListingDetails: React.FC<subStepProps> = ({ currentSubStep }) => {
	return (
		<div>
			{currentSubStep === 0 && <PropertyTypeImages />}
			{currentSubStep === 1 && <Location />}
			{currentSubStep === 2 && <CapacityAndFacilities />}
			{currentSubStep === 3 && <Amenities />}
			{currentSubStep === 4 && <HouseRules />}
		</div>
	);
};

export default PropertyListingDetails;
