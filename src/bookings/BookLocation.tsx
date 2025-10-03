import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const bookLocation = [
	{ value: 'all', label: 'All' },
	{ value: 'luzon', label: 'Luzon' },
	{ value: 'visaya', label: 'Visaya' },
	{ value: 'mindanao', label: 'Mindanao' },
];

const BookLocation = () => {
	return (
		<div className="w-full">
			<Select>
				<SelectTrigger className="w-full">
					<SelectValue placeholder="Location" />
				</SelectTrigger>
				<SelectContent>
					{bookLocation.map((location) => (
						<SelectItem key={location.value} value={location.value}>
							{location.label}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	);
};

export default BookLocation;
