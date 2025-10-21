import { useParams } from 'react-router-dom';

import PropertiesDetailsCard from '@/components/detailsProperties/PropertyDetailsCard';
import { lotProperties } from '@/constants/PropertiesDetailsData';

// ICON
import area from '@/assets/imgs/area.svg';

const lotForRentDetails = () => {
	const { lotId } = useParams<{ lotId: string }>();
	const property = lotProperties.find((item) => item.id === lotId);

	const icons = {
		totalArea: area,
	};
	return (
		<div>
			<PropertiesDetailsCard dataDetails={property} breadCrumb="FOR RENT > LOT > " icons={icons} type="lot" />
		</div>
	);
};

export default lotForRentDetails;
