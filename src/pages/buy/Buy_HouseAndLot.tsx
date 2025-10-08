import bg from '@/assets/imgs/HouseAndLotBG.jpg';
import apartment from '@/assets/apartment/img4.png';
import { FilteringCard, HouseAndLotCard, NavigationBreadcrumb, Pagination } from '@/components';

const tempData = {
	location: 'San Francisco, CA',
	address: '123 Main St, San Francisco, CA 94101',
	price: 1200000,
	area: 2500,
	garages: 2,
	bedrooms: 4,
	bathrooms: 3,
	agent: 'John Doe',
	postedAgo: '2 days ago',
	imageUrl: apartment,
};

const BuyHouseAndLot = () => {
	return (
		<div className="min-h-screen space-y-40">
			<header className="relative bg-primary/50">
				<img className="-z-10 h-[500px] w-full object-cover" src={bg} alt="House and Lot Background" />
				<div className="absolute inset-0 bg-primary/30" />
				<div className="absolute top-2/5 left-1/2 z-10 -translate-1/2 transform p-4">
					<h1 className="font-bold text-background">HOUSE AND LOT FOR SALE</h1>
				</div>

				<FilteringCard className="absolute left-0 w-full -translate-y-1/2 transform" />
			</header>

			<main className="mb-8 flex flex-col items-center gap-8">
				<NavigationBreadcrumb
					list={['HOME', 'FOR SALE', 'HOUSES']}
					className="transform text-2xl font-semibold text-primary"
					separatorClassname="text-primary !size-5"
				/>

				<h2>91,203 House and Lot for Sale</h2>

				<div className="grid grid-cols-3 gap-4">
					{Array.from({ length: 9 }).map((_, index) => (
						<HouseAndLotCard key={index} data={tempData} />
					))}
				</div>
			</main>

			<footer className="mb-8 flex justify-center">
				<Pagination total={100} current={2} />
			</footer>
		</div>
	);
};

export default BuyHouseAndLot;
