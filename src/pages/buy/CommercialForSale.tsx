import bg from '@/assets/commercials/bg-commercial-for-sale.png';
import PropertyFilterBar from '@/components/filtering/PropertyFilterBar';
import PropertyCard from '@/components/filtering/PropertyCard';
import { BsDoorOpen } from 'react-icons/bs';
import { propertiesCommercialsForSale } from '@/constants/housePropertyData';

const CommercialForSale = () => {
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
						data={propertiesCommercialsForSale}
						title="FOR SALE > COMMERCIAL"
						noOfHouse="91,203 Commercial Space For Sale"
						icon={{
							unit: <BsDoorOpen className="text-primary" size={18} />,
						}}
						type="commercial"
						showDetails={false}
						basePath="/commercial-unit-for-sale"
					/>
				</div>
			</section>
		</div>
	);
};

export default CommercialForSale;
