import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

const FilterArea = () => {
	return (
		<>
			<h1 className="text-[1.1rem] font-normal text-black">FLOOR AREA (sqm)</h1>
			<div className="my-5 flex gap-10">
				<div className="relative">
					<label className="absolute -top-2 left-2 bg-white px-1 text-xs text-gray-500">Min</label>
					<Input type="number" className="h-12 w-full" />
				</div>

				<div className="relative">
					<label className="absolute -top-2 left-2 bg-white px-1 text-xs text-gray-500">Min</label>
					<Input type="number" className="h-12 w-full" />
				</div>
			</div>
			<Separator className="my-5" />

			<h1 className="text-[1.1rem] font-normal text-black">LAND AREA (sqm)</h1>

			<div className="my-5 flex gap-10">
				<div className="relative">
					<label className="absolute -top-2 left-2 bg-white px-1 text-xs text-gray-500">Min</label>
					<Input type="number" className="h-12 w-full" />
				</div>

				<div className="relative">
					<label className="absolute -top-2 left-2 bg-white px-1 text-xs text-gray-500">Min</label>
					<Input type="number" className="h-12 w-full" />
				</div>
			</div>
		</>
	);
};

export default FilterArea;
