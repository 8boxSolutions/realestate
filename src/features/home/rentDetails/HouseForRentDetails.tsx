import { useParams } from 'react-router-dom';

import PropertiesDetailsCard from '@/components/detailsProperties/PropertyDetailsCard';
import { houseProperties } from '@/constants/buyPropertiesDetails';

// ICON
import area from '@/assets/imgs/area.svg';
import beds from '@/assets/imgs/beds.svg';
import baths from '@/assets/imgs/baths.svg';
import floor from '@/assets/imgs/floor.svg';
import construction from '@/assets/imgs/construction.svg';
import elevator from '@/assets/imgs/elevator.svg';
import parking from '@/assets/imgs/parking.svg';
import wifi from '@/assets/imgs/wifi.svg';
import tv from '@/assets/imgs/TV.svg';

const HouseForRentDetails = () => {
	const { houseId } = useParams<{ houseId: string }>();
	const property = houseProperties.find((item) => item.id === houseId);

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
				breadCrumb="FOR RENT > HOUSES > "
				icons={icons}
				showAvailable={true}
				type="house"
			/>
		</div>
	);
};

export default HouseForRentDetails;
