import bg from '@/assets/foreclosures/bgForeclosure.png';
import PropertyFilterBar from '../components/filtering/PropertyFilterBar';
import PropertyCard from '../components/filtering/PropertyCard';
import { propertiesForeclosures } from '@/constants/housePropertyData';
import { FaBed, FaCar, FaBath } from 'react-icons/fa';

const ForeclosuresSection = () => {
	return (
		<div className="-mt-45">
			<div
				className="flex min-h-200 items-center justify-center"
				style={{
					backgroundImage: `url(${bg})`,
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center',
				}}
			>
				<h1 className="text-white">HOUSE FORECLOSURE</h1>
			</div>
			<div className="-mt-53 rounded-t-2xl bg-white shadow-2xl">
				<PropertyFilterBar />
			</div>
			<div className="pb-20">
				<PropertyCard
					data={propertiesForeclosures}
					title="FORECLOSURE > HOUSE"
					noOfHouse="91,203 House Foreclosure"
					icon={{
						bed: <FaBed className="text-primary" size={18} />,
						bath: <FaBath className="text-primary" size={18} />,
						garage: <FaCar className="text-primary" size={18} />,
					}}
					basePath="/foreclosures"
				/>
			</div>
		</div>
	);
};

export default ForeclosuresSection;
