import { Button } from '@/components/ui/button';

const bathroomsOptions = [
	{ label: '1', value: 1 },
	{ label: '2', value: 2 },
	{ label: '3', value: 3 },
	{ label: '4', value: 4 },
	{ label: '5+ ', value: '5+' },
];

const FilterBathrooms = () => {
	return (
		<div>
			<div className="grid grid-cols-5 gap-4">
				{bathroomsOptions.map((bath) => (
					<Button variant="outline" key={bath.value} className="">
						{bath.label}
					</Button>
				))}
			</div>
		</div>
	);
};
export default FilterBathrooms;
