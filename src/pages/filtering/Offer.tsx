import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface OfferItem {
	value: string;
	label: string;
}

interface OfferProps {
	offerType: OfferItem[];
}

const Offer: React.FC<OfferProps> = ({ offerType }) => {
	return (
		<div>
			<Select>
				<SelectTrigger className="w-full border-none bg-[#F6F6F6] py-5 text-black shadow-sm data-[placeholder]:text-black">
					<SelectValue placeholder="Offer Type" />
				</SelectTrigger>
				<SelectContent className="">
					{offerType.map((item) => (
						<SelectItem key={item.value} value={item.value}>
							{item.label}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	);
};

export default Offer;
