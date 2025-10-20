import bg from '@/assets/apartment/bg-apartment-for-sale.png';
import PropertyFilterBar from '@/components/filtering/PropertyFilterBar';
import PropertyCard from '@/components/filtering/PropertyCard';
import { FaBed, FaCar, FaBath } from 'react-icons/fa';
import { propertiesApartmentForSale } from '@/constants/housePropertyData';

const ApartmentForSale = () => {
	return (
		<div>
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
					<h1 className="text-center text-5xl text-white lg:text-6xl">Condominium For Rent</h1>
				</div>
				<div className="-mt-53 rounded-2xl bg-white shadow-2xl">
					<PropertyFilterBar />
				</div>

				<div className="pb-20">
					<PropertyCard
						data={propertiesApartmentForSale}
						title="FOR SALE > APARTMENT"
						noOfHouse="91,203 Apartment For Sale"
						icon={{
							bed: <FaBed className="text-primary" size={18} />,
							bath: <FaBath className="text-primary" size={18} />,
							garage: <FaCar className="text-primary" size={18} />,
						}}
						basePath="/apartments-for-sale"
					/>
				</div>
			</section>
		</div>
	);
};

export default ApartmentForSale;
