import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const categories = [
	{ value: 'all', label: 'All' },
	{ value: 'apartment', label: 'Apartment' },
	{ value: 'commercial space', label: 'Commercial Space' },
	{ value: 'condominium', label: 'Condominium' },
	{ value: 'house and lot', label: 'House and Lot' },
	{ value: 'lot', label: 'Lot' },
];

const BookCategories = () => {
	return (
		<div>
			<Select>
				<SelectTrigger className="w-full min-w-80">
					<SelectValue placeholder="Category" />
				</SelectTrigger>
				<SelectContent>
					{categories.map((category) => (
						<SelectItem key={category.value} value={category.value}>
							{category.label}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	);
};

export default BookCategories;
