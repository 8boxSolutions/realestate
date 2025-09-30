import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const propertyType = [
	{ value: 'for sale', label: 'For Sale' },
	{ value: 'for rent', label: 'For Rent' },
];

const BookPropertyType = () => {
	return (
		<div>
			<Select>
				<SelectTrigger className="w-full min-w-80">
					<SelectValue placeholder="Property Type" />
				</SelectTrigger>
				<SelectContent>
					{propertyType.map((type) => (
						<SelectItem key={type.value} value={type.value}>
							{type.label}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	);
};

export default BookPropertyType;
