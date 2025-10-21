import { useParams } from 'react-router-dom';

import PropertiesDetailsCard from '@/components/detailsProperties/PropertyDetailsCard';
import { apartmantProperties } from '@/constants/PropertiesDetailsData';

import area from '@/assets/imgs/area.svg';
import beds from '@/assets/imgs/beds.svg';
import baths from '@/assets/imgs/baths.svg';
import floor from '@/assets/imgs/floor.svg';
import construction from '@/assets/imgs/construction.svg';
import elevator from '@/assets/imgs/elevator.svg';
import parking from '@/assets/imgs/parking.svg';
import wifi from '@/assets/imgs/wifi.svg';
import tv from '@/assets/imgs/TV.svg';

const ApartmentsForRentDetails = () => {
	const { apartmentId } = useParams<{ apartmentId: string }>();
	const property = apartmantProperties.find((item) => item.id === apartmentId);

	console.log('dasdsa', property);

	const icons = {
		totalArea: area,
		bedRooms: beds,
		bathrooms: baths,
		floor: floor,
		constructionYear: construction,
		elevator: elevator,
		parking: parking,
		wifi: wifi,
		TV: tv,
	};

	return (
		<div>
			<PropertiesDetailsCard
				dataDetails={property}
				icons={icons}
				breadCrumb="FOR RENT > APARTMENT > "
				type="apartment"
			/>
		</div>
	);
};

export default ApartmentsForRentDetails;
