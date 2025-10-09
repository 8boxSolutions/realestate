import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
interface BedProps {
	ItemBed: string[];
}

const Bed: React.FC<BedProps> = ({ ItemBed }) => {
	return (
		<div>
			<Select>
				<SelectTrigger className="w-full border-none bg-[#F6F6F6] py-5 shadow-sm data-[placeholder]:text-black">
					<SelectValue placeholder="Bed" />
				</SelectTrigger>
				<SelectContent>
					{ItemBed.map((item, index) => (
						<SelectItem key={index} value={item}>
							<Checkbox /> {item}
						</SelectItem>
					))}
					<div className="flex justify-between px-2 pt-6 pb-2">
						<Button variant="outline">Cancel</Button>
						<Button>Apply</Button>
					</div>
				</SelectContent>
			</Select>
		</div>
	);
};

export default Bed;
