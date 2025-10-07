import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
	DropdownMenuLabel,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const PriceRange = () => {
	return (
		<div>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button className="w-full justify-between border-none bg-[#F6F6F6] px-6 py-5 font-normal text-black shadow-sm hover:bg-[#F6F6F6]">
						Price Range <ChevronDown className="text-gray-400" />
					</Button>
				</DropdownMenuTrigger>

				<DropdownMenuContent className="w-90 space-y-3 p-4">
					<DropdownMenuLabel className="text-primary">Type Price Range (PHP)</DropdownMenuLabel>
					<div className="relative w-full">
						<label className="ri absolute -top-2 left-2 bg-white px-1 text-xs text-gray-500">Min</label>
						<Input type="number" className="h-10 w-full" />
					</div>

					<div className="relative">
						<label className="absolute -top-2 left-2 bg-white px-1 text-xs text-gray-500">Max</label>
						<Input type="number" className="h-10 w-full" />
					</div>

					<div className="flex justify-between pt-2">
						<Button variant="outline">Cancel</Button>
						<Button>Apply</Button>
					</div>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
};

export default PriceRange;
