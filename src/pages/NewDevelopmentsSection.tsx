import bg from '@/assets/newdevelopments/bg.png';
import PropertyCard from '../components/filtering/PropertyCard';
import PropertyFilterBar from '../components/filtering/PropertyFilterBar';
import { propertiesDevelopments } from '@/constants/housePropertyData';
import { FaBed, FaCar, FaBath } from 'react-icons/fa';

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
				<h1 className="text-center text-5xl text-white lg:text-8xl">New Developement House For Sale</h1>
			</div>
			<div className="-mt-53 rounded-2xl bg-white shadow-2xl">
				<PropertyFilterBar />
			</div>

			<div className="pb-20">
				<PropertyCard
					data={propertiesDevelopments}
					title="NEW DEVELOPMENT > HOUSE"
					noOfHouse="91,203 House New Developments"
					icon={{
						bed: <FaBed className="text-primary" size={18} />,
						bath: <FaBath className="text-primary" size={18} />,
						garage: <FaCar className="text-primary" size={18} />,
					}}
				/>
			</div>
		</section>
	);
};

export default NewDevelopmentsSection;
