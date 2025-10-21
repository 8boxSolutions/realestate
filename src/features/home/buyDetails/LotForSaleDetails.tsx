import { useParams } from 'react-router-dom';

import PropertiesDetailsCard from '@/components/detailsProperties/PropertyDetailsCard';
import { lotProperties } from '@/constants/PropertiesDetailsData';

// ICON
import area from '@/assets/imgs/area.svg';

const LotForSaleDetails = () => {
	const { lotId } = useParams<{ lotId: string }>();
	const property = lotProperties.find((item) => item.id === lotId);

	const icons = {
		totalArea: area,
	};
	return (
		<div>
			<PropertiesDetailsCard dataDetails={property} breadCrumb="FOR SALE > LOT > " icons={icons} type="lot" />
		</div>
	);
};

export default LotForSaleDetails;
