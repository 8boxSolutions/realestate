import { useState } from 'react';

import {
	BedCountPopover,
	Card,
	CardContent,
	Input,
	LocationBadge,
	MoreFilterDialog,
	PriceRangePopover,
	PropertyTypeSelect,
	SortBySelect,
} from '@/components';
import { SearchIcon } from 'lucide-react';

const fakeLocations = ['Manila', 'Cebu', 'Davao', 'Baguio', 'Iloilo', 'Bacolod', 'Cagayan de Oro', 'Zamboanga'];

type FilteringCardProps = {
	className?: string;
};

const FilteringCard = ({ className }: FilteringCardProps) => {
	const [location, setLocation] = useState<string[]>([]);

	const handleRemoveLocation = (loc: string) => {
		setLocation(location.filter((l) => l !== loc));
	};

	const handleAddLocation = (loc: string) => {
		if (!location.includes(loc)) {
			setLocation([...location, loc]);
		}
	};

	return (
		<Card className={className}>
			<CardContent className="space-y-4">
				<section className="flex items-center gap-3 overflow-x-scroll rounded-md border-input bg-muted px-4 py-3">
					{location.map((loc, index) => (
						<LocationBadge key={index} loc={loc} onClose={() => handleRemoveLocation(loc)} />
					))}
					<Input className="min-w-80 border-none bg-transparent shadow-none focus:ring-0" />
					<SearchIcon className="shrink-0" />
				</section>

				<section>
					{fakeLocations.map((loc, index) => (
						<LocationBadge key={index} loc={loc} className="m-1" onClick={() => handleAddLocation(loc)} />
					))}
				</section>

				<section className="flex items-center gap-4">
					<PropertyTypeSelect className="flex-1" />
					<PriceRangePopover className="flex-1" />
					<BedCountPopover className="flex-1" />
					<SortBySelect className="flex-1" />
					<MoreFilterDialog className="flex-1" />
				</section>
			</CardContent>
		</Card>
	);
};

export default FilteringCard;
