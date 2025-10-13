import bg from '@/assets/imgs/HouseAndLotBG.jpg';
import PropertyFilterBar from '@/components/filtering/PropertyFilterBar';
import PropertyCard from '@/components/filtering/PropertyCard';
import { FaBed, FaCar, FaBath } from 'react-icons/fa';
import { propertiesHouseAndLotForSale } from '@/constants/housePropertyData';

const BuyHouseAndLot = () => {
	return (
		<section className="-mt-45">
			<div
				className="relative flex min-h-200 items-center justify-center"
				style={{
					backgroundImage: `url(${bg})`,
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center',
				}}
			>
				<h1 className="relative z-10 text-5xl text-white lg:text-6xl">Apartment For Sale</h1>

				<div className="absolute inset-0 rounded-2xl bg-[#39000073]/70"></div>
			</div>

			<div className="absolute -mt-55 w-full rounded-2xl bg-white shadow-2xl">
				<PropertyFilterBar />
			</div>

			<div className="pb-20">
				<PropertyCard
					data={propertiesHouseAndLotForSale}
					title="FOR SALE > HOUSES"
					noOfHouse="91,203 House and lot For Sale"
					icon={{
						bed: <FaBed className="text-primary" size={18} />,
						bath: <FaBath className="text-primary" size={18} />,
						garage: <FaCar className="text-primary" size={18} />,
					}}
					showHeart={false}
				/>
			</div>
		</section>
	);
};

export default BuyHouseAndLot;
