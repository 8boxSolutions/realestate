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

const AllProptertiesForSale = () => {
	return (
		<div className="pb-10">
			<div className="px-30">
				<BookARent />
			</div>

			{/* HOUSE */}
			<PropertyCard
				data={propertiesHouseAndLotAll}
				title="FOR SALE > HOUSES"
				noOfHouse="91,203 House And Lot For Sale"
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
				title="FOR SALE > APARTMENT"
				noOfHouse="91,203 Apartment For Sale"
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
				title="FOR SALE > COMMERCIAL SPACE"
				noOfHouse="91,203 Commercial Space For Sale"
				icon={{
					unit: <BsDoorOpen className="text-primary" size={18} />,
				}}
				type="commercial"
				showDetails={false}
			/>

			{/* CONDO */}
			<PropertyCard
				data={propertiesCondoAll}
				title="FOR SALE  > CONDOMINIUM"
				noOfHouse="91,203 Condominium For Sale"
				icon={{
					bed: <FaBed className="text-primary" size={18} />,
					unit: <BsDoorOpen className="text-primary" size={18} />,
					garage: <FaCar className="text-primary" size={18} />,
				}}
			/>

			{/* LOT */}
			<PropertyCard
				data={propertiesLotsAll}
				title="FOR SALE > LOT"
				noOfHouse="91,203 Lot For Rent"
				showDetails={false}
			/>
		</div>
	);
};

export default AllProptertiesForSale;
