import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface sortByProps {
	sortItem: string[];
}

const SortBy: React.FC<sortByProps> = ({ sortItem }) => {
	return (
		<div>
			<Select>
				<SelectTrigger className="py-5w-full w-full border-none bg-[#F6F6F6] py-5 text-black shadow-sm data-[placeholder]:text-black">
					<SelectValue placeholder="Sort By" />
				</SelectTrigger>
				<SelectContent>
					{sortItem.map((item, index) => (
						<SelectItem key={index} value={item}>
							{item}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	);
};

export default SortBy;
