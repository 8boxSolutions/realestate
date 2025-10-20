import bg from '@/assets/lots/bg-lots-for-sale.png';
import PropertyFilterBar from '@/components/filtering/PropertyFilterBar';
import PropertyCard from '@/components/filtering/PropertyCard';
import { propertiesLotsForSale } from '@/constants/housePropertyData';

const LotsForSale = () => {
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
						data={propertiesLotsForSale}
						title="FOR SALE > LOT"
						noOfHouse="91,203 Lot For Sale"
						showDetails={false}
						basePath="/lots-for-sale"
					/>
				</div>
			</section>
		</div>
	);
};

export default LotsForSale;
