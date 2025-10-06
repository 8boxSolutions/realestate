import bg from '@/assets/newdevelopments/bg.png';
import PropertyCard from '../filtering/PropertyCard';
import PropertyFilterBar from '../filtering/PropertyFilterBar';
import { property } from '@/constants/housePropertyData';

const NewDevelopmentsSection = () => {
	return (
		<section className="-mt-45">
			<div
				className="flex min-h-200 items-center justify-center"
				style={{
					backgroundImage: `url(${bg})`,
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center',
				}}
			>
				<h1 className="text-white">New Developement House For Sale</h1>
			</div>
			<div className="-mt-53 rounded-2xl bg-white shadow-2xl">
				<PropertyFilterBar />
			</div>

			<div className="py-20">
				<PropertyCard data={property} title="NEW DEVELOPMENT > HOUSE" noOfHouse="91,203 House New Developments" />
			</div>
		</section>
	);
};

export default NewDevelopmentsSection;
