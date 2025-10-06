import bg from '@/assets/foreclosures/bgForeclosure.png';
import PropertyFilterBar from '../filtering/PropertyFilterBar';
import PropertyCard from '../filtering/PropertyCard';
import { property } from '@/constants/housePropertyData';

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
			<div className="py-20">
				<PropertyCard data={property} title="FORECLOSURE > HOUSE" noOfHouse="91,203 House Foreclosure" />
			</div>
		</div>
	);
};

export default ForeclosuresSection;
