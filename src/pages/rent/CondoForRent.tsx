import bg from '@/assets/condo/bg-condo-for-sale.png';
import PropertyFilterBar from '@/components/filtering/PropertyFilterBar';
import PropertyCard from '@/components/filtering/PropertyCard';
import { propertiesCondoForSale } from '@/constants/housePropertyData';
import { BsDoorOpen } from 'react-icons/bs';
import { FaBed, FaCar } from 'react-icons/fa';

const CondoForRent = () => {
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
					<h1 className="text-white">Condominium For Rent</h1>
				</div>
				<div className="-mt-53 rounded-2xl bg-white shadow-2xl">
					<PropertyFilterBar />
				</div>

				<div className="pb-20">
					<PropertyCard
						data={propertiesCondoForSale}
						title="FOR RENT > CONDOMINIUM"
						noOfHouse="91,203 Condominium For Rent"
						icon={{
							bed: <FaBed className="text-primary" size={18} />,
							unit: <BsDoorOpen className="text-primary" size={18} />,
							garage: <FaCar className="text-primary" size={18} />,
						}}
					/>
				</div>
			</section>
		</div>
	);
};

export default CondoForRent;
