import { useParams } from 'react-router-dom';
import { commercialProperties } from '@/constants/buyPropertiesDetails';
import PropertiesDetailsCard from '@/components/detailsProperties/PropertyDetailsCard';

// ICON
import area from '@/assets/imgs/area.svg';
import unit from '@/assets/imgs/units.svg';

const CommercialForRentDetails = () => {
	const { commercialId } = useParams<{ commercialId: string }>();
	const property = commercialProperties.find((item) => item.id === commercialId);

	const icons = {
		totalArea: area,
		units: unit,
	};
	return (
		<div>
			<PropertiesDetailsCard
				dataDetails={property}
				breadCrumb="FOR RENT > COMMERCIAL > "
				icons={icons}
				showAvailable={true}
				type="commercial"
			/>
		</div>
	);
};

export default CommercialForRentDetails;
