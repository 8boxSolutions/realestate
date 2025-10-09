import bg from '@/assets/lots/bg-lots-for-sale.png';
import PropertyFilterBar from '@/components/filtering/PropertyFilterBar';
import PropertyCard from '@/components/filtering/PropertyCard';
import { propertiesLotsForSale } from '@/constants/housePropertyData';

const LotsForRent = () => {
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
					<h1 className="text-5xl text-white lg:text-8xl">Lot For Rent</h1>
				</div>
				<div className="-mt-53 rounded-2xl bg-white shadow-2xl">
					<PropertyFilterBar />
				</div>

				<div className="pb-20">
					<PropertyCard
						data={propertiesLotsForSale}
						title="FOR RENT > LOT"
						noOfHouse="91,203 Lot For Rent"
						showDetails={false}
					/>
				</div>
			</section>
		</div>
	);
};

export default LotsForRent;
