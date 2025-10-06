import React from 'react';
import SearchFilter from '@/bookings/SearchFilter';
import ListingFilters from './ListingFilters';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const PropertyFilterBar = () => {
	return (
		<div className="px-10 py-10">
			<SearchFilter>
				<div className="relative w-full">
					<Input placeholder="Location" className="bg-[#F6F6F6] py-7" />

					<div className="absolute top-3 right-6">
						<Search size={30} />
					</div>
				</div>
			</SearchFilter>

			<ListingFilters />
		</div>
	);
};

export default PropertyFilterBar;
