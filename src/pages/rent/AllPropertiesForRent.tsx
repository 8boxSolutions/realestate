import PropertyCard from '@/components/filtering/PropertyCard';
import { FaBed, FaCar, FaBath } from 'react-icons/fa';
import BookARent from '@/bookings/BookARent';
import { BsDoorOpen } from 'react-icons/bs';
import {
	propertiesCondoAll,
	propertiesApartmentAll,
	propertiesLotsAll,
	propertiesCommercialsAll,
	propertiesHouseAndLotAll,
} from '@/constants/housePropertyData';

const AllPropertiesForRent = () => {
	return (
		<div className="pb-10">
			<div className="px-30">
				<BookARent />
			</div>

			{/* HOUSE */}
			<PropertyCard
				data={propertiesHouseAndLotAll}
				title="FOR RENT > HOUSES"
				noOfHouse="91,203 House And Lot For rent"
				icon={{
					bed: <FaBed className="text-primary" size={18} />,
					unit: <BsDoorOpen className="text-primary" size={18} />,
					garage: <FaCar className="text-primary" size={18} />,
					bath: <FaBath className="text-primary" size={18} />,
				}}
			/>

			{/* APARTMENT */}
			<PropertyCard
				data={propertiesApartmentAll}
				title="FOR RENT > APARTMENT"
				noOfHouse="91,203 Apartment For Rent"
				icon={{
					bed: <FaBed className="text-primary" size={18} />,
					unit: <BsDoorOpen className="text-primary" size={18} />,
					garage: <FaCar className="text-primary" size={18} />,
					bath: <FaBath className="text-primary" size={18} />,
				}}
			/>

			{/* COMMERCIAL */}
			<PropertyCard
				data={propertiesCommercialsAll}
				title="FOR RENT > COMMERCIAL SPACE"
				noOfHouse="91,203 Commercial Space For Rent"
				icon={{
					unit: <BsDoorOpen className="text-primary" size={18} />,
				}}
				type="commercial"
				showDetails={false}
			/>

			{/* CONDO */}
			<PropertyCard
				data={propertiesCondoAll}
				title="FOR RENT > CONDOMINIUM"
				noOfHouse="91,203 Condominium For Rent"
				icon={{
					bed: <FaBed className="text-primary" size={18} />,
					unit: <BsDoorOpen className="text-primary" size={18} />,
					garage: <FaCar className="text-primary" size={18} />,
				}}
			/>

			{/* LOT */}
			<PropertyCard
				data={propertiesLotsAll}
				title="FOR RENT > LOT"
				noOfHouse="91,203 Lot For Rent"
				showDetails={false}
			/>
		</div>
	);
};

export default AllPropertiesForRent;
