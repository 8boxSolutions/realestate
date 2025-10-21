import { useParams } from 'react-router-dom';

import PropertiesDetailsCard from '@/components/detailsProperties/PropertyDetailsCard';
import { condoProperties } from '@/constants/PropertiesDetailsData';

// ICON
import area from '@/assets/imgs/area.svg';
import beds from '@/assets/imgs/beds.svg';
import baths from '@/assets/imgs/baths.svg';
import units from '@/assets/imgs/units.svg';

const CondoForSaleDetails = () => {
	const { condoId } = useParams<{ condoId: string }>();
	const property = condoProperties.find((item) => item.id === condoId);

	const icons = {
		totalArea: area,
		bedRooms: beds,
		bathrooms: baths,
		units: units,
	};
	return (
		<div>
			<PropertiesDetailsCard
				dataDetails={property}
				breadCrumb="FOR SALE > CONDOMINIUM > "
				icons={icons}
				showAvailable={true}
				type="condo"
			/>
		</div>
	);
};

export default CondoForSaleDetails;
