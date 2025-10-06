import Offer from './Offer';
import PriceRange from './PriceRange';
import SortBy from './SortBy';
import Bed from './Bed';
import BookFilter from '@/bookings/BookFilter';
import filterIcon from '@/assets/homepage/Vector.svg';

const offer = [
	{ value: 'for sale', label: 'For Sale' },
	{ value: 'for rent', label: 'For Rent' },
];

const bed = ['1', '2', '3', '4', '5+'];

const sortBy = ['Popular', 'Newest', 'Price (High to Low)', 'Price (High to Low)'];

const ListingFilters = () => {
	return (
		<div className="mt-20 grid grid-cols-3 gap-2 sm:grid-cols-5">
			<Offer offerType={offer} />

			<PriceRange />
			<Bed ItemBed={bed} />
			<SortBy sortItem={sortBy} />
			<BookFilter
				triggerButton={
					<button className="flex w-full items-center justify-between gap-2 rounded-md border border-none bg-[#F6F6F6] px-2 py-2 shadow-sm">
						More
						<img src={filterIcon} alt="Filter" className="size-5" />
					</button>
				}
			/>
		</div>
	);
};

export default ListingFilters;
