import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
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
				</SelectContent>
			</Select>
		</div>
	);
};

export default Bed;
