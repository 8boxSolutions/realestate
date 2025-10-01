import bg from '@/assets/imgs/HouseAndLotBG.jpg';
import { FilteringCard } from '@/components';

const BuyHouseAndLot = () => {
	return (
		<div className="min-h-screen">
			<div className="relative bg-primary/50">
				<img className="-z-10 h-[500px] w-full object-cover" src={bg} alt="House and Lot Background" />
				<div className="absolute inset-0 bg-primary/30" />
				<div className="absolute top-1/2 left-1/2 z-10 -translate-1/2 transform p-4">
					<h1 className="font-bold text-background">HOUSE AND LOT FOR SALE</h1>
				</div>
			</div>

			<main>
				<FilteringCard className="mx-5 -translate-y-1/2 transform" />
			</main>
		</div>
	);
};

export default BuyHouseAndLot;
